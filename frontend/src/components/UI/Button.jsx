import "./Button.css";

export default function Button({ children, type }) {
  return (
    <>
      <button className={`btn ${type}`}>{children}</button>
    </>
  );
}
