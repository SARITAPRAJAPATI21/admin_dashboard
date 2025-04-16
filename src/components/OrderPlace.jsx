import React, { useEffect } from "react";
import axios from "axios";

const orders = [
  {
    orderId: "ORD001",
    userId: "USR123",
    item: "iPhone 14 Pro",
    date: "2025-04-01",
    paymentMethod: "Credit Card",
  },
  {
    orderId: "ORD002",
    userId: "USR456",
    item: "MacBook Air M3",
    date: "2025-04-03",
    paymentMethod: "PayPal",
  },
  {
    orderId: "ORD003",
    userId: "USR789",
    item: "Sony WH-1000XM5",
    date: "2025-04-05",
    paymentMethod: "Cash on Delivery",
  },
];

export default function OrderPlace() {
  return (
    <div className="p-6 bg-white shadow-md ">
      <h2 className="text-2xl font-semibold mb-4">Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto ">
          <thead className="">
            <tr>
              <th className="px-4 py-2 border ">Order ID</th>
              <th className="px-4 py-2 border">User ID</th>
              <th className="px-4 py-2 border">Item</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2 border">{order.orderId}</td>
                <td className="px-4 py-2 border">{order.userId}</td>
                <td className="px-4 py-2 border">{order.item}</td>
                <td className="px-4 py-2 border">{order.date}</td>
                <td className="px-4 py-2 border">{order.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
