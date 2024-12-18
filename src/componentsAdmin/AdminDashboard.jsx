import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [orderData, setOrderData] = useState([]);
  const [categorySummary, setCategorySummary] = useState({});

  // Simulate fetching order data from API
  useEffect(() => {
    const fetchOrderData = async () => {
      const mockData = [
        { id: 1, productName: "Tomatoes", category: "Vegetables", quantity: 10, orderDate: "2024-12-15" },
        { id: 2, productName: "Carrots", category: "Vegetables", quantity: 5, orderDate: "2024-12-15" },
        { id: 3, productName: "Oranges", category: "Fruits", quantity: 8, orderDate: "2024-12-16" },
        { id: 4, productName: "Spinach", category: "Vegetables", quantity: 3, orderDate: "2024-12-16" },
        { id: 5, productName: "Apples", category: "Fruits", quantity: 12, orderDate: "2024-12-17" },
        { id: 6, productName: "Rice", category: "Grains", quantity: 20, orderDate: "2024-12-17" },
      ];

      setOrderData(mockData);

      // Group orders by category
      const summary = mockData.reduce((acc, order) => {
        if (!acc[order.category]) {
          acc[order.category] = { totalOrders: 0, totalQuantity: 0 };
        }
        acc[order.category].totalOrders += 1;
        acc[order.category].totalQuantity += order.quantity;
        return acc;
      }, {});

      setCategorySummary(summary);
    };

    fetchOrderData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Admin Dashboard</h1>

      {/* Orders by Category */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Orders by Category</h2>
        <div className="grid grid-cols-3 gap-6">
          {Object.entries(categorySummary).map(([category, { totalOrders, totalQuantity }]) => (
            <div
              key={category}
              className="bg-green-100 p-4 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-bold text-green-800">{category}</h3>
              <p className="text-gray-700">
                Total Orders: <span className="font-semibold">{totalOrders}</span>
              </p>
              <p className="text-gray-700">
                Total Quantity: <span className="font-semibold">{totalQuantity}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Order Details Table */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Details</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-green-200">
                <th className="border border-gray-300 px-4 py-2">Order ID</th>
                <th className="border border-gray-300 px-4 py-2">Product Name</th>
                <th className="border border-gray-300 px-4 py-2">Category</th>
                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                <th className="border border-gray-300 px-4 py-2">Order Date</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((order) => (
                <tr key={order.id} className="hover:bg-green-50">
                  <td className="border border-gray-300 px-4 py-2 text-center">{order.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{order.productName}</td>
                  <td className="border border-gray-300 px-4 py-2">{order.category}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{order.quantity}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{order.orderDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
