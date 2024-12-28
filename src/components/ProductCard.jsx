import React from "react";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const { name, description, price, image } = product;

  const handleAddToCart = () => {
    Swal.fire({
      title: "Added to Cart",
      text: `${name} has been added to your cart.`,
      icon: "success",
      confirmButtonText: "Okay",
      timer: 1500,
    });
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
        <div className="mt-3 flex justify-between items-center">
          <span className="text-green-600 font-bold">{price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
