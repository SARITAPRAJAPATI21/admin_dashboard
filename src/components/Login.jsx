import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { backendurl } from "../App";

export default function Login({ settoken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [visible, setvisible] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Handle login");

      const response = await axios.post(backendurl + "api/user/login", {
        email,
        password,
      });
      toast.success("message login sucucess");
      console.log(response);

      if (response.data.success) {
        settoken(response.data.token);
        console.log("message login sucucess");
      }
    } catch (error) {
      toast.error("Invalid Information");
      console.log("Internal ");
    }
  };
  const handleResetPass = async (e) => {
    e.preventDefault();
    try {
      if (cpassword !== password) {
        toast.error("password must be same");
      } else {
        console.log("reset password ");
        const response = await axios.post(backendurl + "api/user/reset", {
          email,
          cpassword,
        });
        if (response.status === 200) {
          toast.success(response.data.message);
          setvisible(false);
        }
       
      }
    } catch (error) {
      toast.error("user not found");
      
      console.log("internal sever 404 handle reset");
    }
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          {visible == false ? "Login" : "Reset Password"}
        </h2>
        <form onSubmit={visible == false ? handleLogin : handleResetPass}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {visible ? (
            <div className="mb-4">
              <label className="block text-gray-700"> New Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                value={cpassword}
                onChange={(e) => setCPassword(e.target.value)}
                required
              />

            </div>
          ) : (
            " "
          )}
          {visible == false ? (
            
            <button
              onClick={() => setvisible(!visible)}
              className="text-sm font-semibold text-blue-500 pointer-cursor"
            >
              Forget password
            </button>
            
          ) : (
            ""
          )}
   
          <button
            type="submit"
            className=" mt-2 w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            {visible ? "Reset Password" : "Login"}
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
