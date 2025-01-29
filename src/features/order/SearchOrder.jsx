import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlMagnifier } from "react-icons/sl";

function SearchOrder() {
  const [query, setQuery] = useState();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form className="relative flex max-tablet:hidden" onSubmit={handleSubmit}>
      <input
        className="md:w-72 rounded-lg border border-orange-300 bg-amber-100 text-center text-sm text-stone-950 outline-none"
        placeholder="جستجوی محصول ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query ? null : (
        <SlMagnifier className="absolute left-1 top-1 text-sm text-stone-400" />
      )}
    </form>
  );
}

export default SearchOrder;
