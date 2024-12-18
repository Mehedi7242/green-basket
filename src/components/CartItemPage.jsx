import React, { useState } from "react";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartItemPage = () => {
  const [subscription, setSubscription] = useState("7"); // Default to 7 days
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: "Organic Tomato",
      price: 5.99,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Fresh Broccoli",
      price: 3.49,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Carrot",
      price: 2.99,
      quantity: 3,
      image: "https://via.placeholder.com/150",
    },
  ];

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubscriptionChange = (e) => {
    setSubscription(e.target.value);
  };

  const handleProceedToCheckout = () => {
    setShowPaymentModal(true);
  };

  const handleBkashPayment = () => {
    setShowPaymentModal(false);
    toast.success("Payment successful via Bkash!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>

      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border rounded-lg shadow-md"
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-lg"
            />

            {/* Product Details */}
            <div className="flex-1 ml-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-600">Price: ${item.price}</p>
            </div>

            {/* Quantity & Actions */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button className="btn btn-sm btn-outline">-</button>
                <span>{item.quantity}</span>
                <button className="btn btn-sm btn-outline">+</button>
              </div>

              <button className="btn btn-sm btn-error">Remove</button>
            </div>

            {/* Total Price for this item */}
            <div className="text-lg font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      {/* Subscription Option */}
      <div className="mt-6 p-4 border rounded-lg shadow-md bg-base-100">
        <h2 className="text-xl font-semibold mb-4">Subscription Options</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <input
              type="radio"
              id="7days"
              name="subscription"
              value="7"
              checked={subscription === "7"}
              onChange={handleSubscriptionChange}
              className="radio radio-primary"
            />
            <label htmlFor="7days">Every 7 Days</label>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="radio"
              id="15days"
              name="subscription"
              value="15"
              checked={subscription === "15"}
              onChange={handleSubscriptionChange}
              className="radio radio-primary"
            />
            <label htmlFor="15days">Every 15 Days</label>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="radio"
              id="monthly"
              name="subscription"
              value="30"
              checked={subscription === "30"}
              onChange={handleSubscriptionChange}
              className="radio radio-primary"
            />
            <label htmlFor="monthly">Every 30 Days</label>
          </div>
        </div>
      </div>

      {/* Cart Summary */}
      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <p className="text-xl font-semibold">Total: ${totalAmount.toFixed(2)}</p>
        <button
          className="btn btn-primary px-8 py-2"
          onClick={handleProceedToCheckout}
        >
          Proceed to Checkout
        </button>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Complete Payment
            </h2>
            <p className="mb-6 text-gray-700 text-center">
              Please proceed with your payment via Bkash to complete the order.
            </p>
            <div className="flex justify-between">
              <button
                className="btn btn-error"
                onClick={() => setShowPaymentModal(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-success"
                onClick={handleBkashPayment}
              >
                Pay with Bkash
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default CartItemPage;
