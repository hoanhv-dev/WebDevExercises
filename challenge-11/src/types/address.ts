import { Address as PrismaAddress } from "@prisma/client";

export type Address = PrismaAddress & {
  fullName?: string;
  phone?: string;
};

export type FormData = {
  fullName: string;
  phone: string;
  address: Address[];
  city: string;
  district: string;
  note: string;
  paymentMethod: string;
};