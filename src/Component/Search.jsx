import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { callApi } from "../Utils/CallApi";
import { createSearchParams, useNavigate } from "react-router-dom";

const Search = () => {
  const [suggestion, setSuggestion] = useState(null);
  const [searchterm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  //   useEffect(() => {
  //     console.log("suggestion===============>", suggestion);
  //   }, [suggestion]);

  const navigate = useNavigate();

  const getSuggestions = () => {
    callApi(`data/suggestions.json`).then((suggestionsResults) => {
      //   console.log("suggestionsResults===========>", suggestionsResults);
      setSuggestion(suggestionsResults);
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchterm: `${searchterm}`,
      })}`,
    });
    setSearchTerm("");
    setCategory("All");
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-searchclone border-2 border-white rounded  hover:border-orange-400">
        <select
          className="p-[7px] py-2 bg-gray-300 text-black text-xs xl:text-sm focus:outline-none"
          onChange={(ev) => setCategory(ev.target.value)}
        >
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
        <button onClick={onHandleSubmit} className="w-[45px]">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
      {suggestion && (
        <div className="bg-white text-black w-full z-40 absolute">
          {suggestion
            .filter((suggestion) => {
              const currentSearchTerm = searchterm.toLowerCase();
              //   console.log("currentSearchTerm==========>", currentSearchTerm);

              const title = suggestion.title.toLowerCase();
              //    console.log("title==========>", title);

              //   console.log(
              //     `currentSearchTerm &&
              //     title.startsWith(currentSearchTerm) &&
              //     title !== currentSearchTerm`,
              //     currentSearchTerm &&
              //       title.startsWith(currentSearchTerm) &&
              //       title !== currentSearchTerm
              //   );

              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((item) => {
              return (
                <div key={item.id} onClick={() => setSearchTerm(item.title)}>
                  {item.title}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Search;
