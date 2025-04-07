import React from "react";
import { NavLink } from "react-router-dom";
import { FaBox, FaShoppingCart, FaTachometerAlt, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className=" bg-gray-100  text-gray-900 h-screen px-4  pt-5 w-16 fixed md:w-64 border-r border-gray-300">
      <h1 className="text-2xl font-bold hidden md:block text-center italic">AdminShop</h1>
      <ul className="flex flex-col mt-5 text-xl">
      <NavLink to="/">
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-500 hover:text-white">
          <FaTachometerAlt />
          <span className="hidden md:block">Dashboard</span>
        </li>
        </NavLink>
        <NavLink to="/orders">
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-500 hover:text-white">
          <FaShoppingCart />
          <span className="hidden md:block">Orders</span>
        </li>
        </NavLink>
        <NavLink to="/charts">
        <li className="  flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-500 hover:text-white">
          <FaUsers />
          <span className="hidden md:block">Analytics</span>
        </li>
        </NavLink>
        <NavLink to='/additem'>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-500 hover:text-white">
          <FaBox />
          <span className="hidden md:block">Add item</span>
        </li>
        </NavLink>
        <NavLink to='/listitem'>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-500 hover:text-white">
          <FaBox />
          <span className="hidden md:block">list item</span>
        </li>
        </NavLink>
        <NavLink to='/users'>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-500 hover:text-white">
          <FaUsers />
          <span className="hidden md:block">users</span>
        </li>
        </NavLink>
        <NavLink to='/payment'>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-500 hover:text-white">
          <FaBox />
          <span className="hidden md:block">payment</span>
        </li>
        </NavLink>
        <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-500 hover:text-white">
          <FaBox />
          <span className="hidden md:block">Report</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
