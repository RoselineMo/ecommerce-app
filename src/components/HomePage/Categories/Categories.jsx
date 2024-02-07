import {Tab} from "../../Utils/Tab/Tab";
import s from "./style.module.css";

export function Categories() {
  return (
    <div className={s.box}>
      <div className={s.categories}>
        <Tab value={"Accessories"} />
        <Tab value={"Clothing"} />
        <Tab value={"Jewelry"} />
        <Tab value={"Corporates"} />
        <Tab value={"Men"} />
        <Tab value={"Women"} />
      </div>
    </div>
  );
}
