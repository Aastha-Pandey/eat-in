import React, { useState, useEffect } from "react";
import PlusMinusButton from "./../components/plusminusbutton";
import {
  addDishesToTheCart,
  updatePortion,
  deleteCartItems,
  getRestaurantdishId,
} from "./../services/ApiService";

export function DishesCard(props) {
  let [count, setCount] = useState(1);
  const [cartId, setCartId] = useState();
  const [addClicked, setAddClicked] = useState();
  const onPlusButtonClick = () => {
    setCount(++count);

    if (count !== 0) {
      updatePortion(cartId, count);
    }
  };
  const onMinusButtonClick = () => {
    if (count == 1) {
      deleteCartItems(cartId);
      setCount(1);
      setAddClicked(false);
    } else if (count > 1) {
      setCount(--count);
    } else {
      deleteCartItems(cartId);
      setAddClicked(false);
    }
    if (count !== 0) {
      updatePortion(cartId, count);
    }
  };

  return (
    <>
      <div>
        <p className="pt-4 font-bold text-gray-800"> {props.item.name}</p>
        <p className="text-sm text-gray-600"> {props.item.price} </p>

        {addClicked ? (
          <>
            <PlusMinusButton
              count={count}
              onPlusButtonClick={onPlusButtonClick}
              onMinusButtonClick={onMinusButtonClick}
            ></PlusMinusButton>
          </>
        ) : (
          <>
            <button
              className="bg-orange-400 w-10"
              onClick={() => {
                setAddClicked(true);

                if (count !== 0) {
                  var getRestaurantIdAndAddIoToTheCart = async () => {
                    addDishesToTheCart(
                      await (
                        await getRestaurantdishId(
                          props.restaurantId,
                          props.item.id
                        )
                      ).data[0].id,
                      props.userId,
                      count
                    ).then((data) => {
                      setCartId(data.data);
                    });
                  };
                  getRestaurantIdAndAddIoToTheCart();
                }
              }}
            >
              ADD
            </button>
          </>
        )}
      </div>
    </>
  );
}
