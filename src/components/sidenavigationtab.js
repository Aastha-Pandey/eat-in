import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const SideNavigationTab = ({ text }) => {
  const { pathname } = useLocation();
  return (
    <NavLink
      to={`/my-account/${text}`}
      activeStyle={{
        color: "rgb(40,40,40)",
        fontWeight: "bold",
        backgroundColor: "white",
      }}
      isActive={
        text === "Orders"
          ? () => {
              return ["/my-account", "/my-account/Orders"].includes(pathname);
            }
          : ""
      }
      className="flex pl-5  tracking-wide text-gray-800 font-semibold hover:font-bold hover:text-gray-800   space-x-4 justify-start items-center  h-20  ml-5 "
      style={{ width: 236 }}
    >
      <div className="w-4">
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
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      </div>
      <div> {text}</div>
    </NavLink>
  );
};

export default SideNavigationTab;
