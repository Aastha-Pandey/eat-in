import React, { useMemo, useContext } from "react";
import { UserDetailsContext } from "./../components/App";

import { DishesCard } from "./../components/dishescard";
import useSWR from "swr";
import Cart from "./cart";
import {environment} from "../environment";

const basePath = environment.baseUrl;
export function Dishes({ restaurantDetails }) {
  const { userDetail } = useContext(UserDetailsContext);

  const fetcher = (...args) =>
    fetch(basePath+`/dishes/${restaurantDetails.rId}`).then((res) =>
      res.json()
    );
  const { data } = useSWR(restaurantDetails.rId ? "dish" : null, fetcher, {
    deDupingInterval: 3600000,
  });

  const getRestaurantId = useMemo(() => {
    return restaurantDetails.rId;
  }, [restaurantDetails.rId]);
  return (
    <>
      <div class="flex justify-evenly ">
        <div className=" w-full border border-l-0 border-b-0 border-t-0 border-r"></div>
        <div className=" w-full">
          {data &&
            data.map((item, i) => (
              <>
                <DishesCard
                  i={i}
                  item={item}
                  userDetail={userDetail}
                  restaurantId={getRestaurantId}
                ></DishesCard>
              </>
            ))}
        </div>

        <Cart />
      </div>
    </>
  );
}
