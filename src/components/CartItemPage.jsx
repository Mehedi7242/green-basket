import React, { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthProvider";

const CartItemPage = () => {
  const { user } = useContext(AuthContext);
  const [subscription, setSubscription] = useState("7"); // Default to 7 days
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleQuantityChange = (itemId, operation) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) => {
        if (item._id === itemId) {
          // Update the quantity based on the operation (+ or -)
          let newQuantity = operation === "increase" ? item.quantity + 1 : item.quantity - 1;
          // Prevent quantity from going below 1
          newQuantity = newQuantity < 1 ? 1 : newQuantity;
  
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // Fetch cart items from the API
  useEffect(() => {
    if (user?.email) {
      fetch("https://simple-curd-server-tau.vercel.app/cart")
        .then((res) => res.json())
        .then((data) => {
          const userCartItems = data.filter((item) => item.user === user.email);
          setCartItems(userCartItems);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching cart items:", error);
          setLoading(false);
        });
    }
  }, [user?.email]);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubscriptionChange = (e) => {
    setSubscription(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleProceedToCheckout = async () => {
    if (!customer.name || !customer.email || !customer.address || !customer.city || !customer.zip) {
      toast.error("Please fill in all customer details and address!");
      return;
    }
  
    const orderData = {
      customer: {
        name: customer.name,
        email: customer.email,
        address: customer.address,
        city: customer.city,
        zip: customer.zip,
      },
      subscription: subscription,
      cartItems: cartItems.map((item) => ({
        id: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        totalPrice: (item.price * item.quantity).toFixed(2),
      })),
      totalAmount: totalAmount.toFixed(2),
    };
  
    console.log("Checkout Data:", orderData);
  
    try {
      const response = await fetch('https://simple-curd-server-tau.vercel.app/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
  
      const data = await response.json();
  
      if (data.success) {
        Swal.fire({
          title: "Order Placed",
          text: "Your order has been placed successfully!",
          icon: "success",
          confirmButtonText: "Okay",
        });
        setShowPaymentModal(true);
      } else {
        Swal.fire({
          title: "Error",
          text: data.message,
          icon: "error",
          confirmButtonText: "Okay",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Failed to place order.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  const handleBkashPayment = () => {
    setShowPaymentModal(false);
    toast.success("Payment successful! Order has been placed.");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between p-4 border rounded-lg shadow-md"
              >
                {/* Product Image */}
                <img
                  src={item.image || "https://via.placeholder.com/150"}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                {/* Product Details */}
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600">
                    Price: {item.price} tk
                  </p>
                </div>

                {/* Quantity & Actions */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      className="btn btn-sm btn-outline"
                      onClick={() => handleQuantityChange(item._id, "decrease")}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline"
                      onClick={() => handleQuantityChange(item._id, "increase")}
                    >
                      +
                    </button>
                  </div>

                  <button className="btn btn-sm btn-error">Remove</button>
                </div>

                {/* Total Price for this item */}
                <div className="text-lg font-semibold">
                  {(item.price * item.quantity).toFixed(2)} tk
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
                  id="none"
                  name="subscription"
                  value="1"
                  checked={subscription === "1"}
                  onChange={handleSubscriptionChange}
                  className="radio radio-primary"
                />
                <label htmlFor="none">None</label>
              </div>
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

          {/* Customer Information */}
          <div className="mt-6 p-4 border rounded-lg shadow-md bg-base-100">
            <h2 className="text-xl font-semibold mb-4">Customer Information</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={customer.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                name="email"
                value={customer.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="address"
                value={customer.address}
                onChange={handleInputChange}
                placeholder="Street Address"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="city"
                value={customer.city}
                onChange={handleInputChange}
                placeholder="City"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="zip"
                value={customer.zip}
                onChange={handleInputChange}
                placeholder="Zip Code"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Cart Summary */}
          <div className="mt-6 flex justify-between items-center border-t pt-4">
            <p className="text-xl font-semibold">
              Total: {totalAmount.toFixed(2)} tk
            </p>
            <button
              className="btn btn-primary px-8 py-2"
              onClick={handleProceedToCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}

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
