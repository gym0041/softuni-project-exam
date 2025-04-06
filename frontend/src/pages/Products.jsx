import { useLoaderData } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList";
export default function Catalog() {
  let loaderData = useLoaderData();
  console.log(loaderData);
  return (
    <>
      <h1>Products: </h1>
      <ProductList products={loaderData.events}></ProductList>
    </>
  );
}

export async function loader({ params }) {
  try {
    let response = await fetch("http://localhost:8080/events");
    if (!response.ok) {
      return { error: "There was a problem fetching the products" };
    }
    return response;
  } catch (error) {
    console.log(error);
  }
}
