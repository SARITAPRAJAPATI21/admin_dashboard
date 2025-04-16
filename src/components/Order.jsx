import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { backendurl } from '../App';


const statuses = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

export default function Order({setOrderId}) {
  const [orders, setOrders] = useState([]);

  const handleStatusChange = async(id, status) => {
    try {
       const response= await axios.post( backendurl+'api/order/update',{id,status})
        console.log(response)
        orderList()
        if(response.status===200)
          toast.success("status update successfully")

    } catch (error) {
      console.log("not update status")
      toast.error("Not updated")
      
    }
    
  };

  const orderList =async()=>{
    try {
       const response =await axios.get( backendurl+'api/order/list')
       setOrders(response.data.list)
     console.log(orders)
    } catch (error) {
      console.log(" erior")
      
    }
  }
  useEffect(()=>{
    orderList();
  
  
  },[])
  //console.log(" order list", typeof orders)


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Order Management</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto  border-0 border-gray-200">
          <thead>
            <tr className="bg-blue-400 shadow-md">
              <th className="px-4 py-2 border">Order ID</th>
              <th className="px-4 py-2 border">Customer</th>
              <th className="px-4 py-2 border">Product</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">Status</th>
             <th className="px-4 py-2 border">Details</th>  
            </tr>
          </thead>
          <tbody className='bg-white shadow-md'>
            {orders.map(order => (
             <tr key={order._id} className="text-center">
            
                <td className="px-4 py-2 border  border-gray-300">{order._id}</td>
                <td className="px-4 py-2 border  border-gray-300">{order.address.Name}</td>
                <td className="px-4 py-2 border  border-gray-300">{order.items[0].name}</td>
                <td className="px-4 py-2 border  border-gray-300">${order.amount}</td>
                <td className="px-4 py-2 border  border-gray-300">
                  <select
                    className="border border-gray-300 rounded px-2 py-1"
                    value={order.status}
                    onChange={e => handleStatusChange(order._id, e.target.value)}
                  >
                    {statuses.map(status => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
                 <td className='text-blue-500 hover:text-white hover:bg-blue-500'><Link  to={`${order._id}`} onClick={()=> setOrderId(order._id)}>see more </Link>   </td> 
              </tr>
             
            ))} 
          </tbody>

        </table>
        <ToastContainer/>
      </div>
    </div>
  );
}
