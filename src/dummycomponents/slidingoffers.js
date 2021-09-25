import React from "react";

const SlidingOffers = () => (
  <div className="flex justify-center bg-gray-900">
    <div className="container flex items-center justify-around flex-grow p-24 py-12 space-x-12 overflow-auto cursor-pointer">
      {[1, 2, 3, 4].map(() => (
        <img
          alt=""
          className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ... h-64 w-64 object-cover"
          src="https://images.unsplash.com/photo-1569305742770-88d302404a63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        ></img>
      ))}
    </div>
  </div>
);

export default SlidingOffers;
