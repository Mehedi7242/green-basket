import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthProvider";

const OrderPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      toast.error("No user logged in!");
      navigate("/login");
      return;
    }

    const fetchOrderDetails = async () => {
      try {
        const response = await fetch("http://localhost:5000/orders");
        const data = await response.json();

        const userOrders = data.filter((order) => order.customer.email === user.email);
        if (userOrders.length > 0) {
          setOrders(userOrders);
        } else {
          toast.error("No orders found for this email.");
        }
      } catch (error) {
        toast.error("Error fetching order details.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [navigate, user]);

  const handleReturnToShop = () => {
    navigate("/");
  };

  if (loading) {
    return <p className="text-center text-gray-600">Loading order details...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-8 text-center text-gray-800">Your Orders</h1>

      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order._id} className="border p-6 rounded-lg shadow-md mb-8 bg-white hover:shadow-xl transition-shadow">
            {/* Order Header */}
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Order ID: {order._id}</h2>
              <p className="text-lg text-green-600">Total: {order.totalAmount} tk</p>
            </div>

            {/* Order Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border p-4 rounded-lg shadow-sm bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Subscription</h3>
                <p>{order.subscription === "1" ? "None" : `${order.subscription} Days`}</p>
              </div>

              <div className="border p-4 rounded-lg shadow-sm bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Customer Info</h3>
                <p><span className="font-semibold">Name:</span> {order.customer.name}</p>
                <p><span className="font-semibold">Email:</span> {order.customer.email}</p>
                <p><span className="font-semibold">Address:</span> {order.customer.address}</p>
                <p><span className="font-semibold">City:</span> {order.customer.city}</p>
                <p><span className="font-semibold">Zip Code:</span> {order.customer.zip}</p>
              </div>
            </div>

            {/* Items List */}
            <div className="border-t pt-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Items Ordered</h3>
              <div className="space-y-4">
                {order.cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                    <p className="text-lg font-medium">{item.name} (x{item.quantity})</p>
                    <p className="text-lg text-gray-600">{item.totalPrice} tk</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-lg text-gray-600">No orders found for this user.</p>
      )}

      {/* Return to Shop Button */}
      <div className="mt-6 text-center">
        <button
          className="btn btn-primary py-2 px-6 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md"
          onClick={handleReturnToShop}
        >
          Return to Shop
        </button>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default OrderPage;
