import React from "react";
import { useState } from "react";

import { FaMoon, FaRegMoon } from "react-icons/fa";

const ThemeButton = () => {
  const [theme, setTheme] = useState("white");

  const handleBlackTheme = () => {
    setTheme("black");
  };

  const handleWhiteTheme = () => {
    setTheme("white");
  };

  const toggleRender = () => {
    if (theme === "white") {
      return (
        <button onClick={handleBlackTheme}>
          <FaMoon size={20} className="hover:scale-125" />
        </button>
      );
    } else if (theme === "black") {
      return (
        <button onClick={handleWhiteTheme}>
          <FaRegMoon size={20} className="hover:scale-125" />
        </button>
      );
    }
  };

  return toggleRender();
};

export default ThemeButton;
