import React from "react";
import useFetchData from "./CustomHook";

const UsersList = () => {
  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center mb-3">User Details</h1>
      <div className="border d-flex flex-wrap justify-content-around p-2">
        {data.map((user) => (
          <div className="border mb-3 p-2">
          <div className="" key={user?.id}>
            <h4>{user.name}</h4>
            <p>Email: {user?.email}</p>
            <p>Phone: {user?.phone}</p>
            <p>
              Address: {user?.address?.street}, {user?.address?.city}
            </p>
          </div></div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;