import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa6";

const Navbar = ({settoken}) => { 


   const location = useLocation();
   console.log(location.pathname)
  
  return (
    <div className='  bg-gray-100 text-gray-900 p-4  md:px-12   flex items-center border-b justify-between border-gray-300 uppercase ' >
    
     {
       (location.pathname=='/') 
       ?  <h1>Dashboard </h1>:
        (location.pathname=='/orders'?  <h1>/orders </h1>:
        (location.pathname=='/charts')?  <h1>/charts </h1>:
        (location.pathname=='/product')?  <h1>/product management </h1>: 
        (location.pathname=='/payment')?  <h1>/payment information </h1>: 
        (location.pathname=='/message')?  <h1>/customer Queries </h1>: <h1>/report </h1>
        ) 
       }
       <div className='flex gap-10'>
       <div className=' mt-4  after:content-["1"] after:relative after:-top-9 after:bg-black after:text-white after:w-7 after:rounded-full  after:left-2 after:text-center '>
      <FaBell className='text-blue-800 '/>

      </div>

      <button onClick={()=>settoken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-1 rounded-full'>logout</button>
      
      </div>
       
    
      
    </div>
  )
}

export default Navbar
