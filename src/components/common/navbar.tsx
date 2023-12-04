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

        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}
