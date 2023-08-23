import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import { Nav } from "./components/Nav";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    const characterExists = characters.find(
      (character) => character.id === parseInt(id)
    );

    if (!characterExists) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        }
      );
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
    let numRandom = Math.ceil(Math.random() * 826);
    const characterExists = characters.find(
      (character) => character.id === parseInt(numRandom)
    );

    if (!characterExists) {
      axios(`https://rickandmortyapi.com/api/character/${numRandom}`).then(
        ({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        }
      );
    } else {
      alert("¡El personaje ya existe!");
    }
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} characters={characters} random={random} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
