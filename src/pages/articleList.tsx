import { ArticleCard } from "../components";
import list from "./list.module.scss";

export default function ArticleList() {
  return (
    <div className={list.container}>
      <h1 className={list.title}>Article List:</h1>

      <div className={list.list}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>

      <div className={list.btns}>
        <button className={list.button}>View All Posts</button>
      </div>
    </div>
  );
}
