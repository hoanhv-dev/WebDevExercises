import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { CreateOrderInput } from "@/types/order";
import { Session } from "next-auth";

interface CustomSession extends Session {
  user: {
    id: string;
    email: string;
    name?: string | null;
    image?: string | null;
  };
}

// Get all orders for the current user
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "You must be logged in to view orders" },
        { status: 401 }
      );
    }

    const orders = await prisma.order.findMany({
      where: {
        user: {
          email: session.user.email,
        },
      },
      include: {
        orderItems: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                image: true,
                price: true,
              },
            },
          },
        },
        shippingAddress: true,
        billingAddress: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}

// Create a new order
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "You must be logged in to create an order" },
        { status: 401 }
      );
    }

    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Request must be JSON" },
        { status: 400 }
      );
    }

    const {
      shippingAddressId,
      billingAddressId,
      items,
      totalValue,
    }: CreateOrderInput = await request.json();

    // Validate input
    if (!shippingAddressId || !items || items.length === 0 || totalValue <= 0) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get user with addresses
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { addresses: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Verify shipping address exists and belongs to user
    const shippingAddress = user.addresses.find(
      (addr) => addr.id === shippingAddressId
    );

    if (!shippingAddress) {
      return NextResponse.json(
        { error: "Shipping address not found" },
        { status: 400 }
      );
    }

    // Verify billing address if provided
    let billingAddress = null;
    if (billingAddressId) {
      billingAddress = user.addresses.find(
        (addr) => addr.id === billingAddressId
      );

      if (!billingAddress) {
        return NextResponse.json(
          { error: "Billing address not found" },
          { status: 400 }
        );
      }
    }

    // Verify products exist
    const productIds = items.map((item) => Number(item.productId));
    const products = await prisma.product.findMany({
      where: { id: { in: productIds } },
    });

    if (products.length !== productIds.length) {
      return NextResponse.json(
        { error: "One or more products not found" },
        { status: 400 }
      );
    }

    // Create order
    const order = await prisma.order.create({
      data: {
        userId: user.id,
        shippingAddressId,
        billingAddressId: billingAddressId || null,
        totalValue,
        paymentStatus: "PENDING",
        deliveryStatus: "PROCESSING",
        orderItems: {
          create: items.map((item) => ({
            productId: Number(item.productId),  // Ensure productId is a number
            quantity: Number(item.quantity),    // Ensure quantity is a number
            price: Number(item.price),          // Ensure price is a number
          })),
        },
      },
      include: {
        orderItems: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
          },
        },
        shippingAddress: true,
        billingAddress: true,
      },
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
