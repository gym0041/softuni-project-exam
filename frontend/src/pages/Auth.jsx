import AuthForm from "../components/AuthForm/AuthForm";
import { redirect } from "react-router-dom";
export default function Auth() {
  return (
    <>
      <AuthForm></AuthForm>
    </>
  );
}

export async function action({ request, params }) {
  let formData = await request.formData();
  let searchParams = new URL(request.url).searchParams;
  let mode = searchParams.get("mode");

  let body = Object.fromEntries(formData.entries());

  if (body.email.length === 0 || body.password.length === 0 || body.rePassword === 0) {
    return {
      error: "All fields are required!",
    };
  }
  if (mode !== "login") {
    if (!body.accountType) {
      return { error: "Please choose an Account type!" };
    }
    if (body.password !== body.rePassword) {
      return {
        error: "Passwords do not match!",
      };
    }
  }

  let response = await fetch("http://localhost:8080/" + searchParams.get("mode"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    return response;
  }

  let respData = await response.json();
  localStorage.setItem("token", respData.token);
  console.log("Succesfully auth");

  return redirect("/");
}
