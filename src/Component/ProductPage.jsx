import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { callApi } from "../Utils/CallApi";
import ProducDetails from "./ProducDetails";
import { GB_CURRENCY } from "../Utils/constant";

const ProductPage = () => {
  const { id } = useParams();
  console.log("id ======================>", id);

  const [product, setProduct] = useState(null);

  const getProduct = () => {
    callApi(`data/products.json`).then((productResults) => {
      console.log("productResults============>", productResults);
      console.log("id=========>", id);

      setProduct(productResults[id]);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product?.title) return <h1>Loading Product ...</h1>;

  return (
    product && (
      <div className="h-screen bg-slate-200">
        <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
          <div className="grid grid-cols-10 gap-2">
            <div className="col-span-3 py-8 px-[4.5rem]  rounded bg-white m-auto">
              <img src={`${product.image}`} />
            </div>
            {/* Middle */}
            <div className="col-span-5  bg-white rounded  p-4 divide-y">
              <div className="mb-3">
                <ProducDetails product={product} ratings={true} />
              </div>
              <div className="text-base xl:text-lg mt-3">
                {product.description}
              </div>
            </div>
            {/* Right */}
            <div className="col-span-2 p-4 rounded bg-white">
              <div className="text-xl xl:text-2xl font-semibold text-red-700 text-right">
                {GB_CURRENCY.format(product.price)}
              </div>
              <div className="text-base xl:text-lg font-semibold text-gray-500 text-right">
                RRP:
                <span className="line-through">
                  {GB_CURRENCY.format(product.oldPrice)}
                </span>
              </div>
              <div className="text-sm xl:text-base font-semibold text-blue-500 mt-3">
                FREE Returns
              </div>
              <div className="text-sm xl:text-base font-semibold text-blue-500 mt-1">
                FREE Delivery
              </div>
              <div className="text-sm xl:text-lg font-semibold text-green-700 mt-1">
                In Stock
              </div>
              <div className="text-sm xl:text-lg mt-1">
                Quantity:
                <select className="px-2 py-1 bg-white border rounded-md focus:border-indigo-600 ml-2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <button className="bg-yellow-400 w-full p-3 text-xs xl:text-sm rounded hover:bg-yellow-500 mt-3">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
