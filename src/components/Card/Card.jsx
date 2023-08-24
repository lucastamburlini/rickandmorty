import { useNavigate } from "react-router-dom";

import "./card.css";

export default function Card({ character, onClose }) {
  const navigate = useNavigate();

  function navigateHandle() {
    navigate(`/detail/${character.id}`);
  }

  return (
    <div className="card">
      <button
        className="close-botton"
        onClick={() => {
          onClose(character.id);
        }}
      >
        X
      </button>
      <div>
        <img src={character.image} alt={character.name} />
      </div>
      <div>
        <h2>{character.name}</h2>
      </div>
      <div>
        <p>Gender: {character.gender}</p>
        <p>Species: {character.species}</p>
        <button onClick={navigateHandle}>Details</button>
      </div>
    </div>
  );
}
