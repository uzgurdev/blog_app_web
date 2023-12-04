import home from "./home.module.scss";

import { Outlet } from "react-router-dom";
import { Banner, UserInfo } from "../components";
import Navbar from "../components/common/navbar";
import Breadcrumbs from "../components/common/breadCrumb";

export default function Home() {
  return (
    <div className={home.container}>
      <div className={home.header_container}>
        <Navbar />
        <Breadcrumbs />
      </div>
      <main>
        <Banner />
        {/* Home */}
        <Outlet />
        <UserInfo />
      </main>
    </div>
  );
}
