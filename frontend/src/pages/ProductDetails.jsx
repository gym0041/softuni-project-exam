import ProductDetails from "../components/ProductDetails/ProductDetails";
import { useRouteLoaderData } from "react-router-dom";
export default function ProductDetailsPage() {
  let loaderData = useRouteLoaderData("details");
  let product;
  if (loaderData && loaderData.event) {
    product = loaderData.event;
  }
  return (
    <>
      <h1>Product details</h1>
      <ProductDetails product={product} />
    </>
  );
}

export async function loader({ params }) {
  let prodId = params.prodId;
  try {
    let response = await fetch("http://localhost:8080/events/" + prodId);
    if (!response.ok) {
      throw new Response(JSON.stringify({ message: "Could not get details for the Product" }), { status: 500 });
    }
    return response;
  } catch (error) {
    console.log(error);
  }
}
