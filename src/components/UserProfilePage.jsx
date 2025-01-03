import React, { useState, useEffect } from "react";

const UserProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false); // State to toggle editing mode
  const [user, setUser] = useState({
    name: "Mehedi Hasan",
    email: "mehedi@example.com",
    profilePicture:
      "https://www.example.com/path-to-profile-picture.jpg",
    address: "123, Main Street, Dhaka, Bangladesh",
    phoneNumber: "+8801234567890",
    bio: "A passionate developer who loves coding and learning new technologies.",
    city: "Dhaka",
    town: "Gulshan",
  });

  const cities = ["Dhaka"];
  const towns = [
    "Gulshan",
    "Banani",
    "Dhanmondi",
    "Mirpur",
    "Uttara",
    "Mohammadpur",
    "Shahbagh",
    "Motijheel",
  ];

  useEffect(() => {
    // Simulate loading user data from an API or context
    setTimeout(() => {
      setUser({
        ...user,
        city: "Dhaka",
        town: "Gulshan",
      });
    }, 1000);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleEditProfile = () => {
    if (isEditing) {
      // Logic to save the updated profile (could involve an API call)
      console.log("Profile saved", user);
    }
    setIsEditing(!isEditing); // Toggle edit mode
  };

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
            <img
              src={user.profilePicture}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-6 w-full">
            <h2 className="text-3xl font-semibold text-gray-800">Profile</h2>
            <p className="text-sm text-gray-600 mt-1">{user.email}</p>

            <div className="mt-4">
              <label htmlFor="name" className="block text-gray-800 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                disabled={!isEditing}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md bg-white"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="bio" className="block text-gray-800 font-medium">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={user.bio}
                onChange={handleChange}
                disabled={!isEditing}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md bg-white"
                rows="3"
              ></textarea>
            </div>

            <div className="mt-4">
              <label htmlFor="address" className="block text-gray-800 font-medium">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={user.address}
                onChange={handleChange}
                disabled={!isEditing}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md bg-white"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="phoneNumber" className="block text-gray-800 font-medium">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={handleChange}
                disabled={!isEditing}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md bg-white"
              />
            </div>

            {/* City Dropdown */}
            <div className="mt-4">
              <label htmlFor="city" className="block text-gray-800 font-medium">
                City
              </label>
              <select
                id="city"
                name="city"
                value={user.city}
                onChange={handleChange}
                disabled={!isEditing}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md bg-white"
              >
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Town Dropdown */}
            <div className="mt-4">
              <label htmlFor="town" className="block text-gray-800 font-medium">
                Town
              </label>
              <select
                id="town"
                name="town"
                value={user.town}
                onChange={handleChange}
                disabled={!isEditing}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md bg-white"
              >
                {towns.map((town, index) => (
                  <option key={index} value={town}>
                    {town}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleEditProfile}
              className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              {isEditing ? "Save Profile" : "Edit Profile"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfilePage;

