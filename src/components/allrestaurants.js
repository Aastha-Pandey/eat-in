import React, { useEffect, useState, useContext, useMemo } from "react";

import MiddleNavigationBar from "./../redux/containers/restaurantcontainer";

import RestaurantsCategory from "./../redux/containers/restaurantcontainer";
import SlidingOffers from "./slidingoffers";
import { useParams, useLocation } from "react-router-dom";
import { getTotalNumberOfRestaurants } from "./../services/ApiService";
import { UserDetailsContext } from "./../components/App";
import { Dishes } from "./../components/dishes";
import LongRestaurantCard from "./longrestaurantcard";
import { useOnScreen } from "./../components/useOnScreen";
import Overlay from "./../redux/containers/restaurantcontainer";

import Filter from "./../redux/containers/restaurantcontainer";
import TopNavigationBar from "./../redux/containers/restaurantcontainer";
import useSWR from "swr";
import {environment} from "../environment";

const basePath = environment.baseUrl;

export const AllRestaurant = (props) => {
  const paramsArray = [
    undefined,
    "Relevance",
    "Cost For Two",
    "Delivery Time",
    "Rating",
    "Filter",
  ];

  let { state } = useLocation();
  const { sortBy } = useParams();
  const [ref, visible] = useOnScreen({ threshold: 1.0 });
  const { userDetail } = useContext(UserDetailsContext);

  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [currentLabel, setCurrentLabel] = useState();

  const getRestaurantDetails = useMemo(() => {
    return restaurantDetails;
  }, [restaurantDetails]);
  const [restaurants, setRestaurants] = useState([]);

  const fetcher = (...args) =>
    fetch(
        basePath + `/gettotalnumberofrestaurants/${userDetail.city}`
    ).then((res) => res.json());
  const { data: data1 } = useSWR(
    userDetail.city ? "totalrestaurant" : null,
    fetcher
  );

  useEffect(() => {
    // getTotalNumberOfRestaurants(userDetail.city).then((data) => {
    //   props.clickFilterHandler({
    //     ...props,
    //     totalRestaurants: data.data,
    //   });
    // });

    props.clickFilterHandler({
      ...props,
      totalRestaurants: data1,
    });
  }, [props, data1]);
  useEffect(() => {
    if (state) {
      setRestaurantDetails({
        city: state.city,
        name: state.name,
        rId: state.rId,
        restaurantImage: state.rImage,
      });
    }
  }, [state]);

  return (
    <>
      {props.addressClicked ? (
        <Overlay.overlayConnect
          onExit={() => {
            props.clickFilterHandler({
              ...props,
              addressClicked: false,
            });
          }}
        ></Overlay.overlayConnect>
      ) : (
        ""
      )}
      {paramsArray.includes(sortBy) ? (
        <>
          {props.filterClicked ? (
            <Overlay.overlayConnect
              onExit={() => {
                props.clickFilterHandler({
                  ...props,
                  filterClicked: false,
                });
              }}
            >
              <Filter.filterConnect
                city={userDetail.city}
                onExit={() => {
                  props.clickFilterHandler({
                    ...props,
                    filterClicked: false,
                    filterApplyClicked: true,
                  });
                }}
                setRestaurants={setRestaurants}
                restaurants={restaurants}
                currentLabel={currentLabel}
                setCurrentLabel={setCurrentLabel}
              ></Filter.filterConnect>
            </Overlay.overlayConnect>
          ) : (
            ""
          )}
          <TopNavigationBar.topnavigationbarConnect />
          <SlidingOffers />
          <div ref={ref}>
            {" "}
            <MiddleNavigationBar.middlenavigationbarConnect visible={visible} />
          </div>

          <RestaurantsCategory.restaurantsCategoryConnect
            sortBy={sortBy}
            userDetail={userDetail}
            restaurants={restaurants}
            setRestaurants={setRestaurants}
            currentLabel={currentLabel}
          />
        </>
      ) : (
        <>
          <LongRestaurantCard restaurantDetails={getRestaurantDetails} />

          <Dishes restaurantDetails={getRestaurantDetails}></Dishes>
        </>
      )}
    </>
  );
};
