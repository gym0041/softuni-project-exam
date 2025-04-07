import classes from "./AuthForm.module.css";
import { Link, useSearchParams, Form, useFetcher, useActionData } from "react-router-dom";

export default function AuthForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const fetcher = useFetcher();
  let isLogin = searchParams.get("mode") === "login";
  let actionData = fetcher.data;
  return (
    <>
      {actionData && actionData.status === "success" && <h1>{actionData.message}</h1>}
      <div className="wrapper">
        <fetcher.Form action={`/auth?mode=${searchParams.get("mode")}`} method="post" className={classes.form}>
          <p>{isLogin ? "Login" : "Sign up"}</p>
          {!isLogin && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1rem",
              }}
            >
              <span>Choose account type:</span>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div>
                  <input type="radio" id="normal" name="accountType" value={"normal"}></input>
                  <label style={{ marginLeft: "4px" }} htmlFor="normal">
                    Normal
                  </label>
                </div>
                <div>
                  <input type="radio" id="business" name="accountType" value={"business"}></input>
                  <label style={{ marginLeft: "4px" }} htmlFor="business">
                    Business
                  </label>
                </div>
              </div>
            </div>
          )}

          {actionData && actionData.errors && (
            <p
              style={{
                marginTop: "1.5rem",
                color: "white",
                padding: "8px 12px",
                textAlign: "center",
                backgroundColor: "red",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              {actionData.errors}
            </p>
          )}

          <div className={classes["control-row"]}>
            <label className={classes.labelEmail} htmlFor="email">
              Email
            </label>
            <input id="email" name="email" type="email" defaultValue={actionData?.inputValues?.email || ""} />
          </div>

          <div className={classes["control-row"]}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="Password"
              defaultValue={actionData?.inputValues?.password || ""}
            />
          </div>
          {!isLogin && (
            <div className={classes["control-row"]}>
              <label htmlFor="rePassword">Repeat password</label>
              <input id="repassword" name="rePassword" type="Password" />
            </div>
          )}
          <div className={classes.controls}>
            <Link to={`${isLogin ? "/auth?mode=signup" : "/auth?mode=login"}`} className={classes.textBtn}>
              {isLogin ? "Dont have an account? Go to Sign up" : "Already a user? Go to login.."}
            </Link>{" "}
            <button className={classes.btn}>{isLogin ? "Login" : "Sign up"}</button>
          </div>
        </fetcher.Form>
      </div>
    </>
  );
}
