import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            {/* <Link to="/page-one">Page One</Link> */}
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/DogImages"
            >
              Dog
            </NavLink>
          </li>
          <li>
            {/* <Link to="/page-two">Page Two</Link> */}
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/CatImages"
            >
              Cat
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
