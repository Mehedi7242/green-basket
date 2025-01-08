import React, { useContext, useState } from "react";
import chatbot from "/chatbot.jpg"
import { Link } from "react-router";
import { Button } from "@mui/material";
import { AuthContext } from "../provider/AuthProvider";
import FeedBackForm from "./FeedBackForm";
const CustomerService = () => {
const {signOutUser, user} = useContext(AuthContext);
  const [formResponse, setFormResponse] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormResponse("Thank you for your feedback!");
    event.target.reset();
  };

  return (
    <div className="bg-gray-100 ">
      {/* Header */}
      <header className="bg-green-700 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">CUSTOMER SERVICE</h1>
          <nav className="space-x-4">
            <Link to={"/"}
              href="#home"
              className="text-lg font-semibold hover:underline"
            >
              Home
            </Link>
            {
                user ?
                <Link onClick={signOutUser}
                href="#logout"
                className="text-lg font-semibold hover:underline"
                >
                Logout
                </Link>
                :
                <Link onClick={signOutUser}
                href="#logout"
                className="text-lg font-semibold hover:underline"
                >
                Login
                </Link>
            }
            
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-10 px-4">
        {/* Chatbot Section */}
        <section className="bg-white rounded-lg shadow-md p-6 flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/FCGiB7KVPZb4oh9sH7QGE"
              width="100%"
              className="rounded-lg border border-gray-200"
              style={{ height: "100%", minHeight: "500px" }}
              frameBorder="0"
              title="Chatbot"
            ></iframe>
          </div>
          <div className="flex-1 flex flex-col items-center text-center">
            <img
              src={chatbot}
              alt="Chatbot"
              className="w-full max-w-md rounded-lg shadow-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-4">Meet Our Smart Chatbot</h2>
            <ul className="list-disc text-left space-y-2">
              <li>Available 24/7 to answer your queries.</li>
              <li>Provides delivery updates and suggestions.</li>
              <li>Helps you explore our services with ease.</li>
              <li>Simple and user-friendly interface.</li>
            </ul>
          </div>
        </section>

        {/* Feedback Section */}
        <FeedBackForm></FeedBackForm>
      </main>
    </div>
  );
};

export default CustomerService;
