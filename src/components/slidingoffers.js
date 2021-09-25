import React from "react";
import Carousel from "react-elastic-carousel";
const slidingOffersImages = [
  "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1605888969139-42cca4308aa2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=332&q=80",
  "https://images.unsplash.com/photo-1592119747782-d8c12c2ea267?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80",
  "https://images.unsplash.com/photo-1598831745385-0c404c7034a9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=331&q=80",
];
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const SlidingOffers = () => (
  <div className="flex justify-center bg-gray-900 pt-12">
    <Carousel breakPoints={breakPoints}>
      {/* <div className="container bg-red-500 flex items-center justify-around flex-grow p-24 py-12 space-x-12 overflow-auto cursor-pointer"> */}
      {slidingOffersImages.map((image) => (
        <img
          alt=""
          className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ... h-64 w-64 object-cover"
          src={image}
        ></img>
      ))}
      {/* </div> */}
    </Carousel>
  </div>
);

export default SlidingOffers;
