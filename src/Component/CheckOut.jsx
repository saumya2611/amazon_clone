import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProducDetails from "./ProducDetails";
import { GB_CURRENCY } from "../Utils/constant";

const CheckOut = () => {
  const products = useSelector((state) => {
    return state.cart.products;
  });

  return (
    <div className="h-screen bg-slate-200">
      <div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
        <div className="grid grid-cols-8 bg-white gap-10">
          {/* Product */}
          <div className="col-span-6">
            <div className="text-2xl xl:text-3xl m-4">Shopping Cart</div>
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <div className="grid grid-cols-12 divide-y divide-gray-400 mr-4">
                    <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
                      <div className="col-span-2">
                        <Link to={`/product/${product.id}`}>
                          <img
                            className="p-4 m-auto"
                            src={product.image_small}
                          />
                        </Link>
                      </div>
                      <div className="col-span-6">
                        <div className="font-medium text-black mt-2">
                          <Link to={`/product/${product.id}`}>
                            <ProducDetails product={product} ratings={false} />
                          </Link>
                        </div>

                        <div>
                          <button>Delete</button>
                        </div>
                        <div className="grid grid-cols-3 w-20 text-center">
                          <div className="text-xl xl:text-2xl  bg-gray-400  rounded">
                            -
                          </div>
                          <div className="text-lg xl:text-xl  bg-gray-200 ">
                            {product.quantity}
                          </div>
                          <div className="text-xl xl:text-2xl bg-gray-400  rounded">
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-lg xl:text:xl mt-2 mr-4 font-semibold">
                        {GB_CURRENCY.format(product.price)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="text-lg xl:text:xl text-right mb-4 mr-4">
              Subtotal (items) : <span className="font-semibold">0</span>
            </div>
          </div>
          {/* CheckOut */}
          <div className="col-span-2 bg-white rounded h-[250px]"></div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
