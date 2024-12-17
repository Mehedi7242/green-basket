import React from "react";
import Swal from "sweetalert2";
const products = [
  {
    id: 1,
    name: "Fresh Organic Apples",
    description: "Crisp and juicy apples directly from the farm.",
    price: "$5.99",
    image:
      "https://via.placeholder.com/150/6c9d47/ffffff?text=Apples",
  },
  {
    id: 2,
    name: "Organic Carrots",
    description: "Rich in vitamins and nutrients, perfect for your health.",
    price: "$3.49",
    image:
      "https://via.placeholder.com/150/6c9d47/ffffff?text=Carrots",
  },
  {
    id: 3,
    name: "Farm Fresh Tomatoes",
    description: "Juicy red tomatoes, ideal for salads and cooking.",
    price: "$4.99",
    image:
      "https://via.placeholder.com/150/6c9d47/ffffff?text=Tomatoes",
  },
  {
    id: 4,
    name: "Organic Spinach",
    description: "Green, leafy spinach packed with nutrients.",
    price: "$2.99",
    image:
      "https://via.placeholder.com/150/6c9d47/ffffff?text=Spinach",
  },
  {
    id: 5,
    name: "Fresh Organic Apples",
    description: "Crisp and juicy apples directly from the farm.",
    price: "$5.99",
    image:
      "https://via.placeholder.com/150/6c9d47/ffffff?text=Apples",
  },
  {
    id: 6,
    name: "Organic Carrots",
    description: "Rich in vitamins and nutrients, perfect for your health.",
    price: "$3.49",
    image:
      "https://via.placeholder.com/150/6c9d47/ffffff?text=Carrots",
  },
  {
    id: 7,
    name: "Farm Fresh Tomatoes",
    description: "Juicy red tomatoes, ideal for salads and cooking.",
    price: "$4.99",
    image:
      "https://via.placeholder.com/150/6c9d47/ffffff?text=Tomatoes",
  },
  {
    id: 8,
    name: "Organic Spinach",
    description: "Green, leafy spinach packed with nutrients.",
    price: "$2.99",
    image:
      "https://via.placeholder.com/150/6c9d47/ffffff?text=Spinach",
  },
];

const ProductContainer = () => {
    const handleAddToCart = (productName) => {
        // SweetAlert notification when product is added to cart
        Swal.fire({
          title: "Added to Cart",
          text: `${productName} has been added to your cart.`,
          icon: "success",
          confirmButtonText: "Okay",
          timer: 1500,
        });
      };
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {product.description}
                </p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-green-600 font-bold">{product.price}</span>
                  <button onClick={handleAddToCart} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductContainer;
