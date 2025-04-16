import React from "react";

const Cart = ({ icon, title, value }) => {
  return (
    <div className="bg-white text-dark p-4 rounded-lg shadow-md flex itmes-center space-x-6 ">
      <div className="text-3xl text-gary-500">{icon}</div>
      <div >
        <p className="text-lg font-semibold"> {title}</p>
        <p className="text-xl"> {value}</p>
      </div>
    </div>
  );
};

export default Cart;
