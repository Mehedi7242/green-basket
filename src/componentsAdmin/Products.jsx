import React, { useState, useEffect } from "react";

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // Example placeholder data; replace with API call
      const sampleProducts = [
        {
          id: 1,
          name: "Carrot",
          price: 50,
          description: "Fresh and organic carrots.",
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          name: "Tomato",
          price: 70,
          description: "Juicy and ripe tomatoes.",
          imageUrl: "https://via.placeholder.com/150",
        },
      ];

      // Simulate an API call
      setProducts(sampleProducts);
    };

    fetchProducts();
  }, []);

  // Handle product deletion
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      setProducts(products.filter((product) => product.id !== id)); // Remove product locally
      // Call API to delete product on server
      console.log(`Product with id ${id} deleted`);
    }
  };

  // Handle "See Details" (you can implement this to show product details in a modal or navigate to a new page)
  const handleSeeDetails = (id) => {
    console.log(`See details for product id ${id}`);
    // Navigate to product details page or open modal
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6 text-green-700">
        Manage Products
      </h1>

      {/* Display products in a table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left font-medium text-gray-600">Image</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Name</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Price</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t border-gray-200">
                <td className="px-4 py-2">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-16 w-16 object-cover rounded-md"
                  />
                </td>
                <td className="px-4 py-2 text-gray-800">{product.name}</td>
                <td className="px-4 py-2 text-gray-800">{product.price} Taka</td>
                <td className="px-4 py-2 space-x-2">
                  {/* See Details Button */}
                  <button
                    onClick={() => handleSeeDetails(product.id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
                  >
                    See Details
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Display message if no products */}
      {products.length === 0 && (
        <p className="text-center text-gray-600 mt-6">No products available.</p>
      )}
    </div>
  );
};

export default Products;
