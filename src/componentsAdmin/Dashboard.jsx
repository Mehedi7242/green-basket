import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch orders from the API
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5000/orders");
        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  // Calculate metrics
  const calculateMetrics = (orders) => {
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, order) => sum + parseFloat(order.totalAmount || 0), 0);

    const productCounts = {};
    orders.forEach((order) => {
      order.cartItems.forEach((item) => {
        productCounts[item.name] = (productCounts[item.name] || 0) + item.quantity;
      });
    });

    const mostPopularProduct = Object.keys(productCounts).length
      ? Object.keys(productCounts).reduce((a, b) =>
          productCounts[a] > productCounts[b] ? a : b
        )
      : "None";

    const averageOrderValue = totalOrders ? (totalRevenue / totalOrders).toFixed(2) : "0.00";

    return {
      totalOrders,
      totalRevenue,
      mostPopularProduct,
      averageOrderValue,
    };
  };

  const metrics = calculateMetrics(orders);

  // Prepare data for charts
  const ordersByCustomer = (orders) => {
    const customerOrderCounts = {};
    orders.forEach((order) => {
      const customer = order.customer.name;
      customerOrderCounts[customer] = (customerOrderCounts[customer] || 0) + 1;
    });

    return Object.entries(customerOrderCounts).map(([customer, count]) => ({
      name: customer,
      orders: count,
    }));
  };

  const topProducts = (orders) => {
    const productCounts = {};
    orders.forEach((order) => {
      order.cartItems.forEach((item) => {
        productCounts[item.name] = (productCounts[item.name] || 0) + item.quantity;
      });
    });

    return Object.entries(productCounts).map(([name, count]) => ({ name, value: count }));
  };

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#a4de6c", "#d0ed57"];

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6 space-y-6">
      {/* Metrics Section */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-green-200 p-4 rounded shadow">
          <h2 className="text-lg font-bold">Total Orders</h2>
          <p className="text-2xl">{metrics.totalOrders}</p>
        </div>
        <div className="bg-blue-200 p-4 rounded shadow">
          <h2 className="text-lg font-bold">Total Revenue</h2>
          <p className="text-2xl">৳{metrics.totalRevenue}</p>
        </div>
        <div className="bg-yellow-200 p-4 rounded shadow">
          <h2 className="text-lg font-bold">Most Popular Product</h2>
          <p className="text-2xl">{metrics.mostPopularProduct}</p>
        </div>
        <div className="bg-red-200 p-4 rounded shadow">
          <h2 className="text-lg font-bold">Average Order Value</h2>
          <p className="text-2xl">৳{metrics.averageOrderValue}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold mb-4">Orders by Customer</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ordersByCustomer(orders)}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold mb-4">Top Products</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={topProducts(orders)}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {topProducts(orders).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-bold mb-4">Orders</h3>
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Order ID</th>
              <th className="border border-gray-300 px-4 py-2">Customer Name</th>
              <th className="border border-gray-300 px-4 py-2">Total Amount</th>
              <th className="border border-gray-300 px-4 py-2">Subscription</th>
              <th className="border border-gray-300 px-4 py-2">Items</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{order._id}</td>
                <td className="border border-gray-300 px-4 py-2">{order.customer.name}</td>
                <td className="border border-gray-300 px-4 py-2">৳{order.totalAmount}</td>
                <td className="border border-gray-300 px-4 py-2">{order.subscription}</td>
                <td className="border border-gray-300 px-4 py-2">{order.cartItems.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
