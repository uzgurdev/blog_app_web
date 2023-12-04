// import { Link, useLocation } from "react-router-dom";

import crump from "./crump.module.scss";

export default function Breadcrumbs() {
  //   const { pathname } = useLocation();
  //   const [currentCrumb, setCurrentCrumb] = useState('');
  //   let currentLink: string[] = [];
  //   const crumbs = pathname
  //     .split("/")
  //     .filter((crumb) => crumb !== "")
  //     .map((crumb) => {
  //       currentLink.push(`/${crumb}`);
  //       setCurrentCrumb(crumb);

  //       return (
  //         <div className={crump.crumb} key={crumb}>
  //           <Link to={currentLink.join("")}>{crumb}</Link>
  //         </div>
  //       );
  //     });
  return (
    <div className={crump.breadcrumbs}>
      <h2 className={crump.crumb_title}>Uzgur</h2>

      <div className={crump.crumbs}>
        <div className={crump.crumb}>
          <a href="/posts_list">Home</a>
        </div>

        <div className={crump.crumb}>
          <a href="/posts_list">postsList</a>
        </div>
      </div>
    </div>
  );
}
