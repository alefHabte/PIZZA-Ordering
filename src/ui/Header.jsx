import { Link } from "react-router-dom";
import Search from "../features/order/Search";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="border-b border-stone-500 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link className="tracking-widest" to="/">
        {" "}
        Fast Pizza
      </Link>
      <Search />
      <Username />
    </header>
  );
}

export default Header;
