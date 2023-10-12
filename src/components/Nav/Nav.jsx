import { NavLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchBar from "../SearchBar/SearchBar";

import "./Nav.module.css";

export const Nav = ({ onSearch, random, handleLogout, handleClear }) => {
  return (
    <div className="nav">
      <div className="container">
        <NavLink to="/home">
          <img src="./src/assets/rick_and_morty1.png" alt="rick_and_morty" />
        </NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <SearchBar onSearch={onSearch} random={random} handleClear={handleClear} />
        <button className="LogoutIcon" onClick={handleLogout}>
          <LogoutIcon />
        </button>
      </div>
    </div>
  );
};
