

import React, { createContext } from "react";


export const MyContext = createContext();


export function MyContextProvider({ children }) {
  const contextValue = "Hello from Context!";

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}
