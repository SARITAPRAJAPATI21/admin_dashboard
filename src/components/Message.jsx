import React, { useState } from "react";

const Message = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Customer", text: "Is this product available in large size?", time: "10:30 AM" },
    { id: 2, sender: "Support", text: "Yes, we have large sizes in stock.", time: "10:35 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { id: messages.length + 1, sender: "Customer", text: newMessage, time: "Now" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h2 className="text-2xl font-semibold mb-4">Customer Queries</h2>
      <div className="bg-white p-4 rounded-lg shadow-md h-96 overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className={`mb-2 ${msg.sender === "Customer" ? "text-left" : "text-right"}`}>
            <p className={`inline-block p-2 rounded-lg ${msg.sender === "Customer" ? "bg-gray-200" : "bg-blue-500 text-white"}`}>
              {msg.text}
            </p>
            <span className="block text-xs text-gray-500 mt-1">{msg.time}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 rounded-r-lg">Send</button>
      </div>
    </div>
  );
};

export default Message;
