import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import {
  FaBox,
  FaShoppingCart,
  FaTachometerAlt,
  FaUsers,
} from "react-icons/fa";
import Order from "./Order";
import Charts from "./Charts";
import Message from "./Message";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomerReviews from "./CustomerReview";
import axios from "axios";
import { backendurl } from "../App";
import { users } from "../assets/userData";
import OrderPlace from "./OrderPlace";
import ProductList from "./ProductList";

const Dashboard = ({ token }) => {
  const [totalpro, setTotalp] = useState();
  const[pending,setpending]=useState()
  const[cancel,setCancel]=useState()

  const fetchData = async () => {
    try {
      const response = await axios.get(backendurl + "api/product/list");
     // console.log(response.data.products.length, "fetchdata method called");
      setTotalp(response.data.products.length);

    } catch (error) {
      console.log("error fetch count");
    }
  };
   const fetchPending =async()=>{
    try {  console.log("pending order")
      const response = await axios.get(backendurl + "api/order/list");
      console.log(response.data.list)
       const pen= response.data.list ;
        const p= pen.filter(x=> x.status=='Processing')
        setCancel(pen.filter(x=> x.status=='Cancelled').length)
       
        setpending(p.length)

       
    } catch (error) {
      console.log("pending error order")
      
    }
   }
  useEffect(() => {
    fetchData();
    fetchPending()
  }, []);
  return (
    <div className="grow p-8 bg-gray-100">
      <div className="text-2xl mb-4"> Dashboard</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <NavLink to="/listitem">
          <Cart
            icon={<FaShoppingCart />}
            title=" Total Product "
            value={totalpro}
          />
        </NavLink>
        <NavLink to="/users">
          <Cart icon={<FaBox />} title="users " value={users.length} />
        </NavLink>
        <NavLink to="/cancel">
          {" "}
          <Cart icon={<FaBox />} title="cancel " value={cancel} />
        </NavLink>
       <NavLink to='/processing'> <Cart icon={<FaBox />} title="processing " value={pending} /></NavLink>
      </div>

    <OrderPlace />
     <ProductList />
      <Charts />

      <div className="flex flex-col md:flex-row">
        {" "}
        <CustomerReviews />
        
      </div>
    </div>
  );
};

export default Dashboard;
