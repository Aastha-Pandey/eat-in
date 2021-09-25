import React, { useEffect, useContext, useRef, useState } from "react";
import { UserDetailsContext } from "./../components/App";
import { SmallRestaurantCard } from "./../components/smallrestaurantcard";
import { getRestaurants } from "../services/ApiService";
import InfiniteScroll from "react-infinite-scroll-component";
import { getRestaurantsByCuisine } from "../services/ApiService";
const RestaurantsCategory = ({
  sortBy,

  pageNumber,
  restaurants,
  setRestaurants,
  clickFilterHandler,
  moreRestaurants,
  totalRestaurants,
  filterClicked,
  addressClicked,
  overlayDirection,
  filterApplyClicked,
  currentLabel,
}) => {
  const { userDetail } = useContext(UserDetailsContext);
  const { cousinFilterValue } = useContext(UserDetailsContext);

  function usePrevious(value) {
    const ref = useRef(value);
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  if (sortBy === undefined) {
    sortBy = "Relevance";
  }
  const previousSortBy = usePrevious(sortBy);

  const previousLabel = usePrevious(currentLabel);
  useEffect(() => {
    if (previousLabel !== undefined && previousLabel !== currentLabel) {
      restaurants.length = 0;
      clickFilterHandler({
        pageNumber: 0,
        totalRestaurants,
        filterApplyClicked,
        filterClicked,
        addressClicked,
        overlayDirection,
        moreRestaurants: true,
      });
    }
  }, [currentLabel]);
  useEffect(() => {
    if (filterApplyClicked) {
      getRestaurantsByCuisine(
        userDetail.city,
        cousinFilterValue.map((i) => {
          if (i.checked) {
            return i.label;
          }
        }),
        pageNumber
      ).then(({ data }) => {
        if (data.length === 0) {
          clickFilterHandler({
            pageNumber,
            totalRestaurants,
            filterApplyClicked,
            addressClicked,
            overlayDirection,
            filterClicked: false,
            moreRestaurants: false,
          });
        }
        setRestaurants((preState) => [...preState, ...data]);
      });
    }
  }, [pageNumber]);
  useEffect(() => {
    getRestaurants(userDetail.city, pageNumber, sortBy).then(({ data }) => {
      if (data.length === 0 && sortBy !== "Filter") {
        clickFilterHandler({
          pageNumber,
          filterApplyClicked,
          totalRestaurants,
          filterClicked,
          addressClicked,
          overlayDirection,
          moreRestaurants: false,
        });
      }
      setRestaurants((preState) => [...preState, ...data]);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, userDetail.city]);
  useEffect(() => {
    if (previousSortBy !== sortBy) {
      console.log(
        "inside if of third useeffect",
        filterApplyClicked,
        pageNumber
      );
      restaurants.length = 0;
      clickFilterHandler({
        pageNumber: 0,
        totalRestaurants,
        filterApplyClicked: false,
        filterClicked,
        addressClicked,
        overlayDirection,
        moreRestaurants: true,
      });
    }
  }, [sortBy]);
  return (
    <>
      <InfiniteScroll
        dataLength={restaurants.length}
        next={() =>
          clickFilterHandler({
            totalRestaurants,
            filterClicked,
            addressClicked,
            filterApplyClicked,
            overlayDirection,
            moreRestaurants,
            pageNumber: pageNumber + 1,
          })
        }
        hasMore={moreRestaurants}
        loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>No more restaurants!!</b>
          </p>
        }
      >
        <div className="z-40 flex flex-col items-center">
          <div className="container grid items-center justify-center flex-grow gap-4 px-4 py-12 overflow-auto border-t border-gray-300 cursor-pointer md:grid-cols-4 ">
            {restaurants.map((item) => (
              <SmallRestaurantCard item={item} />
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default RestaurantsCategory;
