import { connect } from "react-redux";
import Cards from "./Cards/Cards";

const Favorites = ({ favorites }) => {
  return (
    <div>
      <Cards characters={favorites} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
