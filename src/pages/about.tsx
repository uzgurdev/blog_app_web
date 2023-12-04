import { UserInfo } from "../components";
import about from "./about.module.scss";
import ArticleList from "./articleList";

export default function About() {
  return (
    <div className={about.container}>
      <UserInfo />
      <ArticleList />
    </div>
  );
}
