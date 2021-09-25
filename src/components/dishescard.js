import React, { useState } from "react";
import PlusMinusButton from "./../components/plusminusbutton";
import {
  addDishesToTheCart,
  updatePortion,
  deleteCartItems,
  getRestaurantdishId,
} from "./../services/ApiService";
import { mutate } from "swr";
import { UserDetailsContext } from "./App";
export function DishesCard(props) {
  let [count, setCount] = useState(1);
  let {
    cartItem,
    setCartItem,
    addClicked,
    setAddClicked,
    cartId,
    setCartId,
  } = React.useContext(UserDetailsContext);

  const onPlusButtonClick = () => {
    setCount(++count);
    mutate("cart");
    if (count !== 0) {
      updatePortion(cartId, count);
      mutate("cart");
    }
  };
  const onMinusButtonClick = () => {
    if (count === 1) {
      deleteCartItems(cartId);

      setCount(1);

      setAddClicked((addClicked[props.i] = false));
      setAddClicked(() => [...addClicked]);

      setCartItem(cartItem - 1);
    } else if (count > 1) {
      setCount(--count);
    } else {
      deleteCartItems(cartId);

      setAddClicked((addClicked[props.i] = false));
      setAddClicked(() => [...addClicked]);

      setCartItem(cartItem - 1);
    }
    if (count !== 0) {
      updatePortion(cartId, count);
      mutate("cart");
    }
  };

  return (
    <>
      <div>
        <div className="flex justify-between border-b border-gray-400 mx-4 py-6">
          <div>
            <p className=" font-bold text-gray-800 self-center">
              {" "}
              {props.item.name}
            </p>
            <p className="text-sm text-gray-600"> {props.item.price} </p>
          </div>
          <div className=" flex relative w-40 h-32 ">
            <img
              alt="food"
              className=" rounded-lg object-cover absolute inset-0"
              src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            ></img>
            {addClicked[props.i] ? (
              <>
                <PlusMinusButton
                  count={count}
                  onPlusButtonClick={onPlusButtonClick}
                  onMinusButtonClick={onMinusButtonClick}
                  position="absolute inset-x-0 bottom-0 mx-8 z-10"
                ></PlusMinusButton>
              </>
            ) : (
              <>
                <button
                  className="bg-white border border-green-700 focus:outline-none
            text-green-600 font-extrabold text-xs 
            tracking-wide absolute inset-x-0 bottom-0 mx-8 w-24 h-8"
                  onClick={() => {
                    setAddClicked((addClicked[props.i] = true));
                    setAddClicked(() => [...addClicked]);
                    setCartItem(cartItem + 1);

                    if (count !== 0) {
                      var getRestaurantIdAndAddIoToTheCart = async () => {
                        addDishesToTheCart(
                          await (
                            await getRestaurantdishId(
                              props.restaurantId,
                              props.item.id
                            )
                          ).data[0].id,
                          props.userDetail.userId,
                          count
                        ).then((data) => {
                          setCartId(data.data);
                        });
                      };
                      getRestaurantIdAndAddIoToTheCart();
                      mutate("cart");
                    }
                  }}
                >
                  ADD
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
