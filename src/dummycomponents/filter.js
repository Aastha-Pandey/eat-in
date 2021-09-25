import React from "react";

import { getRestaurantsByCuisine } from "../services/ApiService";
import Checkbox from "./../components/checkbox";
import { useContext } from "react";
import { CousinsFilterContext } from "./../components/restaurants";

export function Filter({
  city,

  onExit,
  setRestaurants,
  restaurants,
  setMoreRestaurants,
  page,
}) {
  const { cousinFilterValue, setCousinFilterValue } = useContext(
    CousinsFilterContext
  );

  return (
    <>
      <div className="flex space-x-2">
        <div className="flex flex-col space-y-4">
          <Checkbox
            arr={cousinFilterValue}
            onChange={(event) => setCousinFilterValue(event)}
          />
        </div>
      </div>

      <button
        className="bg-green-400"
        onClick={() => {
          restaurants.length = 0;

          getRestaurantsByCuisine(
            city,
            cousinFilterValue.map((i) => {
              if (i.checked) {
                return i.label;
              }
            }),
            page
          ).then((data) => {
            setRestaurants((preState) => [...preState, ...data.data]);
            if (data.data.length === 0) {
              setMoreRestaurants(false);
            }
            if (page === 0) {
              setMoreRestaurants(false);
            }
          });

          onExit();
        }}
      >
        Apply
      </button>
      <button
        className="bg-red-400"
        onClick={() => {
          setCousinFilterValue(
            cousinFilterValue.map((item) => ({
              label: item.label,
              checked: false,
            }))
          );
        }}
      >
        Clear all
      </button>
    </>
  );
}
