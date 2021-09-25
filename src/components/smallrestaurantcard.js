import React from "react";
import useSWR from "swr";
import { Link } from "react-router-dom";
import {environment} from "../environment";

const basePath = environment.baseUrl;
export function SmallRestaurantCard(props) {
  const offerFetcher = (...args) =>
    fetch(basePath+`/offers/${props.item.id}`).then((res) =>
      res.json()
    );
  const { data: data1 } = useSWR(props.item.id ? "offers" : null, offerFetcher);

  const cuisineFetcher = (...args) =>
    fetch(basePath+`/cuisine/${props.item.id}`).then((res) =>
      res.json()
    );
  const { data: data2 } = useSWR(
    props.item.id ? "cuisines" : null,
    cuisineFetcher
  );
  const ratingFetcher = (...args) =>
    fetch(
        basePath+`/getratingsaverage/${props.item.id}/${props.item.city}`
    ).then((res) => res.json());
  const { data: ratings } = useSWR(
    props.item.id ? "rating" : null,
    ratingFetcher
  );

  return (
    <>
      <Link
        className="flex flex-col group w-full h-full p-5  text-white bg-white border border-white hover:border-gray-400 hover:shadow-2xl hover:text-blue-500 "
        to={{
          pathname: `/restaurants/${props.item.name}`,
          state: {
            city: props.item.city,
            name: props.item.name,
            rId: props.item.id,
            rImage: props.item.image,
          },
        }}
      >
        <div className="flex flex-col border-b border-transparent group-hover:border-gray-300 ">
          <img
            className="object-cover w-64 h-40"
            style={{ width: 500 }}
            src={props.item.image}
            alt="food"
          ></img>
          <p className="pt-4 font-bold text-gray-800"> {props.item.name}</p>
          {data2 &&
            data2.map((cuisine) => (
              <p className="text-sm text-gray-600"> {cuisine.cuisine} </p>
            ))}

          <div className="flex items-end justify-between pt-6 pb-4 border-b border-gray-300">
            <div
              class={
                ratings >= 4 && ratings <= 5
                  ? " flex items-center justify-center w-12 h-5 bg-green-500"
                  : ratings >= 3 && ratings < 4
                  ? " flex items-center justify-center w-12 h-5 bg-yellow-500"
                  : ratings >= 2 && ratings < 3
                  ? " flex items-center justify-center w-12 h-5 bg-yellow-800"
                  : ratings == null
                  ? "flex items-center justify-center w-12 h-5"
                  : " flex items-center justify-center w-12 h-5 bg-red-600"
              }
            >
              {ratings == null ? (
                <>
                  {" "}
                  <div className="w-4 h-4 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div className="w-4 h-4 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </>
              )}

              <div className="text-xs tracking-wide text-white">{ratings}</div>
            </div>

            <div className="text-xs tracking-wide text-gray-600">
              {props.item.timeToCook}
            </div>
            <div className="text-xs tracking-wide text-gray-600">
              {props.item.costForTwo}
            </div>
          </div>
          {data1 &&
            data1.map((offer) => (
              <div className="flex items-end">
                <div className="w-5 h-5 text-orange-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="pt-4 text-sm tracking-wide text-orange-800">
                  {offer.offer}
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center text-sm font-bold tracking-wide">
          QUICK VIEW
        </div>
      </Link>
    </>
  );
}
