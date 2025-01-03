import React from "react";
import { NavLink } from "react-router";


const categories = [
  {
    id: 1,
    name: "Fruits",
    image: "https://via.placeholder.com/100/6c9d47/ffffff?text=Fruits",
    path: "/category/fruits",
  },
  {
    id: 2,
    name: "Vegetables",
    image: "https://via.placeholder.com/100/6c9d47/ffffff?text=Vegetables",
    path: "/category/vegetables",
  },
  {
    id: 3,
    name: "Dairy",
    image: "https://via.placeholder.com/100/6c9d47/ffffff?text=Dairy",
    path: "/category/dairy",
  },
  {
    id: 4,
    name: "Meat",
    image: "https://via.placeholder.com/100/6c9d47/ffffff?text=Meat",
    path: "/category/meat",
  },
  {
    id: 5,
    name: "Beverages",
    image: "https://via.placeholder.com/100/6c9d47/ffffff?text=Beverages",
    path: "/category/beverages",
  },
  {
    id: 6,
    name: "Fruits",
    image: "https://via.placeholder.com/100/6c9d47/ffffff?text=Fruits",
    path: "/category/fruits",
  },
  {
    id: 7,
    name: "Vegetables",
    image: "https://via.placeholder.com/100/6c9d47/ffffff?text=Vegetables",
    path: "/category/vegetables",
  },
  {
    id: 8,
    name: "Dairy",
    image: "https://via.placeholder.com/100/6c9d47/ffffff?text=Dairy",
    path: "/category/dairy",
  },
  {
    id: 9,
    name: "Meat",
    image: "https://via.placeholder.com/100/6c9d47/ffffff?text=Meat",
    path: "/category/meat",
  },
  {
    id: 10,
    name: "Beverages",
    image: "https://via.placeholder.com/100/6c9d47/ffffff?text=Beverages",
    path: "/category/beverages",
  },
];

const ProductCategory = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Product Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <NavLink
              key={category.id}
              to={category.path}
              className={({ isActive }) =>
                `bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center p-4 cursor-pointer ${
                  isActive ? "bg-gray-200" : ""
                }`
              }
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-20 h-20 object-cover rounded-full mb-3"
              />
              <h3 className="text-md font-semibold text-gray-800">{category.name}</h3>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
