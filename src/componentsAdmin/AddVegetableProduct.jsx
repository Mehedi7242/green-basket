import React, { useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const AddVegetableProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
    weight: "",
    stock: "",
    supplier: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting product:", formData); // Log the form data

    try {
      const response = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add product. Please try again.");
      }

      const result = await response.json();
      console.log("Response:", result); // Log the response from the server

      if (result.success) {
        Swal.fire({
          title: "Product added successfully!",
          icon: "success",
          confirmButtonText: "Okay",
          timer: 1500,
        });
        setFormData({
          name: "",
          price: "",
          description: "",
          category: "",
          image: "",
          weight: "",
          stock: "",
          supplier: "",
        });
      } else {
        Swal.fire({
          title: "Failed to add product",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      console.error("Error adding product:", error);
      Swal.fire({
        title: "An error occurred",
        text: error.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      {/* Animated Banner */}
      <motion.h1
        className="text-3xl font-bold text-center mb-6 text-green-700"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Add Vegetable Product
      </motion.h1>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Product Name */}
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
            className="w-full mt-1 p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        {/* Product Price */}
        <div>
          <label htmlFor="price" className="block font-medium text-gray-700">
            Selling Price (in Taka)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter selling price"
            className="w-full mt-1 p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
            min="0"
            required
          />
        </div>

        {/* Product Description */}
        <div>
          <label htmlFor="description" className="block font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter product description"
            className="w-full mt-1 p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Product Category */}
        <div>
          <label htmlFor="category" className="block font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter product category"
            className="w-full mt-1 p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        {/* Product Image */}
        <div>
          <label htmlFor="image" className="block font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="w-full mt-1 p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        {/* Product Weight */}
        <div>
          <label htmlFor="weight" className="block font-medium text-gray-700">
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Enter product weight"
            className="w-full mt-1 p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
            min="0"
            required
          />
        </div>

        {/* Stock Quantity */}
        <div>
          <label htmlFor="stock" className="block font-medium text-gray-700">
            Stock Quantity
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Enter stock quantity"
            className="w-full mt-1 p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
            min="0"
            required
          />
        </div>

        {/* Supplier */}
        <div>
          <label htmlFor="supplier" className="block font-medium text-gray-700">
            Supplier Name
          </label>
          <input
            type="text"
            id="supplier"
            name="supplier"
            value={formData.supplier}
            onChange={handleChange}
            placeholder="Enter supplier name"
            className="w-full mt-1 p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <motion.button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add Product
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
};

export default AddVegetableProduct;
