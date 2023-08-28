import { useNavigate } from "react-router-dom";

import "./card.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

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
        <HighlightOffIcon />
      </button>
      <div>
        <img src={character.image} alt={character.name} />
      </div>
      <div className="card-info">
        <div>
          <h2>{character.name}</h2>
        </div>
        <div>
          <p>Gender: {character.gender}</p>
          <p>Species: {character.species}</p>
        </div>
        <div>
          <button onClick={navigateHandle}>
            Details <KeyboardDoubleArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
