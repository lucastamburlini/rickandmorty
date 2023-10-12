import Card from "../Card/Card";

import "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className="listsCards">
      <div className="container cantainer-card">
        {characters.map((character) => {
          return (
            <Card key={character.id} character={character} onClose={onClose} />
          );
        })}
      </div>
    </div>
  );
}
