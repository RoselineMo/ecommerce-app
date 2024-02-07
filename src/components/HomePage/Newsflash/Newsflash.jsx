import s from "./style.module.css";

export function NewsFlash() {
  return (
    <div className={`${s.container_row} ${s.news}`}>
      <p>See The Finest New Arrivals Here.</p>
      <div className={s.linksBox}>
        <a>Shop Men</a>
        <span>|</span>
        <a>Shop Women</a>
      </div>
    </div>
  );
}
