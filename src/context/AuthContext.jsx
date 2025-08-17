import React, { createContext, useState, useContext } from 'react';

// 1. Create the context
const AuthContext = createContext(null);

// 2. Create the provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  /**
   * MOCK LOGIN FUNCTION: Simulates a user login without a real backend.
   * This allows for testing the application's front-end logic.
   * @param {string} email - The user's email.
   * @param {string} password - The user's password.
   */
  const login = async (email, password) => {
    // Simulate a network delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Basic validation for demonstration purposes
        if (email && password) {
          const userData = { email: email, name: "Test User" };
          setUser(userData);
          console.log("Mock login successful for:", email);
          resolve(userData);
        } else {
          const error = new Error("Invalid credentials. Please enter an email and password.");
          console.error("Mock login failed:", error.message);
          reject(error);
        }
      }, 1000); // 1-second delay
    });
  };

  const logout = () => {
    setUser(null);
    console.log("User logged out.");
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// 3. Create the custom hook for easy access
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
