import React from "react";
import { Link } from "react-router-dom";
const MidNavigationBar = ({
  totalRestaurants,
  active,
  city,
  page,
  visible,
}) => {
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
              <Link
                to={`/restaurantsbyrelevance/${city}/${page}`}
                className={
                  active.Relevance
                    ? "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-900 focus:outline-none   hover:text-gray-900"
                    : "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-100 focus:outline-none  hover:text-gray-900"
                }
              >
                Relevance
              </Link>
            </div>
            <div className="flex">
              <Link
                to={`/restaurantsbycostfortwo/${city}/${page}`}
                className={
                  active.CostForTwo
                    ? "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-900 focus:outline-none   hover:text-gray-900"
                    : "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-100 focus:outline-none  hover:text-gray-900"
                }
              >
                Cost For Two
              </Link>
            </div>
            <div className="flex">
              <Link
                to={`/restaurantsbydeliverytime/${city}/${page}`}
                className={
                  active.DeliveryTime
                    ? "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-900 focus:outline-none   hover:text-gray-900"
                    : "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-100 focus:outline-none  hover:text-gray-900"
                }
              >
                Delivery Time
              </Link>
            </div>
            <div className="flex">
              <Link
                to={`/restaurantsbyrating/${city}/${page}`}
                className={
                  active.Rating
                    ? "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-900 focus:outline-none   hover:text-gray-900"
                    : "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-100 focus:outline-none  hover:text-gray-900"
                }
              >
                Rating
              </Link>
            </div>
            <div className="flex">
              <Link
                to={`/restaurantsbyfilter/${city}/${page}`}
                className={
                  active.Filter
                    ? "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-900 focus:outline-none   hover:text-gray-900"
                    : "pb-2 border border-t-0 border-l-0 border-r-0 border-gray-100 focus:outline-none  hover:text-gray-900"
                }
              >
                Filter
              </Link>
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
export default MidNavigationBar;
