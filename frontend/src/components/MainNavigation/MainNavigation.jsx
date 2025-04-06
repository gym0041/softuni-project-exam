import classes from "./MainNavigation.module.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context";
import { useContext } from "react";
export default function MainNavigation() {
  const { authState } = useContext(AuthContext);
  let isLogged = authState.isLogged;
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
              <NavLink to={"/products"} className={({ isActive }) => (isActive ? classes.active : undefined)}>
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} className={({ isActive }) => (isActive ? classes.active : undefined)}>
                About
              </NavLink>
            </li>
            {isLogged && (
              <li>
                <NavLink to={"/products/new"} className={({ isActive }) => (isActive ? classes.active : undefined)}>
                  Sell
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className={classes.right}>
          <div>
            <Link to={"/cart"}> Cart </Link>
          </div>
          <div>
            <div className={classes.dropDownIcon}>
              hover
              <ul className={classes.dropDown}>
                {!isLogged && (
                  <>
                    <li>
                      <Link to={"auth?mode=login"}>Login</Link>
                    </li>
                    <li>
                      <Link to={"auth?mode=register"}>Register</Link>
                    </li>
                  </>
                )}
                {isLogged && (
                  <>
                    <li>
                      <Link to={"/auth?mode=login"}>Profile</Link>
                    </li>
                    <li>
                      <NavLink to={"/logout"}>Logout</NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
