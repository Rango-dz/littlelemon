// DataContext.js
import React, { createContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [ordersData, setOrdersData] = useState(() => {
    const savedData = localStorage.getItem("littleLemon");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("littleLemon", JSON.stringify(ordersData));
  }, [ordersData]);

  return (
    <DataContext.Provider value={{ ordersData, setOrdersData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
