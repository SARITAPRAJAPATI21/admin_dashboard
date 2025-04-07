import React from "react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { backendurl } from "../App";
import axios from "axios";

const Additem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");

  const handleAddProduct = async (e) => {
    e.preventDefault();
    console.log('add functionality');
    try {
      const res = await fetch(backendurl+"api/product/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          price,
          description
        }),
      });
      const data = res.json();
      console.log(res.status)
      //console.log(response.data.message)
     
      
    if (res.status === 400 || !data) {
      toast.error("product already exits in list");
     // window.alert("product already exits in list");

    } 
     
    else{
       toast.success("add successfully");
     // window.alert("add successfully");
  
      
     }
    } catch (error) {
      //400 request not add beaces product
      toast.error("server error");
    }
  };
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add Product</h2>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Product Name"
            required
          />
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Product Price"
            required
          />
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Product Description"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          >
            Add Product
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Additem;
