import React from "react";

const TabButton = ({ active, onTabClick, showRestaurant, arr }) => {
  console.log(active);

  return (
    <>
      {Object.keys(active).map((key, i) => (
        <div className="flex ">
          <button
            className={
              active.key
                ? "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-900 focus:outline-none   hover:text-gray-900"
                : "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-100 focus:outline-none  hover:text-gray-900"
            }
            onClick={(_) => {
              onTabClick({ key: true });
              showRestaurant(arr[0]);
            }}
          >
            {key}
          </button>
        </div>
      ))}
    </>
  );
};
export default TabButton;
