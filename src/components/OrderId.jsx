import React, { useEffect, useState } from "react";
import { backendurl } from "../App";
import axios from "axios";
import { useLocation } from "react-router-dom";

const OrderId = () => {
  const location = useLocation();
  const orderId = location.pathname.split("/").at(2);
  const [orderData, setOrderData] = useState([]);
 // console.log( location.pathname.split('/').at(2))

  const fetchOrderId = async () => {
    //console.log("orderid", orderId);
    try {
      const response = await axios.get(backendurl + "api/order/list");
       const data =response.data.list.filter(x=> x._id==orderId)
     
     setOrderData(data);
    
      //console.log(orderData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrderId();
  }, [orderId]);

  
 console.log('orderdata',orderData)
  
  return (
<div>
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
             {/**<th className="px-4 py-2 border">Details</th> */} 
            </tr>
          </thead>
          <tbody className='bg-white shadow-md'>
            {orderData.map(order => (
             <tr key={order._id} className="text-center">
            
                <td className="px-4 py-2 border  border-gray-300">{order._id}</td>
                <td className="px-4 py-2 border  border-gray-300">Name:{order.address.Name}<br/> <div> <span className="text-extrabold">address</span> <br/>
                 Country:{order.address.Country} <br/> state:{order.address.state} <br/> city: {order.address.city} <br/>
                 zipcode :{order.address.zipcode} 
                </div> </td>
                <td className="px-4 py-2 border  border-gray-300">Name:{order.items[0].name} <div className="flex flex-col items-center">
                <br></br> productId :{order.items[0]._id}
                <img  className ='size-20 ' src={order.items[0].image} alt="img"/>
                Price:  ${order.items[0].price} <br/>
                Description :{order.items[0].description}
                </div></td>
                <td className="px-4 py-2 border  border-gray-300">${order.amount}<br/> Payment Method : {order.paymentMethod}</td>
                <td className="px-4 py-2 border  border-gray-300">
              { order.status}
                </td>
                {/* <td className='text-blue-500 hover:text-white hover:bg-blue-500'><Link  to={`${order._id}`} onClick={()=> setOrderId(order._id)}>see more </Link>   </td> */}
              </tr>
             
            ))} 
          </tbody>

        </table>
       
      </div>
    </div>

</div>
  
) };

export default OrderId;
