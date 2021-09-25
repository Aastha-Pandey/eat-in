import React, { useState } from "react";
import { updatePortion, deleteCartItems } from "./../services/ApiService";
import PlusMinusButton from "./../components/plusminusbutton";
import { UserDetailsContext } from "./App";
import { mutate } from "swr";
export function CartCard(props) {
  let [count, setCount] = useState(props.item.portion);

  let { cartItem, setCartItem } = React.useContext(UserDetailsContext);
  const onPlusButtonClick = () => {
    setCount(++count);
    mutate("cart");
    if (count !== 0) {
      updatePortion(props.item.id, count);
    }
  };
  const onMinusButtonClick = () => {
    mutate("cart");
    if (count === 1) {
      deleteCartItems(props.item.id);
      setCartItem(cartItem - 1);
    } else {
      if (count > 1) {
        setCount(--count);
        setCartItem(cartItem - 1);
      } else {
        deleteCartItems(props.item.id);
        setCartItem(cartItem - 1);
      }
    }

    if (count !== 0) {
      updatePortion(props.item.id, count);
      setCartItem(cartItem - 1);
    }
  };
  return (
    <>
      <div className="pt-5 pb-3">
        <div className="flex justify-between space-y-4 w-full ">
          <div className="self-center">
            {props.item.restaurant_dishDTO.dish.name}
          </div>
          <div className="flex space-x-4">
            <PlusMinusButton
              position=""
              count={props.item.portion}
              onPlusButtonClick={onPlusButtonClick}
              onMinusButtonClick={onMinusButtonClick}
            ></PlusMinusButton>
            <div>
              {props.item.restaurant_dishDTO.dish.price * props.item.portion}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
