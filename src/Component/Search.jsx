import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
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
        />
        <button className="w-[45px]">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
    </div>
  );
};

export default Search;
