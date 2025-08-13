import React  from "react";
import { createContext, useState, useEffect } from "react";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const dataURL = "http://localhost:5000/categories";

  useEffect(() => {
    // Fetch from your backend API
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${dataURL}`);
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, loading }}>
      {children}
    </CategoriesContext.Provider>
  );
};
