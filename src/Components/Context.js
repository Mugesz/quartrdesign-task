import React, { createContext, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const themeClass = darkMode ? "dark" : "light";

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };




  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
      }}
    >
      <div className={themeClass}>{children}</div>
    </DarkModeContext.Provider>
  );
};
