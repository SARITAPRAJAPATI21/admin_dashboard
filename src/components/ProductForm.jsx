import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductForm() {
  
  const [product, setProduct] = useState({ name: "", price: "", description: ""});
  const [products, setProducts] = useState([]);
  const [visible,setvisible]=useState(false)
  
 

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (product.name.trim() !== "" && product.price.trim() !== "") {
      setProducts([...products, product]);
    
      toast.success("Success Notification !", {
        position: "top-right"
      });
     
      setProduct({ name: "", price: "", description: "" });
    
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
     <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 bg-gray-100 ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h3 className="text-lg font-bold">Add product</h3>
     
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"  onClick={() => setvisible(true)} > add item</button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h3 className="text-lg font-bold">Product List</h3>
     
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={() => setvisible(false)}>List itme</button>
      </div>
    </div>
    
    {visible ? (
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add Product</h2>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Product Name"
          />
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Product Price"
          />
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Product Description"
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
   
       
      ) : (
        <div className="container mx-auto p-4  shadow-md bg-white rounded-lg  my-10">
      <h2 className="text-2xl font-semibold mb-4">Product List</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg">
          <thead>
            <tr className=" text-left">
              <th className=" w-22 p-3  text-sm font-semibold tracking-wide text-left border-b">product ID</th>
              <th className=" w-50 p-3 text-sm font-semibold tracking-wide text-left border-b">product name</th>
              <th className="  w-34 p-3  text-sm font-semibold tracking-wide text-left border-b">Date</th>
              <th className=" w-30 p-3 text-sm font-semibold tracking-wide text-left  border-b">price</th>
              <th className="   p-3 text-sm font-semibold tracking-wide text-left border-b">Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index)=> (
              <tr key={index} className="hover:bg-gray-50 border-b border-gray-200">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{index+1}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">{item.name}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{new Date().toLocaleString()}</td>
                <td className="p-3 text-sm text-gray-700  whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium`}
                  >
                    ${item.price}
                  </span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
       
      )}
      </div>
      
  );
}
