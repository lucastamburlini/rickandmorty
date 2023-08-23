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
        <h2>Name: {character.name}</h2>
        <h3>Species: {character.species}</h3>
        <h3>Gender: {character.gender}</h3>
      </div>
      <div>
        <img src={character.image} alt={character.name} />
      </div>
    </div>
  );
}
