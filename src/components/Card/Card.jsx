import { useNavigate } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions";
import "./card.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

function Card({ character, onClose, addFav, removeFav, favorites }) {
  const navigate = useNavigate();
  const [isFav, setIsFav] = useState(false);

  function navigateHandle() {
    navigate(`/detail/${character.id}`);
  }

  function handleFavorite(data) {
    if (!isFav) {
      addFav(data);
      setIsFav(true);
    } else {
      removeFav(data);
      setIsFav(false);
    }
  }

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === character.id) {
        setIsFav(true);
      }
    });
  }, [favorites]);

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
        <div className="card-footer">
          <button onClick={navigateHandle}>
            Details <KeyboardDoubleArrowRightIcon />
          </button>

          {isFav ? (
            <button onClick={() => handleFavorite(character.id)}>❤️</button>
          ) : (
            <button onClick={() => handleFavorite(character)}>🤍</button>
          )}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
