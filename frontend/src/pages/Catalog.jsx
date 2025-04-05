import MainNavigation from "../components/MainNavigation/MainNavigation";
import ProductList from "../components/ProductList/ProductList";
export default function Catalog() {
  return (
    <>
      <MainNavigation />
      <h1>Products: </h1>
      <ProductList />
    </>
  );
}
