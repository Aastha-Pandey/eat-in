import React, { useState } from "react";
import {
  updatePortion,
  deleteCartItems,
  getCartItems,
} from "./../services/ApiService";
import PlusMinusButton from "./../components/plusminusbutton";
export function CartCard(props) {
  let [count, setCount] = useState(props.item.portion);

  const onPlusButtonClick = () => {
    setCount(++count);
    if (count !== 0) {
      updatePortion(props.item.id, count);
    }
  };
  const onMinusButtonClick = () => {
    if (count == 1) {
      deleteCartItems(props.item.id);

      props.setCartStatus("Cart is Empty");
    } else {
      if (count > 1) {
        setCount(--count);
      } else {
        deleteCartItems(props.item.id);
        props.setCartStatus("Cart is Empty");
      }
    }

    if (count !== 0) {
      updatePortion(props.item.id, count);
    }
  };
  return (
    <>
      <div>
        {props.cartStatus ? (
          <></>
        ) : (
          <>
            <p className="pt-4 font-bold text-gray-800">
              {" "}
              {props.item.restaurant_dishDTO.dish.name}
            </p>
            <p className="text-sm text-gray-600">
              {props.item.portion} x{props.item.restaurant_dishDTO.dish.price}{" "}
            </p>
            <PlusMinusButton
              count={count}
              onPlusButtonClick={onPlusButtonClick}
              onMinusButtonClick={onMinusButtonClick}
            ></PlusMinusButton>
          </>
        )}
        <></>
      </div>
    </>
  );
}
