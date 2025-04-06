import { Form, useActionData } from "react-router-dom";
import classes from "./NewProductForm.module.css";
export default function NewProductForm() {
  let actionData = useActionData();
  // console.log(actionData);
  return (
    <>
      <div className="wrapper">
        <div className="outer"></div>
        <div className="formWrapper">
          <Form method="post" className={classes.form} action="">
            <div className={classes.upper}>
              <p>Create new Product</p>
            </div>
            <div className={classes.category}>
              <p>Choose category:</p>
              <select name="category" id="category">
                <option value="">--Category--</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
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
                <label htmlFor="image">Image URL</label>
                <input type="text" name="image" id="image" />
              </div>
            </div>
            <div className={classes.bottom}>
              <div className={classes.controls}>
                <button type="button">Cancel</button>
                <button>Create Product</button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
