import classes from "./ProductItem.module.css";

export default function ProductItem() {
  return (
    <>
      <div className={classes.productContainer}>
        <div className={classes.image}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPM9n6Cizmh_-x663DF4Y9LZxxZzW9BrS_A&s"
            alt="product image"
          />
          <div className={classes["detail-pop"]}>
            <div>view details</div>
            <div>like</div>
          </div>
        </div>
        <div className={classes.prodDetails}>
          <div>
            <p className={classes.prodName}>Prod name</p>
          </div>
          <div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
