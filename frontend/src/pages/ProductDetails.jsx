import ProductDetails from "../components/ProductDetails/ProductDetails";
import { useLoaderData } from "react-router-dom";
export default function ProductDetailsPage() {
  let loaderData = useLoaderData();

  return (
    <>
      <h1>Product details</h1>
      {loaderData && loaderData.product && <ProductDetails product={loaderData.product} />}
    </>
  );
}

export async function loader({ params }) {
  console.log(params.prodId);

  let response = await fetch("http://localhost:5000/products/" + params.prodId);
  return response;
}
