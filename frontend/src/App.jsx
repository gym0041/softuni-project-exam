import "./App.css";
import {} from "@fortawesome/fontawesome-free-solid";
import Header from "./components/Header/Header";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth";
const router = createBrowserRouter([
  { path: "/", element: <Header /> },
  { path: "/auth", element: <Auth /> },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
