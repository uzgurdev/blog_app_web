import { Link } from "react-router-dom";
import card from "./card.module.scss";

export default function ArticleCard() {
  return (
    <div className={card.card}>
      <div className={card.category}>
        <p className={card.category_p}>Technology</p>
      </div>
      <Link to="/post" className={card.title}>
        The Impact of Technology on the Workplace: How Technology is Changing
      </Link>
      <div className={card.card_info}>
        <p>Tracey Wilson</p>
        <p>August 20, 2022</p>
      </div>
    </div>
  );
}
