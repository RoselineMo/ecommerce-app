import s from "./style.module.css";
import {ShopButtonBlack} from "../../Utils/ShopButtonBlack/ShopButtonBlack";

export function CTA() {
  return (
    <div className={s.cta}>
      <div className={s.ctaBox}>
        <h2 className={s.heading_secondary}>There's a celebration everyday!</h2>
        <p className={s.sub_heading}>
          Celebrate yourself and loved ones with gift-worthy items.
        </p>
        <div className={s.buttonBox}>
          <ShopButtonBlack value={"MEN"} />
          <ShopButtonBlack value={"WOMEN"} />
        </div>
      </div>
    </div>
  );
}
