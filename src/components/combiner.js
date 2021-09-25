import React from "react";
import Routing from "./../redux/containers/restaurantcontainer";

const Combiner = () => {
  return (
    <>
      <Routing.routingConnect />
    </>
  );
};

export default Combiner;
