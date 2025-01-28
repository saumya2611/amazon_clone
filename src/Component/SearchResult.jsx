import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { callApi } from "../Utils/CallApi";
import ProducDetails from "./ProducDetails";
import { GB_CURRENCY } from "../Utils/constant";

// import callApi from "../Utils/CallApi";
// import GB_CURRENCY from "../Utils/constant";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState(null);

  const getSearchResults = () => {
    const searchterm = searchParams.get("searchterm");
    console.log("searchterm=================>", searchterm);

    const category = searchParams.get("category");
    console.log("category=================>", category);

    callApi(`data/search.json`).then((searchResults) => {
      console.log("searchResults==========>", searchResults);

      const categoryResult = searchResults[category];
      console.log("categoryResult==========>", categoryResult);

      if (searchterm) {
        const result = categoryResult.filter((product) => {
          return product.title
            .toLowerCase()
            .includes(searchterm.toLocaleLowerCase());
        });
        setProduct(result);
      } else {
        setProduct(categoryResult);
      }
    });
  };

  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  return (
    <div className="min-w-[1200px] max-w-[1300px] m-auto pt-4">
      {product &&
        product.map((item, key) => {
          return (
            <Link key={key} to={`/product/${item.id}`}>
              <div className="h-[250px]  grid grid-cols-12 rounded mt-1 ">
                <div className="col-span-2 p-4 bg-gray-200">
                  <img className="m-autos" src={item.image_small} />
                </div>
                <div className="col-span-10 bg-gray-50 border-gray-100 hover:bg-gray-100">
                  <div className="font-medium text-black p-2">
                    <ProducDetails product={item} ratings={true} />
                    <div className="text-xl xl:text-2xl pt-1">
                      {GB_CURRENCY.format(item.price)}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default SearchResult;
