import React, { createContext, useContext, useEffect, useState } from "react";

// Create the MessageContext
const MessageContext = createContext();

// Provider component
export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch message data from JSON file in public/data
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/data/messageuserdata.json");
        if (!response.ok) {
          throw new Error("Failed to fetch message data");
        }
        const data = await response.json();
        setMessages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <MessageContext.Provider value={{ messages, loading, error }}>
      {children}
    </MessageContext.Provider>
  );
};

// Custom hook for using the context
export const useMessageContext = () => useContext(MessageContext);
