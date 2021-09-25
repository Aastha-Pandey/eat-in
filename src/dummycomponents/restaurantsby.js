import React from "react";
import { Card } from "./../components/card";
const RestaurantsBy = ({ restaurants, userId }) => {
  return (
    <div className="z-40 flex flex-col items-center">
      <div className="container grid items-center justify-center flex-grow gap-4 px-4 py-12 overflow-auto border-t border-gray-300 cursor-pointer md:grid-cols-4 ">
        {restaurants.map((item) => (
          <Card item={item} userId={userId}></Card>
        ))}
      </div>
    </div>
  );
};

export default RestaurantsBy;
