import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">Головна</Link>
      <Link to="/posts">Всі пости</Link>
    </header>
  );
}