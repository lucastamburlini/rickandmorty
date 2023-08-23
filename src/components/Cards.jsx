import Card from "./Card/Card";


export default function Cards({ characters, onClose }) {
  return (
    <div className="listsCards">
      {characters.map((character) => {
        return (
          <Card key={character.id} character={character} onClose={onClose} />
        );
      })}
    </div>
  );
}
