import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);

  // Fetching data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://simple-curd-server-tau.vercel.app/products");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  // Handle delete product
  const handleDeleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      const data = await response.json();
      if (data.success) {
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
        alert("Product deleted successfully!");
      } else {
        alert("Product not found.");
      }
    } catch (error) {
      alert("Error deleting product");
      console.error("Error deleting product:", error);
    }
  };

  // Prepare data for chart
  const chartData = {
    labels: products.map((product) => product.name),
    datasets: [
      {
        label: "Price",
        data: products.map((product) => product.price),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Quantity",
        data: products.map((product) => product.quantity || 0),
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Product Information",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {products.length > 0 ? (
        <>
          <div className="mb-8">
            <Bar data={chartData} options={chartOptions} />
          </div>

          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Price</th>
                  <th className="border border-gray-300 px-4 py-2">Description</th>
                  <th className="border border-gray-300 px-4 py-2">Category</th>
                  <th className="border border-gray-300 px-4 py-2">Quantity</th>
                  <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.price}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.description}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.category}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.quantity || "N/A"}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600">
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        onClick={() => handleDeleteProduct(product._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">No products available.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
