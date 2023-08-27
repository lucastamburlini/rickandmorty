import { useState } from "react";

export default function SearchBar({ onSearch, random }) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div>
      <div className="search">
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
    </div>
  );
}
