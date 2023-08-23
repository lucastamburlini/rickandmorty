import { useState } from "react";

export default function SearchBar({ onSearch, random }) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const input = e.target.value;

    setId(input);
  };

  return (
    <div>
      <input type="search" value={id} onChange={handleChange} />
      <button
        onClick={() => {
          onSearch(id);
        }}
      >
        Add character
      </button>
      <button onClick={random}>Random character</button>
    </div>
  );
}
