import React, { useState } from "react";
import Swal from "sweetalert2";

const AddVegetableProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: "",
    category: "",
    quantity: "",
    purchasePrice: "",
    userId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Details:", formData);
    Swal.fire({
      title: "Product added successfully!",
      icon: "success",
      confirmButtonText: "Okay",
      timer: 1500,
    });
    // Add API call logic here to send formData to your server
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6 text-green-700">
        Add Vegetable Product
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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
            required
          />
        </div>

        {/* Purchase Price */}
        <div>
          <label htmlFor="purchasePrice" className="block font-medium text-gray-700">
            Purchase Price (in Taka)
          </label>
          <input
            type="number"
            id="purchasePrice"
            name="purchasePrice"
            value={formData.purchasePrice}
            onChange={handleChange}
            placeholder="Enter purchase price"
            className="w-full mt-1 p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        {/* Quantity */}
        <div>
          <label htmlFor="quantity" className="block font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Enter quantity"
            className="w-full mt-1 p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
            required
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="Leafy Vegetables">Leafy Vegetables</option>
            <option value="Root Vegetables">Root Vegetables</option>
            <option value="Fruits">Fruits</option>
            <option value="Herbs">Herbs</option>
          </select>
        </div>

        {/* User ID */}
        <div>
          <label htmlFor="userId" className="block font-medium text-gray-700">
            User ID (Who Purchased)
          </label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            placeholder="Enter user ID"
            className="w-full mt-1 p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
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

        {/* Product Image URL */}
        <div>
          <label htmlFor="imageUrl" className="block font-medium text-gray-700">
            Product Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Enter product image URL"
            className="w-full mt-1 p-2 border rounded-md focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md shadow-sm"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVegetableProduct;
