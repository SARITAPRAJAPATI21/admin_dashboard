import React from "react";

const orders = [
  { id: 1, customer: "John Doe", date: "2025-03-27", status: "Pending", total: "$120.00" },
  { id: 2, customer: "Jane Smith", date: "2025-03-26", status: "Completed", total: "$200.00" },
  { id: 3, customer: "Mike Johnson", date: "2025-03-25", status: "Shipped", total: "$150.00" },
];

const Order = () => {
  return (
    <div className="container mx-auto p-4  shadow-md bg-white rounded-lg  my-10 ">
      <h2 className="text-2xl font-semibold mb-4">Order List</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg">
          <thead>
            <tr className=" text-left">
              <th className=" w-22 p-3  text-sm font-semibold tracking-wide text-left border-b">Order ID</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left border-b">Customer</th>
              <th className="  w-24 p-3  text-sm font-semibold tracking-wide text-left border-b">Date</th>
              <th className=" w-24 p-3 text-sm font-semibold tracking-wide text-left  border-b">Status</th>
              <th className="  w-32 p-3 text-sm font-semibold tracking-wide text-left border-b">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 border-b border-gray-200">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{order.id}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">{order.customer}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{order.date}</td>
                <td className="p-3 text-sm text-gray-700  whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
