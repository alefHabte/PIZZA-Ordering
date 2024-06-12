import { Link } from "react-router-dom";
import Search from "../features/order/Search";

function Header() {
  return (
    <header>
      <Link to="/"> Home</Link>
      <Search />
      <p>Alef</p>
    </header>
  );
}

export default Header;
