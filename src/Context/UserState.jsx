import { useState } from "react";
import UserContext from "./userContext";

const UserState = (props) => {
  const [users, setUsers] = useState([]);

  // Fetch Users
  const fetchUsers = async () => {
    // API Call
    const res = await fetch("https://dummyjson.com/users");
    const json = await res.json();
    setUsers(json);
  };

  // Edit User
  const editUser = async (
    id,
    firstName,
    lastName,
    gender,
    username,
    image,
    email
  ) => {
    const response = await fetch(`https://dummyjson.com/users/${id}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        gender,
        username,
        image,
        email,
      }),
    });
    const json = await response.json();
    console.log("Edited User:", json);
  };

  // Add User
  const addUser = async (
    firstName,
    lastName,
    gender,
    username,
    image,
    email
  ) => {
    // API Call
    const response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        gender,
        username,
        image,
        email,
      }),
    });

    const newUser = await response.json();
    console.log("New User:", newUser);
  };

  return (
    <UserContext.Provider value={{ users, fetchUsers, editUser, addUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
