import React, { useContext, useState } from "react";
import chatbot from "/chatbot.jpg";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const FeedBackForm = () => {
  const { signOutUser, user } = useContext(AuthContext);
  const [formResponse, setFormResponse] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const feedback = event.target.message.value;

    const newFeedback = { name, email, feedback };

    // Fetch existing feedback from localStorage
    const existingFeedback = JSON.parse(localStorage.getItem("feedbackData")) || [];

    // Save the new feedback
    const updatedFeedback = [...existingFeedback, newFeedback];
    localStorage.setItem("feedbackData", JSON.stringify(updatedFeedback));

    setFormResponse("Thank you for your feedback!");
    event.target.reset();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-green-700 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">CUSTOMER SERVICE</h1>
          <nav className="space-x-4">
            <Link
              to="/"
              className="text-lg font-semibold hover:underline"
            >
              Home
            </Link>
            {user ? (
              <Link
                onClick={signOutUser}
                className="text-lg font-semibold hover:underline"
              >
                Logout
              </Link>
            ) : (
              <Link
                onClick={signOutUser}
                className="text-lg font-semibold hover:underline"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-10 px-4">
        {/* Feedback Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Customer Feedback Form</h2>
          <form id="feedback-form" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
            >
              Submit Feedback
            </button>
          </form>
          {formResponse && (
            <div className="mt-4 text-green-700 font-medium">
              {formResponse}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default FeedBackForm;
