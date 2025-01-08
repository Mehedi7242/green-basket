import { useEffect, useState } from "react";

const ContactUsAdmin = () => {
    const [users, setUsers] = useState([]);
    const [reloadTrigger, setReloadTrigger] = useState(false); 


    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/users'); 
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [reloadTrigger]);

    const handleReload = () => {
        setReloadTrigger(!reloadTrigger); 
    };

    return (
        <div className="container mx-auto p-4">
        <h3 className="text-xl font-bold mb-4">User Details</h3>
        <button
          onClick={handleReload}
          className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reload Data
        </button>
       
        <div className="overflow-y-auto max-h-96 border border-gray-300 rounded-lg">
          <table className="table-auto border-collapse border border-gray-300 w-full">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Phone</th>
                <th className="border border-gray-300 px-4 py-2">Query Type</th>
                <th className="border border-gray-300 px-4 py-2">Subject</th>
                <th className="border border-gray-300 px-4 py-2">Message</th>
                <th className="border border-gray-300 px-4 py-2">Comment</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="border border-gray-300 px-4 py-2">{user._id}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.name || "No Name Provided"}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.email || "No Email Provided"}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.phone || "No Phone Provided"}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.queryType || "N/A"}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.subject || "No Subject"}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.message || "No Message"}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.comment || "No Comment"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ContactUsAdmin;