import s from "./style.module.css";
import {BigGalleryCard} from "../../Utils/BigGalleryCard/BigGalleryCard";
import img1 from "../../../assets/Images/pretty-on-pink-brick.jpg";
import img2 from "../../../assets/Images/classy-tuxedo-fashion.jpg";
import img3 from "../../../assets/Images/model-leather.jpg";

export function NewArrivals() {
  return (
    <div className={s.newArrivals}>
      <h2 className={s.heading_primary_left2}>New Arrivals</h2>
      <div className={s.gallery}>
        <div className={`${s.cardsBox} ${s.boxShadow}`}>
          <BigGalleryCard image={img1} />
          <BigGalleryCard image={img2} />
          <BigGalleryCard image={img3} />
        </div>
      </div>
    </div>
  );
}
