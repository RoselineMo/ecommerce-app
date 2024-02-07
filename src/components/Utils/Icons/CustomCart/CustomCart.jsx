import s from "./style.module.css";
import {Icon} from "@iconify-icon/react";

export function CustomCart(props) {
  return (
    <div className={s.cart}>
      <span className={s.count}>{props.value}</span>
      <Icon icon="mdi:cart-plus" className={s.icon} />
    </div>
  );
}
