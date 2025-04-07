import React, { useState } from 'react'
import { users } from '../assets/userData'

const User = () => {
   // const [user,setUser]=useState([userinfo.users]);

    

  return (
    <div>
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User List</h2>
      {users.map((user) => (
        <div key={user.user_id} className="border p-3 mb-2 rounded-lg shadow-sm">
          <p><strong>User ID:</strong> {user.user_id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Phone:</strong> {user.phone_number}</p>
        </div>
      ))}
    </div>
        
    </div>
  )
}

export default User
