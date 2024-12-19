import React, { useState } from "react";
import Swal from "sweetalert2";

const GroceryComboSelector = () => {
  const [selectedCombos, setSelectedCombos] = useState([]);

  // Fake data for grocery combos
  const combos = [
    {
      id: 1,
      name: "Vegetable Combo",
      image: "https://via.placeholder.com/200x150?text=Vegetable+Combo",
      items: [
        { name: "Tomatoes", quantity: "2kg", price: 4 },
        { name: "Broccoli", quantity: "1kg", price: 3.5 },
        { name: "Carrots", quantity: "1.5kg", price: 3 },
      ],
    },
    {
      id: 2,
      name: "Fruit Combo",
      image: "https://via.placeholder.com/200x150?text=Fruit+Combo",
      items: [
        { name: "Apples", quantity: "2kg", price: 5 },
        { name: "Bananas", quantity: "1.5kg", price: 2.5 },
        { name: "Oranges", quantity: "2kg", price: 4.5 },
      ],
    },
    {
      id: 3,
      name: "Grocery Essentials Combo",
      image: "https://via.placeholder.com/200x150?text=Grocery+Combo",
      items: [
        { name: "Rice", quantity: "5kg", price: 10 },
        { name: "Lentils", quantity: "2kg", price: 6 },
        { name: "Cooking Oil", quantity: "1L", price: 5 },
      ],
    },
  ];

  const handleAddCombo = (comboId) => {
    const combo = combos.find((c) => c.id === comboId);

    if (!selectedCombos.some((selected) => selected.id === comboId)) {
      setSelectedCombos([...selectedCombos, combo]);
      Swal.fire({
        title: "Combo Added!",
        text: `${combo.name} has been added to your cart.`,
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#6c9d47",
      });
    }
  };

  const calculateTotalPrice = (combo) => {
    return combo.items.reduce((total, item) => total + item.price, 0);
  };

  const removeCombo = (comboId) => {
    setSelectedCombos(selectedCombos.filter((combo) => combo.id !== comboId));
  };

  const handleAddToCart = () => {
    const grandTotal = selectedCombos
      .reduce((total, combo) => total + calculateTotalPrice(combo), 0)
      .toFixed(2);

    Swal.fire({
      title: "Cart Updated!",
      text: `Your items have been added to the cart. Grand Total: $${grandTotal}`,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#6c9d47",
    });
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-700">
        Grocery Combos
      </h1>

      {/* Combo Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {combos.map((combo) => (
          <div
            key={combo.id}
            className="border rounded-lg shadow-md p-4 bg-gray-50 flex flex-col items-center"
          >
            <img
              src={combo.image}
              alt={combo.name}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              {combo.name}
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {combo.items.map((item, index) => (
                <li key={index}>
                  {item.name} ({item.quantity}) - ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <p className="text-lg font-bold text-gray-900 mb-4">
              Total: ${calculateTotalPrice(combo).toFixed(2)}
            </p>
            <button
              onClick={() => handleAddCombo(combo.id)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
            >
              Add Combo
            </button>
          </div>
        ))}
      </div>

      {/* Selected Combos */}
      {selectedCombos.length > 0 && (
        <div className="mt-6 space-y-6">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Selected Combos
          </h2>
          {selectedCombos.map((combo) => (
            <div
              key={combo.id}
              className="p-4 border rounded-lg shadow-md bg-gray-50"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-green-600">
                  {combo.name}
                </h3>
                <button
                  className="text-red-500 underline"
                  onClick={() => removeCombo(combo.id)}
                >
                  Remove
                </button>
              </div>

              <ul className="list-disc list-inside text-gray-700 mb-4">
                {combo.items.map((item, index) => (
                  <li key={index}>
                    {item.name} ({item.quantity}) - ${item.price.toFixed(2)}
                  </li>
                ))}
              </ul>

              <p className="text-lg font-semibold text-gray-900">
                Combo Total: ${calculateTotalPrice(combo).toFixed(2)}
              </p>
            </div>
          ))}

          {/* Overall Total */}
          <div className="p-4 border rounded-lg shadow-md bg-green-50 flex flex-col items-center">
            <h2 className="text-lg font-bold text-green-700 mb-4">
              Grand Total: $
              {selectedCombos
                .reduce((total, combo) => total + calculateTotalPrice(combo), 0)
                .toFixed(2)}
            </h2>
            <button
              onClick={handleAddToCart}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroceryComboSelector;
