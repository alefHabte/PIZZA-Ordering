import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handelSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);

    setQuery("");
  }
  return (
    <form onSubmit={handelSubmit}>
      <input
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-32 rounded-full border-stone-200 bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-800 focus:w-36 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 sm:w-72 sm:focus:w-80"
      />
    </form>
  );
}

export default Search;
