/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserDetailsContext } from "./../components/App";
const TopNavigationBar = (props) => {
  const { userDetail, cartItem, setCartItem } = useContext(UserDetailsContext);

  return (
    <>
      <nav className="sticky top-0 z-30 flex justify-center h-20 bg-white shadow-md">
        <div className="flex items-center space-x-48">
          <div className="flex pr-40 space-x-8">
            <img className="w-12 " src={require("./../public/logo.svg")}></img>
            <div
              className="flex items-center space-x-2 text-xs tracking-wide cursor-pointer group"
              onClick={() => {
                props.clickFilterHandler({ ...props, addressClicked: true });
              }}
            >
              <a className="font-bold underline group-hover:text-orange-400">
                {userDetail.city}
              </a>
              <a className="font-normal text-gray-600 group-hover:text-gray-500">
                Uttar Pradesh, India
              </a>
              <a className="w-5 text-orange-400 group-hover:text-orange-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex space-x-16 text-gray-700 cursor-pointer">
            <div className="flex group">
              <Link
                to={`/search`}
                className="flex items-center font-semibold text-md group-hover:text-orange-400"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-4 group-hover:text-orange-400">
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <p className="font-bold">S</p>
                  earch
                </div>
              </Link>
            </div>
            <div className="flex group">
              <Link
                className="flex items-center font-semibold text-md group-hover:text-orange-400"
                to="/offers/restaurant"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-4 group-hover:text-orange-400">
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
                        d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="font-bold text-md">O</p>
                  ffers
                </div>
              </Link>
            </div>
            <div className="flex group">
              <Link
                className="flex items-center font-semibold text-md group-hover:text-orange-400"
                to="/support"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-4 group-hover:text-orange-400">
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
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <p className="font-bold">H</p>
                  elp
                </div>
              </Link>
            </div>
            <div className="flex group">
              <Link
                className="flex items-center font-semibold text-md group-hover:text-orange-400"
                to={`/my-account`}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-4 group-hover:text-orange-400">
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <p className="font-bold uppercase">
                    {userDetail.userName.slice(0, 1)}
                  </p>
                  {userDetail.userName.slice(1)}
                </div>
              </Link>
            </div>
            <div className="flex group">
              <div className="flex items-center space-x-2">
                <div className="w-4 group-hover:text-orange-400">
                  {cartItem !== 0 && <div>{cartItem}</div>}
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

                <Link
                  className="flex items-center font-semibold text-md group-hover:text-orange-400"
                  to={`/checkout`}
                >
                  <p className="font-bold">C</p>
                  art
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default TopNavigationBar;
