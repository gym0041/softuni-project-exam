import ProductItem from "./ProductItem/ProductItem";
import classes from "./ProductList.module.css";
export default function ProductList({ products }) {
  return (
    <>
      <div className={classes.productList}>
        {products &&
          products.length > 0 &&
          products.map((prod) => <ProductItem key={prod.id} product={prod}></ProductItem>)}
      </div>
    </>
  );
}
