import NewProductForm from "../components/NewProductForm/NewProductForm";
import MainNavigation from "../components/MainNavigation/MainNavigation";
export default function NewProduct() {
  return (
    <>
      <MainNavigation />
      <NewProductForm></NewProductForm>
    </>
  );
}

export async function action({ request, params }) {
  let formData = await request.formData();
  let token = localStorage.getItem("token");
  let body = {
    category: formData.get("category"),
    title: formData.get("title"),
    price: formData.get("price"),
    description: formData.get("description"),
    image: formData.get("image"),
  };
  console.log(body);
  let response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(body),
  });

  return response;
}
