import React, { createContext } from "react";

// Create Context
const UserContext = createContext();
const Fatchdata = async () => {
  try {
    const response = await fetch("/user/User.json");
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
const userData = await Fatchdata(); // Fetch user data from the API

// Create Provider component
const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
