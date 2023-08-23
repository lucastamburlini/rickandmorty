import "./card.css";
export default function Card({ character, onClose }) {
  return (
    <div className="card">
      <button
        onClick={() => {
          onClose(character.id);
        }}
      >
        X
      </button>
      <div>
        <h2>{character.name}</h2>
      </div>
      <div>
        <img src={character.image} alt={character.name} />
      </div>
      <div>
        <p>Gender: {character.gender}</p>
        <p>Species: {character.species}</p>
      </div>
    </div>
  );
}
