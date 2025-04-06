import "./App.css";
import {} from "@fortawesome/fontawesome-free-solid";
import Header from "./components/Header/Header";

import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import Auth, { action as registerAndLoginAction } from "./pages/Auth";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import NewProduct, { action as createProductAction } from "./pages/NewProduct";
import Root from "./pages/Root";
import Home from "./pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: () => {
      let hasUser = localStorage.getItem("token");
      console.log(hasUser);
      return { isLogged: hasUser };
    },
    children: [
      { path: "", element: <Home /> },
      { path: "auth", action: registerAndLoginAction, element: <Auth /> },
      { path: "catalog", element: <Catalog /> },
      { path: "about", element: <About /> },
      { path: "catalog/new", action: createProductAction, element: <NewProduct /> },
      {
        path: "logout",
        loader: () => {
          localStorage.removeItem("token");
          return redirect("/");
        },
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
