import React, { createContext, useContext, useEffect, useState } from "react";

// Create the StoryDataContext
const StoryDataContext = createContext();

// StoryDataProvider Component
export const StoryDataProvider = ({ children }) => {
  const [stories, setStories] = useState([]); // State to store story data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  // Fetch data from Storypost.json
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch("/data/Storypost.json"); // Fetch the JSON file
        if (!response.ok) {
          throw new Error("Failed to fetch story data");
        }
        const data = await response.json();
        setStories(data); // Set the fetched data to state
      } catch (err) {
        setError(err.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchStories();
  }, []);

  return (
    <StoryDataContext.Provider value={{ stories, loading, error }}>
      {children}
    </StoryDataContext.Provider>
  );
};

// Custom hook to use the StoryDataContext
export const useStoryDataContext = () => {
  return useContext(StoryDataContext);
};
