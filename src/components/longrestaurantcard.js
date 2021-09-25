import React from "react";

const LongRestaurantCard = ({ restaurantDetails }) => {
  return (
    <>
      <div className="bg-gray-200">
        {restaurantDetails.name + " " + restaurantDetails.city}
      </div>
      <div className="flex bg-gray-900">
        <div className="flex flex-row bg-gray-900 h-40 w-full space-x-12 mx-20  my-10">
          <div className="flex flex-row bg-blue-300">
            <img
              className="object-none w-56"
              alt=""
              src={restaurantDetails.restaurantImage}
            ></img>
          </div>
          <div className="flex flex-col">
            <div className="text-gray-200 font-semibold text-3xl">
              {restaurantDetails.name}
            </div>
            <div className="text-gray-200 font-semibold text-sm">
              {restaurantDetails.city}
            </div>
          </div>
          <div className="flex flex-col bg-blue-300">
            <div>knkfnkdv</div>
            <div>knkfnkdv</div>
            <div>knkfnkdv</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LongRestaurantCard;
