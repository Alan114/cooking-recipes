import { createContext } from "react";

export const ThemeContext = createContext();

// custom logic

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ color: "royalblue" }}>
      {children}
    </ThemeContext.Provider>
  );
}
