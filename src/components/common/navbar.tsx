import { SearchIcon } from "../assets";
import navbar from "./navbar.module.scss";

export default function Navbar() {
  return (
    <div className={navbar.navbar}>
      <div className={navbar.logo}>Uzgur</div>

      <div className={navbar.options}>
        <ul className={navbar.menu}>
          <li>Home</li>
          <li>Blog</li>
          <li>About Author</li>
          <li>Contact</li>
        </ul>

        <div className={navbar.search_bar}>
          <input type="text" placeholder="Search" className={navbar.search_input} />

          <div className={navbar.search_icon}>
            <SearchIcon />
          </div>
        </div>

        <button className={navbar.login_button}>Login</button>
      </div>
    </div>
  );
}
