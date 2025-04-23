import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { useAuthContext } from "../../contextapi/Authentication"; // Importing Authentication context

const LoginComponents = () => {
  const { login } = useAuthContext(); // Accessing login method from context
  const navigate = useNavigate(); // Hook for navigation

  // Redirecting to home page on successful login

  const LoginSubmit = (e) => {
    e.preventDefault(); // Preventing default form submission behavior
    const email = e.target.email.value; // Getting email from form input
    const password = e.target.password.value;
    // Getting password from form input
    login(email, password);
    navigate("/home");
  };
  // Calling login method from context

  return (
    <div className="">
      <form action="" onSubmit={LoginSubmit}>
        <input type="email" name="email" id="email" />
        <input type="password" name="password" id="password" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginComponents;
