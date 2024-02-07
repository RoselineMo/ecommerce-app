import s from "./style.module.css";

export function Description({title, text, price}) {
  return (
    <div className={s.description}>
      <p className={s.title}>{title}</p>
      <div className={s.bottom}>
        <span className={s.text}>{text}</span>
        <span className={s.price}>${price}</span>
      </div>
    </div>
  );
}
