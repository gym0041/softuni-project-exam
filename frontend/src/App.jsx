import "./App.css";

import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products, { loader as productsLoader } from "./pages/Products";
import ProductDetailsPage, { loader as productDetailsLoader } from "./pages/ProductDetails";
import Root from "./pages/Root";
import Auth, { action as authAction } from "./pages/Auth";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/products", loader: productsLoader, element: <Products /> },
      { path: "/products/:prodId", loader: productDetailsLoader, element: <ProductDetailsPage /> },
      { path: "/auth", action: authAction, element: <Auth /> },
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
