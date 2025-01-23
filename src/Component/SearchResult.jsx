import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { callApi } from "../Utils/CallApi";

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
    <div className="min-w-[1200px] max-w-[1300px] m-auto">
      {product &&
        product.map((item, key) => {
          return (
            <div key={key}>
              <p>{item.title}</p>
              {/* <p>{item.brand}</p>
              <img src={item.image} alt={item.image} /> */}
            </div>
          );
        })}
    </div>
  );
};

export default SearchResult;
