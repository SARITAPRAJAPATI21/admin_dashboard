import Charts from "./components/Charts";
import Dashboard from "./components/Dashboard";

import Message from "./components/Message";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import Payment from "./components/Payment";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { useState,useEffect } from "react";
import Additem from "./components/Additem";
import User from "./components/User";
import OrderId from "./components/OrderId";
import axios from "axios";
import Processing from "./components/Processing";
import Cancel from "./components/Cancel";


export const backendurl='http://localhost:4000/'

function App() {

   const[orderId,setOrderId]=useState('')
  
  const [token ,settoken]=useState(localStorage.getItem('token')? localStorage.getItem('token'):'')

 
  useEffect(()=>{
   localStorage.setItem('token',token)


 
  },[token])
  return (
    <>

    {  
      token==''?<Login settoken={settoken}/>:
    
      <div className="flex">
   
        <Sidebar />

        <div className="grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900">
          <Navbar settoken={settoken} />
          <div>
            <Routes>
              
              <Route path="/" element={<Dashboard  token={token}/>} />
              <Route path="/additem" element={<Additem />} />
              <Route path="/listitem" element={<ProductList />} />
              <Route path="/orders" element={<Order setOrderId={setOrderId}/>} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/users" element={<User/>} />
              <Route path="/payment" element={<Payment />} />
               
              <Route path='/processing' element={<Processing/>} />
               
              <Route path='/cancel' element={<Cancel/>} />
              <Route path='orders/:orderId' element={<OrderId />} />
              
          
            </Routes>
          </div>
        </div>
      </div>
    }
    </>
  );
}

export default App;
