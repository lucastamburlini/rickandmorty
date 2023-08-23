import { Link, useNavigate } from "react-router-dom";

import "./card.css";

export default function Card({ character, onClose }) {
  const navigate = useNavigate()

  function navigateHandle () {
    navigate(`/detail/${character.id}`)
  }

  return (
    <Link to={`/detail/${character.id}`}>
      <div className="card">
        <button
          onClick={() => {
            onClose(character.id);
          }}
        >
          X
        </button>
        <div>
          <h2>{character.name}</h2>
        </div>
        <div>
          <img src={character.image} alt={character.name} />
        </div>
        <div>
          <p>Gender: {character.gender}</p>
          <p>Species: {character.species}</p>
          <button onClick={navigateHandle}>Details</button>
        </div>
      </div>
    </Link>
  );
}
