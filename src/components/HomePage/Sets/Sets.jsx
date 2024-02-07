import s from "./style.module.css";
import {BigImageCard} from "../../Utils/BigImageCard/BigImageCard";
import img1 from "../../../assets/Images/raffia3b.jpg";
import img2 from "../../../assets/Images/loungewear.jpg";
import img3 from "../../../assets/Images/sleeping-socks.jpg";

export function Sets() {
  return (
    <div className={`${s.container_col} ${s.sets}`}>
      <h2 className={s.heading_primary_left}>Shop The Sets</h2>
      <div className={s.gridCols3}>
        <BigImageCard
          image={img1}
          title={"Raffia Jewelry"}
          text={"Wear Luxury From Mother Nature"}
          price={"20+"}
        />

        <BigImageCard
          image={img2}
          title={"Breezy Loungewear"}
          text={"Step Into Convenient Comfort, Every Day"}
          price={"23+"}
        />

        <BigImageCard
          image={img3}
          title={"Classy Comfy Socks"}
          text={"Like A Nice Hug, But For Your Feet"}
          price={"14+"}
        />
      </div>
    </div>
  );
}
