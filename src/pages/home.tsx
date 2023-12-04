import home from "./home.module.scss";

import { Outlet } from "react-router-dom";
import { Header } from "../components";

export default function Home() {
  return (
    <div className={home.container}>
      <Header />
      <main>
        Home
        <Outlet />
      </main>
    </div>
  );
}
