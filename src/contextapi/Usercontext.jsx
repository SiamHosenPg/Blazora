import React, { createContext } from "react";
import userData from "../data/user/User.json";

// Create Context
const UserContext = createContext();

// Create Provider component
const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
