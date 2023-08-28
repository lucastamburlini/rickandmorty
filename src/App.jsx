import { useEffect, useState } from "react";
import { Nav } from "./components/Nav/Nav";
import axios from "axios";
import Cards from "./components/Cards/Cards.jsx";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import Error from "./views/Error/Error";

import "./App.css";
import Login from "./views/Login/Login";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "123456";

  const location = useLocation();
  const navigate = useNavigate();

  function handleLogin(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
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

  function onSearch(id) {
    const characterExists = characters.find(
      (character) => character.id === parseInt(id)
    );

    if (!characterExists) {
      axios(
        `https://rym2-production.up.railway.app/api/character/${id}?key=henrym-lucastamburlini`
      ).then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("There aren't characters with this id!");
        }
      });
    } else {
      alert("The character already exists!");
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

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} random={random} handleLogout={handleLogout} />
      )}
      <>
        <Routes>
          <Route path="/" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
