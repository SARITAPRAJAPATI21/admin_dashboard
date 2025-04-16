import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { backendurl } from "../App";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [date,setDate]=useState('')
  const [visible,setvisble]=useState(false)
  const [filterproduct, setfilterproduct] = useState([]);


 // console.log(date.split("-").reverse().join("-"))


  const productfilter = async()=>{
    
    setvisble(true)
     console.log('visible',visible)
    const selectedDate=new Date(date).toLocaleDateString(undefined, { year: "numeric", month: "numeric", day: "numeric"} )
  console.log(selectedDate)
    const filteredProducts = products.filter(product => new Date(product.createdAt).toLocaleDateString(undefined,{ year: "numeric", month: "numeric", day: "numeric"} ) === selectedDate);
   setfilterproduct(filteredProducts)
     console.log('filter',filteredProducts,visible)
     
    
  }


  const fetchData = async () => {
    try {
      const response = await axios.get(backendurl + "api/product/list");
      console.log(response.data.products, "fetchdata method called");
      setProducts(response.data.products);
      console.log(products);
    } catch (error) {
      console.log("error");
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await axios.post(backendurl + "api/product/remove", {
        id,
      });
      console.log(response);
      if (response.status === 200) {
        toast.success(response.data.message);
        await fetchData();
      }
    } catch (error) {
      toast.error("not removed product");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 ">
    <div className="">
    <input type="date" placeholder="" value={date} onChange={(e)=>setDate(e.target.value)} className="w-35 bg-white md:w-60 px-3 py-2 rounded" /><span onClick={productfilter} className="bg-blue-500 px-6 py-2 text-white rounded-r text-sans  cursor-pointer hover:bg-black ">Search</span>
    </div>
      <div className="container mx-auto p-4  shadow-md bg-white rounded-lg  my-10">
        <h2 className="text-2xl font-semibold mb-4"> {visible? 'Search List' :  'Product List'}</h2>
        
        <div className="overflow-x-auto">
       
          <table className="w-full bg-white rounded-lg">
          {filterproduct.length==0 && visible==true ? <h1 className="text-xl font-semibold mb-4"> Product Not found 😔</h1>: 
            <thead>
              <tr className=" text-left">
                <th className=" w-22 p-3  text-sm font-semibold tracking-wide text-left border-b">
                  image
                </th>
                <th className=" w-50 p-3 text-sm font-semibold tracking-wide text-left border-b">
                  product name
                </th>
                <th className="  w-34 p-3  text-sm font-semibold tracking-wide text-left border-b">
                  Date
                </th>
                <th className=" w-30 p-3 text-sm font-semibold tracking-wide text-left  border-b">
                  price
                </th>
                <th className="   p-3 text-sm font-semibold tracking-wide text-left border-b">
                  Description
                </th>
              </tr>
            </thead>
          }
            <tbody>
            { visible ? filterproduct.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 border-b border-gray-200"
                >
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <img className='w-12' src={item.image[0]}  />
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                    {item.name}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    { new Date(item.createdAt).toLocaleDateString(undefined,{ year: "numeric", month: "numeric", day: "numeric"} )}
                  </td>
                  <td className="p-3 text-sm text-gray-700  whitespace-nowrap">
                    <span className={`px-2 py-1 rounded text-xs font-medium`}>
                      ${item.price}
                    </span>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {item.description}
                  </td>
                  <td
                    onClick={(e) => handleDelete(item._id)}
                    className="p-3 text-sm text-red-700 cursor-pointer  whitespace-nowrap"
                  >
                    X
                  </td>
                </tr>
              )) : 
              products.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 border-b border-gray-200"
                >
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <img className='w-12' src={item.image[0]}  />
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
                    {item.name}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    { new Date(item.createdAt).toLocaleDateString(undefined,{ year: "numeric", month: "numeric", day: "numeric"} )}
                  </td>
                  <td className="p-3 text-sm text-gray-700  whitespace-nowrap">
                    <span className={`px-2 py-1 rounded text-xs font-medium`}>
                      ${item.price}
                    </span>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {item.description}
                  </td>
                  <td
                    onClick={(e) => handleDelete(item._id)}
                    className="p-3 text-sm text-red-700 cursor-pointer  whitespace-nowrap"
                  >
                    X
                  </td>
                </tr>
              ))
            }
            </tbody>
          </table>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
