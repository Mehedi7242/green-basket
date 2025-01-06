import React, { useContext, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const ProductCard = ({ product }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    name,
    description,
    price,
    discountPrice,
    image,
    weight,
    stock,
    supplier,
    expirationDate,
    category,
    sku,
    tags,
  } = product;

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    if (!user) {
      Swal.fire({
        title: "Login Required",
        text: "Please log in to add items to your cart.",
        icon: "warning",
        confirmButtonText: "Login",
      });
      return;
    }

    if (quantity <= 0 || quantity > stock) {
      Swal.fire({
        title: "Invalid Quantity",
        text: `Please select a valid quantity (max: ${stock} kg).`,
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    }

    const cartItem = {
      user: user?.email,
      id: _id,
      name,
      price,
      discountPrice,
      quantity,
      weight,
      category,
      sku,
      supplier,
    };

    try {
      const response = await fetch('https://simple-curd-server-tau.vercel.app/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItem),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Added to Cart",
          text: `${name} (${quantity} kg) has been added to your cart.`,
          icon: "success",
          confirmButtonText: "Okay",
          timer: 1500,
        });
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
        text: "Failed to add item to cart.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <h2 className="text-green-600 font-bold p-2">{price} tk</h2>

        <div className="flex items-center mt-3">
          <label htmlFor={`quantity-${_id}`} className="mr-2 text-gray-700">
            Quantity (kg):
          </label>
          <input
            id={`quantity-${_id}`}
            type="number"
            min="1"
            max={stock}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="w-16 border rounded px-2 py-1 text-center"
          />
        </div>

        <div className="mt-3 flex flex-col items-center">
          <div className="flex space-x-2">
            <button
              onClick={handleAddToCart}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
            >
              Add to Cart
            </button>
            <Link
              to={`/details/${_id}`}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;