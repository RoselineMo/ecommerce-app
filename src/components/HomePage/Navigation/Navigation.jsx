import s from "./style.module.css";

import {IoPersonOutline} from "react-icons/io5";
import {IoIosSearch} from "react-icons/io";
import {TfiHelpAlt} from "react-icons/tfi";
import {PiCurrencyDollarSimple} from "react-icons/pi";
import {CustomCart} from "../../Utils/Icons/CustomCart/CustomCart";

export function Navigation() {
  return (
    <header>
      <nav>
        <ul className={s.left}>
          <li>
            <a href="#">MEN</a>
          </li>
          <li>
            <a href="#">WOMEN</a>
          </li>
          <li>
            <a href="#">SETS</a>
          </li>
          <li>
            <a href="#">JEWELRY</a>
          </li>
          <li>
            <a href="#" className={s.sale}>
              SALE
            </a>
          </li>
        </ul>

        <div className={s.center}>
          <a href="#">BRAND LOGO</a>
        </div>

        <ul className={s.right}>
          <li>
            <a href="#">{<IoIosSearch />}</a>
          </li>
          <li>
            <a href="#">
              <IoPersonOutline />
            </a>
          </li>
          <li>
            <a href="#">
              <TfiHelpAlt />
            </a>
          </li>
          <li>
            <a href="#">
              <PiCurrencyDollarSimple />
            </a>
          </li>
          <li>
            <a href="#">{<CustomCart value={0} />}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
