import React, { useState, useEffect } from "react";
import {
  getRestaurants,
  getTotalNumberOfRestaurants,
  getRestaurantByCostForTwo,
  getRestaurantByDeliveryTime,
  getRestaurantByRatings,
} from "../services/ApiService";
import { Overlay } from "./../components/overlay";
import { useParams } from "react-router-dom";
import { TopHeader } from "./topheader";
import { useOnScreen } from "./../components/useOnScreen";

import { Redirect } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllCuisines } from "../services/ApiService";
import MidNav from "./../components/midnav";
import SlidingOffers from "./../components/slidingoffers";
import RestaurantsBy from "./../components/restaurantsby";
import { Filter } from "./../components/filter";

export const CousinsFilterContext = React.createContext();

export function Restaurants() {
  const [side, setSide] = useState("right");
  const [restaurants, setRestaurants] = useState([]);
  const [ref, visible] = useOnScreen({ threshold: 1.0 });
  const [moreRestaurants, setMoreRestaurants] = useState(true);
  const [totalRestaurants, setTotalRestaurants] = useState();
  const [page, setPage] = useState(0);
  const [hasSearchBeenClicked, setHasSearchBeenClicked] = useState(false);
  const [hasMyAccountBeenClicked, setHasMyAccountBeenClicked] = useState(false);
  const [isAddressClicked, setISAddressClicked] = useState(false);
  const [filterClicked, setFilterClicked] = useState();
  const { userName, city, userId } = useParams();
  const [cousinFilterValue, setCousinFilterValue] = useState([]);

  const [active, setActive] = useState({
    Relevance: true,
    "Cost For Two": false,
    "Delivery Time": false,

    Rating: false,
    Filter: false,
  });
  const onTabClick = ({
    Relevance,
    CostForTwo,
    DeliveryTime,
    Rating,

    Filter,
  }) => {
    setActive({
      ...active,
      Relevance,
      CostForTwo,
      DeliveryTime,
      Rating,

      Filter,
    });
  };
  const showRestaurant = (x) => {
    restaurants.length = 0;
    x(city, page).then((data) => {
      setRestaurants((preState) => [...preState, ...data.data]);
      if (data.data.length === 0) {
        setMoreRestaurants(false);
      }
      if (page === 0) {
        setMoreRestaurants(false);
      }
    });
  };
  useEffect(() => {
    getAllCuisines().then((data) => {
      setCousinFilterValue(
        data.data.map((item) => ({ label: item, checked: false }))
      );
    });
  }, []);

  useEffect(() => {
    getTotalNumberOfRestaurants(city).then((data) => {
      setTotalRestaurants(data.data);
    });
    getRestaurants(city, page).then((data) => {
      setRestaurants((preState) => [...preState, ...data.data]);

      if (data.data.length === 0) {
        setMoreRestaurants(false);
      }
      if (page === 0) {
        setMoreRestaurants(false);
      }
    });
  }, [page, city]);

  return (
    <CousinsFilterContext.Provider
      value={{
        cousinFilterValue,
        setCousinFilterValue,
      }}
    >
      {hasSearchBeenClicked ? (
        <>
          <Redirect to={`/search/${userName}/${city}/${userId}`} />
        </>
      ) : (
        <></>
      )}
      {hasMyAccountBeenClicked ? (
        <>
          <Redirect to={`/my-account/${userName}/${city}/${userId}`} />
        </>
      ) : (
        <></>
      )}
      {isAddressClicked ? (
        <Overlay
          onExit={() => {
            setISAddressClicked(false);
          }}
          side={side}
        >
          {" "}
        </Overlay>
      ) : (
        ""
      )}

      {filterClicked ? (
        <Overlay
          onExit={() => {
            setFilterClicked(false);
          }}
          side={side}
        >
          <Filter
            city={city}
            onExit={() => {
              setFilterClicked(false);
            }}
            setRestaurants={setRestaurants}
            restaurants={restaurants}
            setMoreRestaurants={setMoreRestaurants}
            page={page}
          ></Filter>
        </Overlay>
      ) : (
        ""
      )}

      <TopHeader
        setSide={setSide}
        setISAddressClicked={setISAddressClicked}
        setHasSearchBeenClicked={setHasSearchBeenClicked}
        setHasMyAccountBeenClicked={setHasMyAccountBeenClicked}
        userName={userName}
        city={city}
        userId={userId}
      ></TopHeader>

      <SlidingOffers />

      <div ref={ref}>
        <MidNav
          onTabClick={onTabClick}
          totalRestaurants={totalRestaurants}
          active={active}
          getRestaurants={getRestaurants}
          getRestaurantByRatings={getRestaurantByRatings}
          getRestaurantByCostForTwo={getRestaurantByCostForTwo}
          getRestaurantByDeliveryTime={getRestaurantByDeliveryTime}
          setFilterClicked={setFilterClicked}
          visible={visible}
          showRestaurant={showRestaurant}
        ></MidNav>
      </div>
      <InfiniteScroll
        dataLength={restaurants.length}
        next={() => setPage(page + 1)}
        hasMore={moreRestaurants}
        loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>No more restaurants!!</b>
          </p>
        }
      >
        <RestaurantsBy
          restaurants={restaurants}
          userId={userId}
        ></RestaurantsBy>
      </InfiniteScroll>
    </CousinsFilterContext.Provider>
  );
}
