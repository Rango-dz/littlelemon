// DataContext.js
import React, { createContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [ordersData, setOrdersData] = useState([]);

  return (
    <DataContext.Provider value={{ ordersData, setOrdersData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
