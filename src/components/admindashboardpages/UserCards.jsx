import React, { useEffect, useState } from "react";

const UserCards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Registered Users</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all duration-300"
          >
            {/* Profile Image */}
            {user.profileImage ? (
              <img
                src={user.profileImage}
                alt={user.nickname || user.username}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
            ) : (
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {user.username[0].toUpperCase()}
              </div>
            )}

            {/* User Info */}
            <h3 className="text-xl font-semibold text-center text-blue-700">
              {user.nickname || user.username}
            </h3>
            <p className="text-center text-gray-600">{user.email}</p>

            {/* Optional fields */}
            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500">Username: {user.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCards;
