import Card from "../Card/Card";

import style from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.listsCards}>
      <div className={style.container + ' ' + style.containerCard}>
        {characters.map((character) => {
          return (
            <Card key={character.id} character={character} onClose={onClose} />
          );
        })}
      </div>
    </div>
  );
}
