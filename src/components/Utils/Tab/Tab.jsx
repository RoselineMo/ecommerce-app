import s from "./style.module.css";

export function Tab({value}) {
  return (
    <div className={s.tab}>
      <a className={s.button}>{value}</a>
    </div>
  );
}
