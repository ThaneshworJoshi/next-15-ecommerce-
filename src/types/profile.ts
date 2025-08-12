export type ProfileTabKey = "profile" | "address" | "password" | "orders";

export type OrderStatus = "Delivered" | "Shipped" | "Cancelled";

export interface Order {
  id: string;
  date: string;
  total: number;
  status: OrderStatus;
}

export interface ProfileTab {
  key: ProfileTabKey;
  label: string;
} 