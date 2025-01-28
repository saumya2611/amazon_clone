import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import Search from "./Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => {
    console.log("state========>", state);

    return state.cart.productNumber;
  });
  console.log("cart======>", cart);

  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonclone text-white h-[60px] hover:cursor-pointer">
        {/* Left */}
        <div className="flex items-center m-4">
          <Link to={"/"}>
            <img
              className="h-[35px] w-[100px] m-3"
              src={"../images/amazon.png"}
            />
          </Link>
          <span className="mb-2 -ml-[.7rem] pr-0.5">.in</span>

          <div className="px-4 ml-2 border border-amazonclone transition-all  delay-150  hover:border hover:border-white hover:rounded-sm">
            <div className="text-xs xl:text-sm">Delivering to</div>
            <div className="text-sm xl:text-base font-bold">United Kingdom</div>
          </div>
        </div>
        {/* Middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>
        {/* Right */}
        <div className="flex items-center m-4">
          <div className="px-3 border border-amazonclone transition-all  delay-150 hover:border hover:border-white hover:rounded-sm">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold">
              Accounts & Lists
            </div>
          </div>
          <div className="px-3 border border-amazonclone transition-all  delay-150 hover:border hover:border-white hover:rounded-sm">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& orders</div>
          </div>
          <Link to={"/checkout"}>
            <div className="flex pr-3 pl-3 border border-amazonclone transition-all  delay-150 hover:border hover:border-white hover:rounded-sm">
              <ShoppingCartIcon className="h-[48px]" />
              <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                  {cart}
                </div>
              </div>

              <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex bg-amazonclonelightblue text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
        <div>Today's Deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div>
    </header>
  );
};

export default Navbar;
