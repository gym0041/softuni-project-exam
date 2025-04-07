import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/appStore";
export default function Home() {
  let user = useSelector((state) => state.auth.user);
  let dispatch = useDispatch();

  let token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(addUser(token));
    }
    if (!token) {
      dispatch(removeUser());
    }
  }, [dispatch, token]);
  return (
    <>
      <h1>Home page</h1>
    </>
  );
}
