import SearchBar from "./SearchBar";

export const Nav = ({ onSearch, random }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} random={random} />
    </div>
  );
};
