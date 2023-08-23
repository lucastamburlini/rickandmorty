import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar";

import "./nav.css";

export const Nav = ({ onSearch, random }) => {
  return (
    <div className="nav">
      <div className="container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <SearchBar onSearch={onSearch} random={random} />
      </div>
    </div>
  );
};
