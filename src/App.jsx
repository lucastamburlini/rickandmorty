import { useEffect, useState } from "react";
import { Nav } from "./components/Nav/Nav";
import axios from "axios";
import Cards from "./components/Cards/Cards.jsx";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import Error from "./views/Error/Error";
import Login from "./views/Login/Login";
import Favorites from "./components/Favorites/Favorites";

import style from "./App.module.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  async function handleLogin(userData) {
    try {
      const { email, password } = userData;
      const URL = "/rickandmorty/login/";
      const response = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { data } = response;
      if (data) {
        const { access } = data;
        setAccess(access);
        access && navigate("/home");
      }
    } catch (error) {
      alert(error);
    }
  }

  function handleLogout() {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  /* Code that does not allow backtracking --------------- */
  useEffect(() => {
    if (!access) {
      // Bloquear navegación hacia atrás
      window.history.pushState(null, null, "/");
      window.addEventListener("popstate", navigateHome);

      return () => {
        window.removeEventListener("popstate", navigateHome);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  function navigateHome() {
    navigate("/");
  }
  /* Code that does not allow backtracking --------------- */

  async function onSearch(id) {
    try {
      const characterExists = characters.find(
        (character) => character.id === parseInt(id)
      );
      if (characterExists) {
        alert("The character already exists!");
      } else {
        const response = await axios(
          `/rickandmorty/character/${id}`
        );
        const { data } = response;
        if (data) {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            throw new Error("There aren't characters with this id!");
          }
        }
      }
    } catch (error) {
      alert(error);
    }
  }

  function onClose(id) {
    let borrar = characters.filter((character) => {
      return character.id !== Number(id);
    });
    setCharacters(borrar);
  }

  function random() {
    let numRandom = (Math.random() * 826).toFixed();
    const characterExists = characters.find(
      (character) => character.id === parseInt(numRandom)
    );

    if (!characterExists) {
      onSearch(numRandom);
    } else {
      alert("The character already exists!");
    }
  }

  function handleClear() {
    setCharacters([]);
  }

  return (
    <div className={style.app}>
      {location.pathname !== "/" && (
        <Nav
          onSearch={onSearch}
          random={random}
          handleLogout={handleLogout}
          handleClear={handleClear}
        />
      )}
      <>
        <Routes>
          <Route path="/" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
