import React from "react";
import { useState } from "react";

import { FaToggleOn, FaToggleOff } from "react-icons/fa";

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
          <FaToggleOff />
        </button>
      );
    } else if (theme === "black") {
      return (
        <button onClick={handleWhiteTheme}>
          <FaToggleOn />
        </button>
      );
    }
  };

  return toggleRender();
};

export default ThemeButton;
