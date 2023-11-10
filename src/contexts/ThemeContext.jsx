import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem("check") === "true"
  );
  // IF button click, swith theme
  const themeSwitcher = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      window.localStorage.setItem("check", "true");
      setTheme("dark");
      setIsChecked(true);
    } else {
      window.localStorage.setItem("theme", "light");
      window.localStorage.setItem("check", "false");
      setTheme("light");
      setIsChecked(false);
    }
  };
  // if localstorage have theme, get from local storage color
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    const localCheck = localStorage.getItem("check");
    if (localTheme) {
      setTheme(localTheme);
    }
    if (localCheck) {
      setIsChecked(localCheck);
    }
  }, []);
  // Theme style for css
  const style = {
    navBar: {
      dark: {
        background: "#111827b7",
        color: "#fff",
      },
      light: {
        background: "#e2e8f0",
        color: "#000",
      },
    },
    mainSection: {
      dark: {
        background: "#1f2937",
        color: "#fff",
      },
      light: {
        background: " #f9fafb",
        color: "#000",
      },
    },
    cardSection: {
      dark: {
        background: "#111827",
        color: "#fff",
      },
      light: {
        background: "#fff",
        color: "#000",
      },
    },
  };
  
  const value = {
    theme,
    themeSwitcher,
    isChecked,
    style,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
export default ThemeProvider;
