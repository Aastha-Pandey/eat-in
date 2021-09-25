import React, { useState, useContext } from "react";
import { SmallRestaurantCard } from "./../components/smallrestaurantcard";
import { Link } from "react-router-dom";
import { getRestaurantsByNameAndAddress } from "../services/ApiService";
import { UserDetailsContext } from "./../components/App";
import InfiniteScroll from "react-infinite-scroll-component";
const Search = () => {
  const { userDetail } = useContext(UserDetailsContext);
  const [page, setPage] = useState(0);
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantName, setRestaurantName] = useState();
  const [moreRestaurants, setMoreRestaurants] = useState(true);
  return (
    <>
      <div className="flex justify-center ">
        <div className="flex justify-between pl-20 space-x-10">
          <div
            className="flex items-center h-20 pl-8 mt-10 space-x-4 border border-gray-300 rounded"
            style={{ width: 900 }}
          >
            <div className="w-6 text-gray-800 group-hover:text-orange-400">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              className="w-full text-lg font-semibold tracking-wide outline-none Caret focus :"
              placeholder="Search For Restaurants Or Dishes"
              onChange={(event) => {
                setRestaurantName(event.target.value);
              }}
              onBlur={() => {
                getRestaurantsByNameAndAddress(
                  restaurantName,
                  userDetail.city,
                  page
                ).then((data) => {
                  setRestaurants(data.data);
                  if (data.data.length === 0) {
                    setMoreRestaurants(false);
                  }
                  if (page === 0) {
                    setMoreRestaurants(false);
                  }
                });
              }}
            ></input>
          </div>
          <Link
            to={`/restaurants`}
            className="w-16 h-20 mt-10 text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
      <InfiniteScroll
        dataLength={restaurants.length}
        next={() => setPage(page + 1)}
        hasMore={moreRestaurants}
        // loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>No more restaurants!!</b>
          </p>
        }
      >
        <div className="container grid items-center justify-center flex-grow gap-4 px-4 py-12 overflow-auto border-t border-gray-300 cursor-pointer md:grid-cols-4 ">
          {restaurants.map((item) => (
            <SmallRestaurantCard item={item} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Search;
