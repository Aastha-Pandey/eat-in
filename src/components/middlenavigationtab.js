import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const MiddleNavigationTab = (props) => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="flex">
        <NavLink
          onClick={() => {
            if (props.item === "Filter") {
              props.clickFilterHandler({ ...props, filterClicked: true });
            }
          }}
          // activeStyle={
          //   props.item === "Filter" &&
          //   !props.filterApplyClicked &&
          //   !props.filterClicked
          //     ? {
          //         borderBottomColor: "rgb(250, 250, 250)",
          //       }
          //     : {
          //         borderBottomColor: "rgb(40,40,40)",
          //       }
          // }
          // to={props.item === "Filter" ? "" : `/restaurants/${props.item}`}
          activeStyle={{
            borderBottomColor: "rgb(40,40,40)",
          }}
          to={`/restaurants/${props.item}`}
          isActive={
            props.item === "Relevance"
              ? () => {
                  return ["/restaurants", "/restaurants/Relevance"].includes(
                    pathname
                  );
                }
              : ""
          }
          className="pb-2 border border-t-0 border-l-0 border-r-0 border-gray-100 focus:outline-none   hover:text-gray-900"
        >
          {props.item}
        </NavLink>

        {props.item === "Filter" ? (
          <div className="w-4 text-orange-400">
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
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default MiddleNavigationTab;
