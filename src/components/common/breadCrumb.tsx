import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import crump from "./crump.module.scss";

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const [currentCrumb, setCurrentCrumb] = useState<string>("");
  let currentLink: string[] = [];
  console.log("currentLink: ", currentLink);
  const crumbs = pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink.push(`/${crumb}`);

      return (
        <div className={crump.crumb} key={crumb}>
          <Link to={currentLink.join("")}>{crumb}</Link>
        </div>
      );
    });

  // setCurrentCrumb(`${currentLink[currentLink.length - 1]}` || "");
  return (
    <div className={crump.breadcrumbs}>
      <h2 className={crump.crumb_title}>{currentCrumb}</h2>

      <div className={crump.crumbs}>{crumbs}</div>
    </div>
  );
}
