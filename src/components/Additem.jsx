import React from "react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { backendurl } from "../App";
import axios from "axios";
import { assets } from "../assets/assets";

const Additem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [image1,setImage1]=useState('')
  const [image2,setImage2]=useState('')
  const [image3,setImage3]=useState('')
  const [image4,setImage4]=useState('')

  const handleAddProduct = async (e) => {
    e.preventDefault();
    console.log('add functionality');
    try {
      const formData= new FormData()
      formData.append('name',name)
      formData.append('description',description)
      formData.append('price',price)
      image1 && formData.append('image1',image1)
      image2 && formData.append('image2',image2)
      image3 && formData.append('image3',image3)
      image4 && formData.append('image4',image4)
  
      const response= await axios.post(backendurl + 'api/product/add',formData)
      console.log(response)
      if(response.status===200){
        
        setName('')
        setDescription('')
        setPrice('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
      
  toast.success(response.data.message)

       }
      
    } catch (error) {
      //400 request not add beaces product
      toast.error("product already exists");
    }
  };
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add Product</h2>
        <form onSubmit={handleAddProduct} className="space-y-4">

        <div>
        <p className="mb-2"> Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img className="w-20" src={ !image1 ? assets.upload_area :URL.createObjectURL(image1)} alt="image" />
            <input onChange={(e) =>setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className="w-20" src={!image2 ? assets.upload_area :URL.createObjectURL(image2)} alt="image" />
            <input  onChange={(e) =>setImage2(e.target.files[0])}  type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img className="w-20" src={!image3 ? assets.upload_area :URL.createObjectURL(image3)} alt="image" />
            <input onChange={(e) =>setImage3(e.target.files[0])} type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img className="w-20" src={!image4 ? assets.upload_area :URL.createObjectURL(image4)} alt="image" />
            <input  onChange={(e) =>setImage4(e.target.files[0])} type="file" id="image4" hidden />
          </label>
        </div>
      </div>{" "}
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
            type="number"
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
