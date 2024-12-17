import React from "react";

const ContactUs = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const queryType = form.queryType.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const user = { name, email, phone, queryType, subject, message };
    console.log(user);
    form.reset();

    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Contact <span className="text-red-500">Us</span>
      </h2>
      <form onSubmit={handleAddUser} className="space-y-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Please enter your name."
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Please enter a valid email."
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone / Mobile <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Please enter your phone number."
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="queryType" className="block text-sm font-medium text-gray-700">
              Your Query Is For <span className="text-red-500">*</span>
            </label>
            <select
              name="queryType"
              id="queryType"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="Others">Others</option>
              <option value="Support">Support</option>
              <option value="Sales">Sales</option>
              <option value="Feedback">Feedback</option>
            </select>
          </div>
        </div>


        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject required."
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>


        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Your Query <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Please enter your message."
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>


        <div className="flex items-center justify-center">
          <div className="text-gray-600 text-sm">[Recaptcha Placeholder]</div>
        </div>


        <div>
          <input
            type="submit"
            value="Send Message"
            className="w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;