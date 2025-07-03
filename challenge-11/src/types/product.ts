export type Product = {
  id: number;
  name: string;
  price: number;
  original_price?: number;
  category: string;
  image: string;
  rating: number;
  review_count: number;
  discount?: number;
  description?: string;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
};
