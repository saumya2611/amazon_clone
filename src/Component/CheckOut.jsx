import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProducDetails from "./ProducDetails";
import { GB_CURRENCY } from "../Utils/constant";
import { removeFromCart } from "../Redux/cartSlice";
import { increment, decrement } from "../Redux/cartSlice";

const CheckOut = () => {
  const products = useSelector((state) => {
    return state.cart.products;
  });

  console.log("products:", products);

  const itemsNumber = useSelector((state) => state.cart.productNumber);
  console.log("itemsNumber===========>", itemsNumber);

  const dispatch = useDispatch();

  const subtotal = useSelector((state) => {
    return state.cart.products.reduce(
      (subtotal, product) => subtotal + product.price * product.quantity,
      0
    );
  });

  return (
    <div className="h-screen bg-slate-200">
      <div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
        <div className="grid grid-cols-8  gap-10">
          {/* Product */}
          <div className="col-span-6 bg-white">
            <div className="text-2xl xl:text-3xl m-4">Shopping Cart</div>
            {products.length ? (
              products.map((product) => {
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
                              <ProducDetails
                                product={product}
                                ratings={false}
                              />
                            </Link>
                          </div>

                          <div>
                            <button
                              className="text-sm xl:text-base font-semibold rounded text-blue-500 mt-2 mb-1"
                              onClick={() =>
                                dispatch(removeFromCart(product.id))
                              }
                            >
                              Delete
                            </button>
                          </div>
                          <div className="grid grid-cols-3 w-20 text-center">
                            <div className="text-xl xl:text-2xl  bg-gray-400  rounded">
                              <button
                                onClick={() => dispatch(decrement(product.id))}
                              >
                                -
                              </button>
                            </div>
                            <div className="text-lg xl:text-xl  bg-gray-200 ">
                              {product.quantity}
                            </div>
                            <div className="text-xl xl:text-2xl bg-gray-400  rounded">
                              <button
                                onClick={() => dispatch(increment(product.id))}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-lg xl:text-xl mt-2 mr-4 font-semibold">
                          {GB_CURRENCY.format(product.price)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              // <div className="flex items-center justify-center bg-gray-50">
              //   <img src="./images/cartEmpty.png" />
              // </div>
            )}

            {itemsNumber ? (
              <div className="text-lg xl:text:xl text-right mb-4 mr-4">
                Subtotal ({itemsNumber} items) :
                <span className="font-semibold">
                  {GB_CURRENCY.format(subtotal)}
                </span>
              </div>
            ) : null}
          </div>
          {/* CheckOut */}
          <div className="col-span-2 bg-white rounded h-[250px] p-7">
            <div className="text-xs xl:text-sm text-green-800 mb-2">
              Your order qualifies for{" "}
              <span className="font-bold">FREE DELIVERY</span>. Delivery Details
            </div>
            <div className="text-base xl:text-lg mb-4">
              Subtotal ({itemsNumber} items) :
              <span className="font-semibold">
                {GB_CURRENCY.format(subtotal)}
              </span>
            </div>
            <button className="btn">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
