import { useState } from "react";

import "./SearchBar.css";

export default function SearchBar({ onSearch, random }) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div>
      <div className="search">
        <div>
          <input
            placeholder="Add character..."
            type="search"
            value={id}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            className="button"
            onClick={() => {
              onSearch(id);
            }}
          >
            Add
          </button>
        </div>
        <div>
          <button className="button" onClick={random}>
            Random
          </button>
        </div>
      </div>
    </div>
  );
}
