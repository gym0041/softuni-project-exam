import { useLoaderData } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList";

export default function Catalog() {
  let loaderData = useLoaderData();
  // console.log(loaderData);
  return (
    <>
      <h1>Products: </h1>

      {loaderData.products && loaderData.products.length > 0 && <ProductList products={loaderData.products} />}
    </>
  );
}

export async function loader({ params }) {
  let response = await fetch("http://localhost:5000/products");
  // console.log(response);
  return response;
}
