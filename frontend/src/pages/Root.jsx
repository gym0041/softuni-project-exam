import { Outlet, useLoaderData } from "react-router-dom";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import { useCallback, useContext, useEffect } from "react";
import { AuthContext } from "../Context";
export default function Root() {
  let { authState, login, logout } = useContext(AuthContext);
  let loaderData = useLoaderData();

  useEffect(() => {
    console.log("RRROOOOT EFFECT");
    if (loaderData.isLogged) {
      login();
    } else {
      logout();
    }
  }, [loaderData, login, logout]);
  return (
    <>
      <MainNavigation></MainNavigation>
      <Outlet></Outlet>
    </>
  );
}
