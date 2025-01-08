import React, { useState } from "react";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch the response.");
      }

      const data = await res.json();
      setResponse(data.response);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Chatbot</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Enter your message:</label>
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            className="w-full p-2 border rounded shadow"
            placeholder="Type something like 'Write a haiku about AI'"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
          disabled={loading || !userInput.trim()}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>

      {response && (
        <div className="mt-6 p-4 border rounded shadow bg-gray-50">
          <h2 className="text-lg font-medium mb-2">AI Response:</h2>
          <p className="text-gray-700">{response}</p>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 border rounded shadow bg-red-50 text-red-700">
          {error}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
