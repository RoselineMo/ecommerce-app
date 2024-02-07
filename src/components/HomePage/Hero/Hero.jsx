import s from "./style.module.css";
import img from "../../../assets/Images/white-untitled.png";
import {ShopButton} from "../../Utils/ShopButton/ShopButton";

export function Hero() {
  return (
    <div className={`${s.heroSection} ${s.grid}`}>
      <div className={`${s.heroImg}`}>
        <img src={img} alt="Hero image" />
      </div>

      <div className={s.heroCard}>
        <h2>FEATURED</h2>
        <ul>
          <li>
            <a href="#" className={s.link}>
              New Arrivals
            </a>
          </li>
          <li>
            <a href="#" className={s.link}>
              Men Accessories
            </a>
          </li>
          <li>
            <a href="#" className={s.link}>
              Women Accessories
            </a>
          </li>
        </ul>
      </div>

      <div className={s.HeroHeading}>
        <h1>Find the perfect fashion gifts</h1>
        <p>For all the ones you love, including you.</p>

        <div className={s.buttonBox}>
          <ShopButton value={"MEN"} />
          <ShopButton value={"WOMEN"} />
        </div>
      </div>
    </div>
  );
}
