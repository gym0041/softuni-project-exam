import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation/MainNavigation";

export default function Root() {
  return (
    <>
      <MainNavigation></MainNavigation>
      <Outlet></Outlet>
    </>
  );
}
