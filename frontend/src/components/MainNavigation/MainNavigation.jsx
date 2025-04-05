import classes from "./MainNavigation.module.css";
import { Link, NavLink } from "react-router-dom";
export default function MainNavigation() {
  return (
    <>
      <div className={classes.mainNavContainer}>
        <div className={classes.left}></div>
        <div className={classes.navList}>
          <ul>
            <li>
              <NavLink to={"/"} className={({ isActive }) => (isActive ? classes.active : undefined)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/catalog"} className={({ isActive }) => (isActive ? classes.active : undefined)}>
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} className={({ isActive }) => (isActive ? classes.active : undefined)}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={classes.right}>
          <div>
            <Link> Cart </Link>
          </div>
          <div>
            <div className={classes.dropDownIcon}>
              hover
              <ul className={classes.dropDown}>
                <li>
                  <Link to={"/auth?mode=login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/auth?mode=register"}>Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
