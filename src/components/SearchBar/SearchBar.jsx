import { useState } from "react";

import style from "./SearchBar.module.css";
import '../../App.module.css';

export default function SearchBar({ onSearch, random, handleClear }) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div>
      <div className={style.search}>
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
            className={style.button}
            onClick={() => {
              onSearch(id);
            }}
          >
            Add
          </button>
        </div>
        <div>
          <button className={style.button} onClick={random}>
            Random
          </button>
        </div>
        <div>
          <button className={style.button} onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
