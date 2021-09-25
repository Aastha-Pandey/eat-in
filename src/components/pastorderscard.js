import React from "react";

export function PastOrdersCard(props) {
  var dateString = props.item.date;
  dateString = new Date(dateString).toUTCString();
  dateString = dateString.split(" ").slice(0, 5).join(" ");

  return (
    <>
      <div className=" py-6  ">
        <div class="flex  border border-gray-400 h-full py-10 px-6 w-full ">
          <div class="flex flex-col divide-y divide-gray-600  divide-dotted h-full w-full space-y-4">
            <div className="flex">
              <img
                alt="restaurantimage"
                src={`${props.item.restaurant_dishDTO.restaurant.image}`}
                className="h-24 w-48 object-cover"
              />
              <div className="flex h-full  w-full justify-between pl-4">
                <div className="flex flex-col space-y-1">
                  <div className="font-bold text-gray-800">
                    {props.item.restaurant_dishDTO.restaurant.name}
                  </div>
                  <div className="text-xs text-gray-700">
                    {props.item.restaurant_dishDTO.restaurant.city}
                  </div>
                  <div className="text-xs text-gray-700">
                    ORDER {props.item.id}
                  </div>
                  <button className="text-xs text-orange-500 font-extrabold tracking-wide">
                    VIEW DETAILS
                  </button>
                </div>

                <div className="text-xs text-gray-700">
                  Delivered on {String(dateString)}
                </div>
              </div>
            </div>

            <div className="flex  justify-between pt-4">
              <div className="flex flex-col  space-y-4 ">
                <div className="">
                  {props.item.restaurant_dishDTO.dish.name} x{" "}
                  {props.item.portion}
                </div>
                <div className="flex space-x-4">
                  <button
                    className="bg-orange-500 text-white font-semibold 
                 hover:shadow-sm
                  tracking-wide py-1 px-6"
                  >
                    REORDER
                  </button>
                  <button className="text-orange-500 hover:shadow-sm font-semibold tracking-wide py-1 px-6 border border-orange-500">
                    HELP
                  </button>
                </div>
              </div>
              <div className="text-sm text-gray-700">
                Total paid :
                {props.item.restaurant_dishDTO.dish.price * props.item.portion}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
