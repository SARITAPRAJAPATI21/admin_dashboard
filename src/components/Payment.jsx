import axios from "axios";
import { useState,useEffect } from "react";
import { backendurl } from "../App";

export default function Payment() {
  const [payments, setPayments] = useState([]);

  

  const fetchProcess= async()=>{
    try {
        const response = await axios.get(backendurl + "api/order/list");
      console.log("response list", response.data.list)
       const pen= response.data.list ;
        const p= pen.filter(x=> x.status=='Delivered')
      setPayments(p)

        
    } catch (error) {
         console.log('error in payemt page',error)
    }
    
  }
  useEffect(()=>{
    fetchProcess()
  },[])
   console.log(payments)
    

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
              <tr key={payment._id} className="border-b border-gray-200 ">
                <td className="py-2 px-4 text-center">{payment.userId}</td>
                <td className="py-2 px-4 text-center">{payment.items[0]._id}</td>
                <td className="py-2 px-4 text-center">{payment.paymentMethod}</td>
                <td className="py-2 px-4 text-center">${payment.items[0].price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
