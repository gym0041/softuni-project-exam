import MainNavigation from "../components/MainNavigation/MainNavigation";
import AuthForm from "../components/AuthForm/AuthForm";
export default function Auth() {
  return (
    <>
      <MainNavigation />
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
  console.log(body);

  return;
}
