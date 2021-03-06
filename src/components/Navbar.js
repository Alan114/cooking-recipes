import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useTheme } from "../hooks/useTheme";
import "./Navbar.css";

const Navbar = () => {
  const { color } = useTheme();
  return (
    <div className="navbar" style={{ backgroundColor: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;
