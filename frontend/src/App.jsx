import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Products, { loader as productsLoader } from "./pages/Products";
import About from "./pages/About";
import ProductsRoot from "./pages/ProductsRoot";
import ProductDetails from "./pages/ProductDetails";
import NewProduct from "./pages/NewProduct";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import ErrorPage from "./pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", loader: productsLoader, element: <Products /> },
      { path: "products/:prodId", element: <ProductDetails /> },
      { path: "about", element: <About /> },
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
