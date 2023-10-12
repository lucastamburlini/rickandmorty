import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    //`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-lucastamburlini`
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className="card-detail-container">
      <div>
        <img src={character.image} alt={character.name} />
      </div>
      <div className="card-detail-info">
        <h2>Name: {character.name}</h2>
        <h3>ID: {character.id}</h3>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Type: {character.type}</p>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character.origin}</p>
        <p>Location: {character.location}</p>
      </div>
    </div>
  );
};

export default Detail;
