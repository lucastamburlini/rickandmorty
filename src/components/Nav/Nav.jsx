import { NavLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchBar from "../SearchBar/SearchBar";
import image1 from '../../assets/rick_and_morty1.png'

import style from "./Nav.module.css";

export const Nav = ({ onSearch, random, handleLogout, handleClear }) => {
  return (
    <div className={style.nav}>
      <div className={style.container}>
        <NavLink to="/home">
          <img src={image1} alt="rick_and_morty" />
        </NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <SearchBar onSearch={onSearch} random={random} handleClear={handleClear} />
        <button className={style.LogoutIcon} onClick={handleLogout}>
          <LogoutIcon />
        </button>
      </div>
    </div>
  );
};
