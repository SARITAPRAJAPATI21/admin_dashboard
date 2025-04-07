import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import { FaBox, FaShoppingCart, FaTachometerAlt, FaUsers } from "react-icons/fa";
import {  dataLine,dataBar }  from '../assets/chartData'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import Order from './Order';
import Charts from './Charts';
import Message from './Message';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import CustomerReviews from './CustomerReview';
import axios from 'axios';
import { backendurl } from '../App';
import { users } from '../assets/userData';




const Dashboard = ({token}) => {
  const [totalpro,setTotalp]=useState()
  

  const fetchData = async () => {
    try {
      const response = await axios.get(backendurl + "api/product/list");
      console.log(response.data.products.length, "fetchdata method called");
       setTotalp(response.data.products.length)

    } catch (error) {
      console.log("error fetch count");
    }
  };
  useEffect(()=>{
   fetchData()
    }
  ,[])
  return (
    <div className='grow p-8 bg-gray-100'>
     <div className='text-2xl mb-4'> Dashboard</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
      <NavLink to='/listitem'><Cart icon={ <FaShoppingCart/>} title=' Total Product ' value={totalpro}/></NavLink>
     <NavLink to='/users'><Cart icon={ <FaBox/>} title='users ' value={users.length}/></NavLink> 
     <NavLink to='/charts'> <Cart icon={ <FaBox/>} title='revenue ' value='$800'/></NavLink>
      <Cart icon={ <FaBox/>} title='cancel ' value='20'/>
    </div>
 
  <Charts />
  <Order/>
 <div className='flex flex-col md:flex-row'> <CustomerReviews/>
 <Message/></div>
 
  

    </div>
  )
}

export default Dashboard
