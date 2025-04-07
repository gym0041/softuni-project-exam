import classes from "./MainNavigation.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../store/appStore";
export default function MainNavigation() {
  let user = useSelector((state) => state.auth.user);
  let dispatch = useDispatch();
  console.log(user);
  let navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    dispatch(removeUser());
    navigate("/");
  }
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

            {user && (
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
                {!user && (
                  <>
                    <li>
                      <Link to={"auth?mode=login"}>Login</Link>
                    </li>
                    <li>
                      <Link to={"auth?mode=register"}>Register</Link>
                    </li>
                  </>
                )}

                {user && (
                  <>
                    <li>
                      <Link to={"/auth?mode=login"}>Profile</Link>
                    </li>
                    <li>
                      <NavLink onClick={handleLogout} to={"#"}>
                        Logout
                      </NavLink>
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
