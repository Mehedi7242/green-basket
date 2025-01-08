import React, { useState, useEffect } from "react";

const OrderManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [orders, setOrders] = useState([]);

  // Fetch orders from API
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  // Handle search functionality
  const handleSearch = () => {
    if (!searchQuery) {
      fetch("http://localhost:5000/orders")
        .then((response) => response.json())
        .then((data) => setOrders(data));
    } else {
      const filteredOrders = orders.filter((order) =>
        order._id.includes(searchQuery) || order.customer.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setOrders(filteredOrders);
    }
  };

  const handleClear = () => {
    setSearchQuery(""); // Clear search query
    fetch("http://localhost:5000/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data)); // Reset orders to initial state
  };

  // Toggle the subscription (delivery status)
  const toggleStatus = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order._id === orderId
          ? {
              ...order,
              subscription: order.subscription === "Pending" ? "Delivered" : "Pending",
            }
          : order
      )
    );
  };

  // Delete an order
  const deleteOrder = (orderId) => {
    fetch(`http://localhost:5000/orders/${orderId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
        } else {
          console.error("Failed to delete the order");
        }
      })
      .catch((error) => console.error("Error deleting order:", error));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl">Order Management</h1>
        <nav>
          <a href="home.html" className="text-white px-3 hover:underline">
            Home
          </a>
          <a href="orders.html" className="text-white px-3 hover:underline">
            Orders
          </a>
          <a
            href="feedback.html"
            target="_blank"
            className="text-white px-3 hover:underline"
          >
            Feedback
          </a>
        </nav>
      </header>

      {/* Main content */}
      <main className="p-4">
        {/* Search Bar */}
        <div className="mb-6 flex">
          <input
            type="text"
            placeholder="Enter Order ID or Customer Name to search"
            className="p-2 w-80 mr-4 border border-gray-300 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-green-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-green-700"
          >
            Search
          </button>
          <button
            onClick={handleClear}
            className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Clear
          </button>
        </div>

        {/* Orders Table */}
        <table className="w-full table-auto bg-white border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2 text-left bg-gray-100">Order ID</th>
              <th className="border-b p-2 text-left bg-gray-100">Customer Name</th>
              <th className="border-b p-2 text-left bg-gray-100">Email</th>
              <th className="border-b p-2 text-left bg-gray-100">Total Amount</th>
              <th className="border-b p-2 text-left bg-gray-100">Cart Items</th>
              <th className="border-b p-2 text-left bg-gray-100">Delivery Status</th>
              <th className="border-b p-2 text-left bg-gray-100">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Orders data */}
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="border-b p-2">{order._id}</td>
                <td className="border-b p-2">{order.customer.name}</td>
                <td className="border-b p-2">{order.customer.email}</td>
                <td className="border-b p-2">${order.totalAmount}</td>
                <td className="border-b p-2">
                  {order.cartItems.map((item, index) => (
                    <div key={index}>
                      {item.name} (x{item.quantity}) - ${item.totalPrice}
                    </div>
                  ))}
                </td>
                <td className="border-b p-2">
                  <span
                    className={`font-bold ${order.subscription === "Pending" ? "text-red-500" : "text-green-500"}`}
                  >
                    {order.subscription}
                  </span>
                </td>
                <td className="border-b p-2">
                  <button
                    onClick={() => toggleStatus(order._id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2"
                  >
                    Mark as {order.subscription === "Pending" ? "Delivered" : "Pending"}
                  </button>
                  <button
                    onClick={() => deleteOrder(order._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>
          Contact Support | Terms of Service | Privacy Policy
        </p>
      </footer>
    </div>
  );
};

export default OrderManagement;
