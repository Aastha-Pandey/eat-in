import React, { useContext } from "react";
import { UserDetailsContext } from "./../components/App";
import useSWR from "swr";
import { deleteCartItems, placeOrder } from "./../services/ApiService";
import { CartCard } from "./../components/cartcard";
import {environment} from "../environment";

const basePath = environment.baseUrl;
const Cart = () => {
  const { userDetail } = useContext(UserDetailsContext);
  const fetcher = (...args) =>
    fetch(
        basePath+ `/getcartitems/${userDetail.userId}`
    ).then((res) => res.json());
  const { data } = useSWR("cart", fetcher, { refreshInterval: 100 });
  const totalfetcher = (...args) =>
    fetch(basePath+ `/gettotal/${userDetail.userId}`).then((res) =>
      res.json()
    );
  const { total } = useSWR("totalfetch", totalfetcher);

  return (
    <div className="flex flex-col w-1/4 ">
      {!data ? (
        <>loading...</>
      ) : (
        <>
          {data.length !== 0 && (
            <>
              <div className="text-3xl font-bold text-gray-800">Cart</div>
              <div className="text-gray-700 text-sm">2 ITEMS</div>
            </>
          )}

          {data.map((item) => (
            <>
              <CartCard item={item} total={total}></CartCard>
            </>
          ))}
        </>
      )}

      {!data || data.length === 0 ? (
        <div className="flex flex-col pt-6 space-y-6 w-full">
          <div className="text-3xl font-bold text-gray-600 text-center">
            Cart Empty
          </div>
          <img
            alt=""
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
            className="object-contain w-1/2 self-center"
          ></img>
          <div className="self-center">
            Good food is always cooking! Go ahead, order some yummy items from
            the menu.
          </div>
        </div>
      ) : (
        <>
          <div className="text-xl font-bold text-gray-800">Subtotal</div>
          <div className="text-sm text-gray-600 pb-6">
            Extra charges may apply
          </div>
          <button
            className="bg-green-500 text-white font-bold w-full py-4 px-2"
            onClick={(_) => {
              data.map(
                (item) => (
                  placeOrder(
                    item.restaurant_dishDTO.id,
                    userDetail.userId,
                    item.portion
                  ),
                  deleteCartItems(item.id)
                )
              );
            }}
          >
            CHECKOUT
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
