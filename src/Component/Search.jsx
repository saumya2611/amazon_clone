import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { callApi } from "../Utils/CallApi";

const Search = () => {
  const [suggestion, setSuggestion] = useState(null);
  const [searchterm, setSearchTerm] = useState("");

  const getSuggestions = () => {
    callApi(`data/suggestions.json`).then((suggestionsResults) => {
      setSuggestion(suggestionsResults);
    });
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-searchclone border-2 border-white rounded  hover:border-orange-400">
        <select className="p-[7px] py-2 bg-gray-300 text-black text-xs xl:text-sm focus:outline-none">
          <option>All</option>
          <option>Deals</option>
          <option>Amazon</option>
          <option>Fashion</option>
          <option>Computers</option>
          <option>Home</option>
          <option>Mobiles</option>
        </select>
        <input
          type="text"
          placeholder="Search Amazon.in"
          className="grow flex items-center h-[100%] text-black px-3 focus:outline-none"
          value={searchterm}
          onChange={(ev) => setSearchTerm(ev.target.value)}
        />
        <button className="w-[45px]">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
      {suggestion && (
        <div className="bg-white text-black w-full z-40 absolute">
          {suggestion
            .filter((suggestion) => {
              const currentSearchTerm = searchterm.toLocaleLowerCase();
              const title = suggestion.title.toLocaleLowerCase();
              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)}
        </div>
      )}
    </div>
  );
};

export default Search;

const a = [1, 2, 3, 4, 5, 6, 7, 8];

a.filter((item) => {
  return item;
}).slice(0, 10);
