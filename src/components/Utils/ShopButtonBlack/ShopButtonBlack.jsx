import s from "./style.module.css";

export function ShopButtonBlack({value}) {
  return <button className={s.button}>SHOP {value}</button>;
}
