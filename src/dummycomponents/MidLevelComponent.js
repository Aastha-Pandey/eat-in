import React from "react";
import { Restaurants } from "./../components/restaurants";
import { OverlayLeft } from "./../components/overlayleft";

import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Search } from "./../components/search";
import { DummyUser } from "./../components/dummyuser";
import { LandingPage } from "./../components/landingpage";
import { Cart } from "./../components/cart";
import { Dishes } from "./../components/dishes";
import { TopHeader } from "./../components/topheader";

export function MiddleLevelComponent() {
  const [isAddressClicked, setISAddressClicked] = useState(false);

  return (
    <>
      <Router>
        {isAddressClicked ? (
          <OverlayLeft
            onExit={() => {
              setISAddressClicked(false);
            }}
          >
            {" "}
          </OverlayLeft>
        ) : (
          ""
        )}

        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route path="/">
            {/* <TopHeader /> */}
            <Route exact path="/search/:userName/:city/:userId">
              <Search></Search>
            </Route>

            <Route exact path="/my-account/:userName/:city/:userId">
              <DummyUser />
            </Route>

            <Route exact path="/restaurants/:userName/:city/:userId">
              <Restaurants></Restaurants>
            </Route>
            <Route exact path="/dishes/:restaurantId/:userId">
              <Dishes></Dishes>
            </Route>
            <Route exact path="/cart/:userId">
              <Cart></Cart>
            </Route>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
