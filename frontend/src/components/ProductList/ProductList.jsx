import ProductItem from "./ProductItem/ProductItem";
import classes from "./ProductList.module.css";
export default function ProductList() {
  return (
    <>
      <div className={classes.productList}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </>
  );
}
