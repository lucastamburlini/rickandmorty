import { useDispatch, useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import { filterCards, orderCards, resetFav } from "../../redux/actions/actions";

import "./Favorites.module.css";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);

  function handleOrder(e) {
    dispatch(orderCards(e.target.value));
  }

  function handleFilter(e) {
    dispatch(filterCards(e.target.value));
  }

  function handleReset() {
    dispatch(resetFav());
  }

  return (
    <div>
      <div className="favorites-container">
        <select placeholder="Order" onChange={handleOrder}>
          {["Upward", "Falling"].map((order) => (
            <option key={order} value={order}>
              {order}
            </option>
          ))}
        </select>
        <select placeholder="Gender" onChange={handleFilter}>
          {["Male", "Female", "Genderless", "unknown"].map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
        <button className="button" onClick={handleReset}>Reset</button>
      </div>
      <Cards characters={favorites} />
    </div>
  );
};

export default Favorites;

/* const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites); */
