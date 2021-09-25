import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import LandingPage from "./landingpage";
import { Dishes } from "./dishes";
import Search from "./search";
import Offer from "./offer";
import AllRestaurant from "../redux/containers/restaurantcontainer";
import MyAccount from "./myaccount";
import Cart from "./cart";
import Help from "./help";
import TopNavigationBar from "../redux/containers/restaurantcontainer";
import Overlay from "../redux/containers/restaurantcontainer";
import { ACCESS_TOKEN_KEY } from "../services/ApiService";


const Routing = (props) => {
  return (
    <>
      <Router basename={'/eat-in'}>
        {props.addressClicked ? (
          <Overlay.overlayConnect
            onExit={() => {
              props.clickFilterHandler({ ...props, addressClicked: false });
            }}
          ></Overlay.overlayConnect>
        ) : (
          ""
        )}
        <Switch>
          {localStorage.getItem(ACCESS_TOKEN_KEY) ? (
            <Route exact path="/">
              <Redirect to="/restaurants" />
            </Route>
          ) : (
            <Route exact path="/">
              <LandingPage />
            </Route>
          )}
          <Route exact path="/restaurants">
            <AllRestaurant.restaurantConnect />
          </Route>
          <Route path="/restaurants/:sortBy">
            <AllRestaurant.restaurantConnect />
          </Route>

          <Route>
            {localStorage.getItem(ACCESS_TOKEN_KEY) ? (
              <>
                <TopNavigationBar.topnavigationbarConnect />

                <Route exact path="/support">
                  <Help />
                </Route>
                <Route exact path="/checkout">
                  <Cart />
                </Route>
                <Route exact path="/my-account">
                  <MyAccount />
                </Route>
                <Route exact path="/my-account/:tab">
                  <MyAccount />
                </Route>
                <Route exact path="/search">
                  <Search />
                </Route>
                <Route exact path="/offers/restaurant">
                  <Offer />
                </Route>
              </>
            ) : (
              <>
                <Redirect to="/"></Redirect>
              </>
            )}
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routing;
