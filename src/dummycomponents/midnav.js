import React from "react";

const MidNav = ({
  onTabClick,
  totalRestaurants,
  active,

  getRestaurants,
  getRestaurantByRatings,

  getRestaurantByCostForTwo,
  getRestaurantByDeliveryTime,
  setFilterClicked,
  showRestaurant,
  visible,
}) => {
  const arr = [
    getRestaurants,
    getRestaurantByCostForTwo,
    getRestaurantByDeliveryTime,
    getRestaurantByRatings,
  ];

  return (
    <>
      <nav
        className={
          visible
            ? "flex flex-wrap justify-around h-20 bg-white sm:flex-col md:flex-row"
            : "fixed top-0 z-40 flex flex-wrap justify-around w-screen h-20 bg-white sm:flex-col md:flex-row"
        }
      >
        <div className="flex flex-wrap items-end space-x-48 sm:flex-col md:flex-row">
          <div className="flex pr-64 space-x-8 text-3xl font-bold text-gray-900">
            {totalRestaurants} restaurants
          </div>

          <div className="flex items-end space-x-12 font-normal text-gray-600 cursor-pointer text-md">
            <div className="flex">
              <button
                className={
                  active.Relevance
                    ? "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-900 focus:outline-none   hover:text-gray-900"
                    : "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-100 focus:outline-none  hover:text-gray-900"
                }
                onClick={(_) => {
                  onTabClick({ Relevance: true });
                  showRestaurant(arr[0]);
                }}
              >
                Relevance
              </button>
            </div>
            <div className="flex">
              <button
                className={
                  active.CostForTwo
                    ? "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-900 focus:outline-none   hover:text-gray-900"
                    : "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-100 focus:outline-none  hover:text-gray-900"
                }
                onClick={(_) => {
                  onTabClick({ CostForTwo: true });
                  showRestaurant(arr[1]);
                }}
              >
                Cost For Two
              </button>
            </div>
            <div className="flex">
              <button
                className={
                  active.DeliveryTime
                    ? "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-900 focus:outline-none   hover:text-gray-900"
                    : "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-100 focus:outline-none  hover:text-gray-900"
                }
                onClick={(_) => {
                  onTabClick({ DeliveryTime: true });
                  showRestaurant(arr[2]);
                }}
              >
                Delivery Time
              </button>
            </div>
            <div className="flex">
              <button
                className={
                  active.Rating
                    ? "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-900 focus:outline-none   hover:text-gray-900"
                    : "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-100 focus:outline-none  hover:text-gray-900"
                }
                onClick={(_) => {
                  onTabClick({ Rating: true });
                  showRestaurant(arr[3]);
                }}
              >
                Rating
              </button>
            </div>
            <div className="flex">
              <button
                className={
                  active.Filter
                    ? "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-900 focus:outline-none   hover:text-gray-900"
                    : "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-100 focus:outline-none  hover:text-gray-900"
                }
                onClick={() => {
                  onTabClick({ Filter: true });

                  setFilterClicked(true);
                }}
              >
                Filters
              </button>
              <div className="w-4 text-orange-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default MidNav;
