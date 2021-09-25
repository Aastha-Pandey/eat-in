import React, { useState, useEffect, useRef } from "react";

import { getRestaurantsByCuisine } from "../services/ApiService";
import Checkbox from "./../components/checkbox";
import { useContext } from "react";

import { UserDetailsContext } from "./../components/App";
function Filter(props) {
  const { cousinFilterValue, setCousinFilterValue } = useContext(
    UserDetailsContext
  );

  return (
    <>
      <div className="flex space-x-2 ">
        <div className="flex flex-col space-y-4 ">
          <Checkbox
            arr={cousinFilterValue}
            onChange={(event) => setCousinFilterValue(event)}
          />
        </div>
      </div>

      <button
        className="bg-green-400"
        onClick={() => {
          getRestaurantsByCuisine(
            props.city,
            cousinFilterValue.map((i) => {
              if (i.checked) {
                props.setCurrentLabel(i.label);
                return i.label;
              }
            }),
            props.pageNumber
          ).then(({ data }) => {
            if (data.length === 0) {
              props.clickFilterHandler({
                ...props,
                filterClicked: false,
                moreRestaurants: false,
              });
            }
            props.setRestaurants((preState) => [...preState, ...data]);
          });

          props.clickFilterHandler({
            filterApplyClicked: true,
          });

          props.onExit();
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
export default Filter;
