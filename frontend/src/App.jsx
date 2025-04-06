import "./App.css";
import {} from "@fortawesome/fontawesome-free-solid";
import Header from "./components/Header/Header";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth, { action as registerAndLoginAction } from "./pages/Auth";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import NewProduct, { action as createProductAction } from "./pages/NewProduct";
const router = createBrowserRouter([
  { path: "/", element: <Header /> },
  { path: "/auth", action: registerAndLoginAction, element: <Auth /> },
  { path: "/catalog", element: <Catalog /> },
  { path: "/about", element: <About /> },
  { path: "/catalog/new", action: createProductAction, element: <NewProduct /> },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
