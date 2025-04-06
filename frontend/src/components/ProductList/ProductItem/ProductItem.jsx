import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

export default function ProductItem({ product }) {
  return (
    <>
      <div className={classes.productContainer}>
        <div className={classes.image}>
          <img src={product.image} alt="product image" />
          <div className={classes["detail-pop"]}>
            <Link to={"/products/" + product.id}>view details</Link>
            <div>like</div>
          </div>
        </div>
        <div className={classes.prodDetails}>
          <div>
            <p className={classes.prodName}>{product.title}</p>
            <p>Price: ${Number(product.price).toFixed(2)} </p>
          </div>
          <div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
