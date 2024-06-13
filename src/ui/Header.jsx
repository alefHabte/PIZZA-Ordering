import { Link } from "react-router-dom";
import Search from "../features/order/Search";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
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
