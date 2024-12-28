import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard"; // Import the ProductCard component

const ProductContainer = () => {
  const [products, setProducts] = useState([]); // State to store fetched products
  const [loading, setLoading] = useState(true); // State for loading status

  // Fetch products data from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products"); // API endpoint
        const data = await response.json();
        setProducts(data); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Stop loading once the fetch is complete
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to fetch data on component mount

  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-xl text-gray-700">Loading products...</p>
      </div>
    );
  }

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            // Ensure `key` is unique for each `ProductCard`
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductContainer;
