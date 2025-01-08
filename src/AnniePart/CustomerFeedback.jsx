import React, { useEffect, useState } from "react";
import swal from "sweetalert";
const CustomerFeedback = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [repliedRows, setRepliedRows] = useState([]);

  // Load feedback data from localStorage
  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem("feedbackData")) || [];
    setFeedbackData(storedFeedback);
  }, []);

  // Handle sending replies
  const handleSendReplies = () => {
    const updatedFeedback = feedbackData.filter((_, index) => !repliedRows.includes(index));
    localStorage.setItem("feedbackData", JSON.stringify(updatedFeedback));
    setFeedbackData(updatedFeedback);
    swal("Success!", "Your replies have been sent successfully!", "success");
  };

  // Mark row as replied
  const handleReply = (index) => {
    if (!repliedRows.includes(index)) {
      setRepliedRows((prev) => [...prev, index]);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-green-700 text-white text-center py-4">
        <h1 className="text-2xl font-bold">Customer Feedback</h1>
      </header>

      <div className="container mx-auto py-8 px-4">
        <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-green-100 text-left">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Feedback</th>
                <th className="border border-gray-300 px-4 py-2">Reply</th>
              </tr>
            </thead>
            <tbody>
              {feedbackData.length > 0 ? (
                feedbackData.map((feedback, index) => (
                  <tr
                    key={index}
                    className={`${
                      repliedRows.includes(index) ? "bg-green-100" : ""
                    }`}
                  >
                    <td className="border border-gray-300 px-4 py-2">{feedback.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{feedback.email}</td>
                    <td className="border border-gray-300 px-4 py-2">{feedback.feedback}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <textarea
                        className="w-full p-2 border border-gray-300 rounded-lg resize-none"
                        placeholder="Write your reply here..."
                        onBlur={() => handleReply(index)}
                      ></textarea>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    No feedback available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <button
          className="bg-green-700 text-white px-6 py-2 rounded-lg mt-4 hover:bg-green-800 transition-all block mx-auto"
          onClick={handleSendReplies}
        >
          Send Replies
        </button>
      </div>
    </div>
  );
};

export default CustomerFeedback;
