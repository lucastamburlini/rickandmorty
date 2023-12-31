import { useNavigate } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import style from "./Card.module.css";

export default function Card({ character, onClose }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);

  const isCharacterInFavorites = favorites
    .map((fav) => fav.id)
    .includes(character.id);

  const [isFav, setIsFav] = useState(isCharacterInFavorites);
  const [closeBtn, setCloseBtn] = useState(true);

  function navigateHandle() {
    navigate(`/detail/${character.id}`);
  }

  useEffect(() => {
    if (!onClose) {
      setCloseBtn(!closeBtn);
    }
  }, []);

  function handleFavorite(data) {
    if (!isFav) {
      dispatch(addFav(data));
    } else {
      dispatch(removeFav(data.id));
    }
    setIsFav(!isFav);
  }

  /*  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === character.id) {
        setIsFav(true);
      }
    });
  }, [favorites]); */

  return (
    <div className={style.card}>
      {closeBtn && (
        <button
          className={style.closeBotton}
          onClick={() => {
            onClose(character.id);
          }}
        >
          <HighlightOffIcon />
        </button>
      )}

      <div>
        <img src={character.image} alt={character.name} />
      </div>
      <div className={style.cardInfo}>
        <div>
          <h2>{character.name}</h2>
        </div>
        <div>
          <p>Gender: {character.gender}</p>
          <p>Species: {character.species}</p>
        </div>
        <div className={style.cardFooter}>
          <button onClick={navigateHandle}>
            Details <KeyboardDoubleArrowRightIcon />
          </button>

          {isFav ? (
            <button onClick={() => handleFavorite(character)}>❤️</button>
          ) : (
            <button onClick={() => handleFavorite(character)}>🤍</button>
          )}
        </div>
      </div>
    </div>
  );
}

/* const mapDispatchToProps = (dispatch) => {
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
 */
