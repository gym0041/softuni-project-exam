// import { useActionData } from "react-router-dom";
import { redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm/AuthForm";
export default function Auth() {
  // let actionData = useActionData();
  // console.log(actionData);
  return (
    <>
      <AuthForm></AuthForm>
    </>
  );
}

export async function action({ request, params }) {
  let searchParams = new URL(request.url).searchParams;
  let mode = searchParams.get("mode");
  let formData = await request.formData();

  let body = {};

  body.email = formData.get("email");
  body.password = formData.get("password");

  if (!body.email || !body.password) {
    return { errors: "All fields are required", inputValues: { ...body } };
  }
  if (mode === "signup") {
    body.rePassword = formData.get("rePassword");

    if (!body.rePassword) {
      return { errors: "All fields are required", inputValues: { ...body } };
    }

    if (body.password !== body.rePassword) {
      return { errors: "Passwords do not match", inputValues: { ...body } };
    }
  }

  let response = await fetch("http://localhost:5000/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    let respData = await response.json();
    if (response.status === 500) {
      if (respData.message === "The email is already registered!") {
        return { errors: respData.message };
      }
      throw new Response(JSON.stringify({ message: respData.message }));
    }
    if (response.status === 422) {
      return { errors: respData.errors };
    }
    if (response.status === 401) {
      return { errors: respData.message };
    }

    if (!response.ok) {
      throw new Response(JSON.stringify({ message: respData.message }), { status: 500 });
    }
  }
  let respData = await response.json();
  console.log(respData);
  localStorage.setItem("token", respData.token);
  return redirect("/");
  return { status: "success", message: body.email + " " + respData.message };
}
