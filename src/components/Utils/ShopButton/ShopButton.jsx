import s from "./style.module.css";

export function ShopButton({value}) {
  return <button className={s.button}>SHOP {value}</button>;
}
