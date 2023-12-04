import { Link } from "react-router-dom";

import { SearchIcon } from "../assets";

import navbar from "./navbar.module.scss";

export default function Navbar() {
  return (
    <div className={navbar.navbar}>
      <div className={navbar.logo}>Blog App</div>

      <div className={navbar.options}>
        <ul className={navbar.menu}>
          <Link to="/">Home</Link>
          <Link to="/articles">Blog</Link>
          <Link to="/about">About Author</Link>
          <Link to="/contact">Contact</Link>
        </ul>

        <div className={navbar.search_bar}>
          <input
            type="text"
            placeholder="Search"
            className={navbar.search_input}
          />

          <div className={navbar.search_icon}>
            <SearchIcon />
          </div>
        </div>

        <div className={navbar.user}>
          <Link to="/login" className={navbar.button}>
            Login
          </Link>

          <Link to="/register" className={navbar.button}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
