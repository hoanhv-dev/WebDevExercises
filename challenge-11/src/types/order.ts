// src/types/order.ts
import { Order, PaymentStatus, DeliveryStatus } from '@prisma/client';

export type OrderItemInput = {
  productId: number;
  quantity: number;
  price: number;
};

export type CreateOrderInput = {
  shippingAddressId: string;
  billingAddressId?: string;
  items: OrderItemInput[];
  totalValue: number;
};

export type OrderWithItems = Order & {
  orderItems: Array<{
    id: string;
    quantity: number;
    price: number;
    product: {
      id: number;
      name: string;
      image: string;
      price: number;
    };
  }>;
  shippingAddress: {
    id: string;
    fullName: string;
    phone: string;
    street: string;
    city: string;
    ward: string;
  };
  billingAddress?: {
    id: string;
    fullName: string;
    phone: string;
    street: string;
    city: string;
    ward: string;
  };
};