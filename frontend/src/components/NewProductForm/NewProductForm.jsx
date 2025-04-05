import classes from "./NewProductForm.module.css";
export default function NewProductForm() {
  return (
    <>
      <div className="wrapper">
        <div className="outer"></div>
        <div className="formWrapper">
          <form className={classes.form} action="">
            <div className={classes.upper}>
              <p>Create new Product</p>
            </div>
            <div className={classes.category}>
              <p>Choose category:</p>
              <select name="category" id="category">
                <option value="men">Men</option>
                <option value="men">Women</option>
              </select>
            </div>
            <div className={classes.middle}>
              <div className={classes["form-control"]}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" />
              </div>
              <div className={classes["form-control"]}>
                <label htmlFor="price">Price</label>
                <input type="text" name="price" id="price" />
              </div>
              <div className={classes["form-control"]}>
                <label htmlFor="description">Description</label>
                <textarea rows="5" name="description" id="description"></textarea>
              </div>
              <div className={classes["form-control"]}>
                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" name="imageUrl" id="imageUrl" />
              </div>
            </div>
            <div className={classes.bottom}>
              <div className={classes.controls}>
                <button>Cancel</button>
                <button>Create Product</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
