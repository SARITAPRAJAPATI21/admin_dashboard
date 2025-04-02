import Charts from "./components/Charts";
import Dashboard from "./components/Dashboard";

import Message from "./components/Message";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import Payment from "./components/Payment";
import ProductForm from "./components/ProductForm";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { useState,useEffect } from "react";


export const backendurl='http://localhost:4000/api/user'


function App() {
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
              
              <Route path="/" element={<Dashboard />} />
              <Route path="/product" element={<ProductForm />} />
              <Route path="/orders" element={<Order/>} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/message" element={<Message />} />
              <Route path="/payment" element={<Payment />} />
              
          
            </Routes>
          </div>
        </div>
      </div>
    }
    </>
  );
}

export default App;
