import { useNavigate } from "react-router-dom";
import classes from "./ProductDetails.module.css";
export default function ProductDetails({ product }) {
  let navigate = useNavigate();
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.details}>
          <div>
            <img src={product.image} alt="product image" />
          </div>
          <div>
            <p>Title</p>
            <span>${Number(product.price).toFixed(2)}</span>
            <hr />
            <p>Description: {product.description}</p>
            <div>
              <button
                onClick={() => {
                  return navigate("..", { relative: "path" });
                }}
              >
                cancel
              </button>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
