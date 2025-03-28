import { useState } from "react";

export default function Payment() {
  const [payments, setPayments] = useState([
    { id: 1, customerId: "C001", productId: "P001", method: "Credit Card", price: "$100" },
    { id: 2, customerId: "C002", productId: "P002", method: "PayPal", price: "$150" },
    { id: 3, customerId: "C003", productId: "P003", method: "Bank Transfer", price: "$200" },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Payment Details</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-2 px-4">Customer ID</th>
              <th className="py-2 px-4">Product ID</th>
              <th className="py-2 px-4">Payment Method</th>
              <th className="py-2 px-4">Price</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-2 px-4 text-center">{payment.customerId}</td>
                <td className="py-2 px-4 text-center">{payment.productId}</td>
                <td className="py-2 px-4 text-center">{payment.method}</td>
                <td className="py-2 px-4 text-center">{payment.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
