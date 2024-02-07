import s from "./style.module.css";
import {Description} from "../Description/Description";

export function BigImageCard({image, title, text, price}) {
  return (
    <div className={`${s.card} ${s.boxShadow}`}>
      <div className={`${s.cardImage} ${s.boxShadow}`}>
        <img className={s.image} src={image} alt="Card image" />
      </div>
      <Description title={title} text={text} price={price} />
    </div>
  );
}
