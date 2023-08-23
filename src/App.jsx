import { useState } from "react";
import { Nav } from "./components/Nav";
import axios from "axios";
import Cards from "./components/Cards.jsx";

import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

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
          window.alert("¡No hay personajes con este ID!");
        }
      });
    } else {
      alert("¡El personaje ya existe!");
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
      alert("¡El personaje ya existe!");
    }
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} random={random} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
