import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar";

import "./nav.css";

export const Nav = ({ onSearch, random, loginOut }) => {
  return (
    <div className="nav">
      <div className="container">
        <NavLink to="/home">
          <img src="./src/assets/rick_and_morty.png" alt="rick_and_morty" />
        </NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <SearchBar onSearch={onSearch} random={random} />
        <button onClick={loginOut}>Logout</button>
      </div>
    </div>
  );
};
