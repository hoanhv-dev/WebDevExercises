"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { OrderWithItems } from "@/types/order";
import { format } from "date-fns";
import Image from "next/image";

export default function OrderDetails() {
  const { id } = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  const [order, setOrder] = useState<OrderWithItems | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!session?.user?.email) return;

      try {
        setLoading(true);
        const response = await fetch(`/api/orders/${id}`);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.error ||
              `Error ${response.status}: ${response.statusText}`
          );
        }

        const data = await response.json();
        setOrder(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load order");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id, session]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading order details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button
              onClick={() => router.push("/orders")}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Back to Orders
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Order not found
            </h2>
            <p className="text-gray-600 mb-6">
              The order you're looking for doesn't exist or you don't have
              permission to view it.
            </p>
            <Link
              href="/orders"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Orders
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "MMMM d, yyyy");
  };

  return (
    <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mt-10 rounded-xl">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link
            href="/orders"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
          >
            <svg
              className="h-4 w-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Orders
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">
            Order #{order.id.split("-")[0].toUpperCase()}
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Placed on {formatDate(order.createdAt.toString())}
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Order Status
            </h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className={`h-3 w-3 rounded-full ${
                    order.paymentStatus === "PAID"
                      ? "bg-green-500"
                      : order.paymentStatus === "PENDING"
                      ? "bg-blue-500"
                      : order.paymentStatus === "FAILED"
                      ? "bg-red-500"
                      : "bg-gray-300"
                  }`}
                ></div>
                <p>Payment Status:</p>
                <span className="ml-2 text-sm font-bold text-gray-700">
                  {order.paymentStatus === "PAID" ? "Paid" : "Pending Payment"}
                </span>
              </div>
              <div className="flex items-center">
                <div
                  className={`h-3 w-3 rounded-full ${
                    order.deliveryStatus === "DELIVERED"
                      ? "bg-green-500"
                      : order.deliveryStatus === "SHIPPED"
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                ></div>
                <p>Delivery Status:</p>
                <span className="ml-2 text-sm font-bold text-gray-700">
                  {order.deliveryStatus.charAt(0) +
                    order.deliveryStatus.slice(1).toLowerCase()}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Order Items
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                {order.orderItems.map((item) => (
                  <div key={item.id} className="p-4 sm:px-6 flex">
                    <div className="flex-shrink-0 h-20 w-20 rounded-md overflow-hidden">
                      <Image
                        src={item.product.image || "/placeholder-product.jpg"}
                        alt={item.product.name}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover object-center"
                        unoptimized
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <h4 className="text-sm font-medium text-gray-900">
                          {item.product.name}
                        </h4>
                        <p className="ml-4 text-sm font-medium text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Total</p>
                  <p>${order.totalValue.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Shipping Address
                </h3>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <address className="not-italic">
                  <div className="text-sm text-gray-700">
                    <p className="font-medium">
                      {order.shippingAddress.fullName}
                    </p>
                    <p>{order.shippingAddress.street}</p>
                    <p>{order.shippingAddress.ward}</p>
                    <p>{order.shippingAddress.city}</p>
                    <p className="mt-2">
                      <span className="font-medium">Phone:</span>{" "}
                      {order.shippingAddress.phone}
                    </p>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
