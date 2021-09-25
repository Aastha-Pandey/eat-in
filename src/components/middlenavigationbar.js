import React, { useState } from "react";

import MiddleNavigationTab from "./../redux/containers/restaurantcontainer";
const MiddleNavigationBar = (props) => {
  const [category] = useState([
    "Relevance",
    "Cost For Two",
    "Delivery Time",
    "Rating",
    "Filter",
  ]);

  return (
    <>
      <nav
        className={
          props.visible
            ? "flex flex-wrap justify-around h-20 bg-white sm:flex-col md:flex-row"
            : "fixed top-0 z-40 flex flex-wrap justify-around w-screen h-20 bg-white sm:flex-col md:flex-row"
        }
      >
        <div className="flex flex-wrap items-end space-x-48 sm:flex-col md:flex-row">
          <div className="flex pr-64 space-x-8 text-3xl font-bold text-gray-900">
            {props.totalRestaurants} restaurants
          </div>

          <div className="flex items-end space-x-12 font-normal text-gray-600 cursor-pointer text-md">
            {category.map((item) => (
              <MiddleNavigationTab.middlenavigationtabConnect item={item} />
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};
export default MiddleNavigationBar;
