import { ProfileTab, Order, OrderStatus } from "@/types";

export const PROFILE_TABS: ProfileTab[] = [
  { key: "profile", label: "Profile" },
  { key: "address", label: "Address" },
  { key: "password", label: "Change Password" },
  { key: "orders", label: "Orders" },
];

export const MOCK_ORDERS: Order[] = [
  { id: "ORD-1001", date: "2024-05-01", total: 129.99, status: "Delivered" },
  { id: "ORD-1002", date: "2024-04-15", total: 89.50, status: "Shipped" },
  { id: "ORD-1003", date: "2024-03-28", total: 49.00, status: "Cancelled" },
];

export const ORDER_STATUS_STYLES: Record<OrderStatus, string> = {
  Delivered: "bg-green-100 text-green-700",
  Shipped: "bg-blue-100 text-blue-700",
  Cancelled: "bg-red-100 text-red-700",
}; 