import React from "react";
import { useTheme } from "../hooks/useTheme";
import "./ThemeSelector.css";

const themeColors = ["#0ca83b", "#2aace8", "orangered"];

const ThemeSelector = () => {
  const { changeColor } = useTheme();
  return (
    <div className="theme-selector">
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;