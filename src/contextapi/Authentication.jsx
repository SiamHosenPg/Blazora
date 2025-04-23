import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const fatchDemoUsers = async () => {
  try {
    const response = await fetch("/user/DemoDatauser.json");
    const DemoUserDb = await response.json();
    return DemoUserDb;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
const DemoUserDb = await fatchDemoUsers();
// const DemoUserDb = DemoData; // Fallback to local data if fetch fails

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : DemoUserDb;
  });

  const [AuthStatus, setAuthStatus] = useState(() => {
    const savedAuthStatus = localStorage.getItem("AuthStatus");
    return savedAuthStatus ? JSON.parse(savedAuthStatus) : false;
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("AuthStatus", JSON.stringify(AuthStatus));
  }, [user, AuthStatus]);

  const signup = async (name, email, password) => {
    const newUser = { name, email, password };
    setUser(newUser);
    setAuthStatus(true);
  };

  const fatchUsers = async () => {
    try {
      const response = await fetch("/user/User.json");
      const userDB = await response.json();
      return userDB;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  };

  const login = async (email, password) => {
    const userDB = await fatchUsers();
    const foundUser = userDB.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser));
      setAuthStatus(true);
      localStorage.setItem("AuthStatus", JSON.stringify(AuthStatus));
    } else {
      setAuthStatus(false);
      localStorage.setItem("AuthStatus", JSON.stringify(AuthStatus));
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, signup, login, AuthStatus, setAuthStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
