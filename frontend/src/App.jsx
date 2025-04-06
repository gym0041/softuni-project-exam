import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Products, { loader as productsLoader } from "./pages/Products";
import About from "./pages/About";
import ProductsRoot from "./pages/ProductsRoot";
import ProductDetailsPage, { loader as detailsLoader } from "./pages/ProductDetails";
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
      {
        path: "/products",
        element: <ProductsRoot />,
        children: [
          { path: "", loader: productsLoader, element: <Products /> },
          {
            id: "details",
            loader: detailsLoader,
            children: [
              { path: ":prodId", element: <ProductDetailsPage /> },
              { path: ":prodId/edit", element: <h1>Product Edit Page</h1> },
            ],
          },
        ],
      },

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
