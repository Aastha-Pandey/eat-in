import React, { useState, useEffect } from "react";
import {
  getCartItems,
  getTotal,
  deleteCartItems,
  placeOrder,
} from "./../services/ApiService";
import { CartCard } from "./../components/cartcard";

import { useParams } from "react-router-dom";

export function Cart() {
  const { userId } = useParams();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState();
  const [cartStatus, setCartStatus] = useState();

  useEffect(() => {
    getCartItems(userId).then((data) => {
      setCartItems(data.data);
      getTotal(userId).then((data) => {
        setTotal(data.data);
      });
    });
  }, []);

  return (
    <>
      <div>
        {cartItems.map((item) => (
          <>
            <CartCard
              item={item}
              total={total}
              cartStatus={cartStatus}
              setCartStatus={setCartStatus}
            ></CartCard>
          </>
        ))}
      </div>

      {cartItems.length === 0 || cartStatus ? (
        <>Cart is empty!!!!</>
      ) : (
        <>
          <button
            className="bg-green-500 mt-4 ml-4"
            onClick={(_) => {
              cartItems.map(
                (item) => (
                  placeOrder(item.restaurant_dishDTO.id, userId, item.portion),
                  deleteCartItems(item.id),
                  getCartItems(userId).then((data) => {
                    setCartItems(data.data);
                  })
                )
              );
            }}
          >
            Place Order
          </button>
        </>
      )}
    </>
  );
}
