import React, { useEffect, useState } from 'react'
import { backendurl } from '../App'
import axios from 'axios'


const statuses = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];
const Cancel = () => {
  const [proces,setprocess]=useState([])
  

  const fetchProcess= async()=>{
    try {
        const response = await axios.get(backendurl + "api/order/list");
      console.log(response.data.list)
       const pen= response.data.list ;
        const p= pen.filter(x=> x.status=='Cancelled')
        setprocess(p)

        
    } catch (error) {
         console.log('error in process page',error)
    }
    
  }
  useEffect(()=>{
    fetchProcess()
  },[])
   console.log(proces)
    
  return (
    <div>
     <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Processing order </h1>
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
            {proces.map(order => (
             <tr key={order._id} className="text-center">
            
                <td className="px-4 py-2 border  border-gray-300">{order._id}</td>
                <td className="px-4 py-2 border  border-gray-300">{order.address.Name}</td>
                <td className="px-4 py-2 border  border-gray-300">{order.items[0].name}</td>
                <td className="px-4 py-2 border  border-gray-300">{order.amount}</td>
                <td className="px-4 py-2 border  border-gray-300">
                 {order.status}
                
                </td>
                {/* <td className='text-blue-500 hover:text-white hover:bg-blue-500'><Link  to={`${order._id}`} onClick={()=> setOrderId(order._id)}>see more </Link>   </td> */}
              </tr>
             
            ))} 
          </tbody>

        </table>
     
      </div>
    </div>
    </div>
  )
}

export default Cancel
