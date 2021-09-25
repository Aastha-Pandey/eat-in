import React, { useLayoutEffect } from "react";

function Overlay(props) {
  useLayoutEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const element = (
    <div className="fixed z-50 block w-full h-full bg-gray-500 bg-opacity-25 ">
      <>
        <div
          className="absolute block w-full h-full bg-gray-500 bg-opacity-25 "
          onClick={props.onExit}
        ></div>
        <div
          className={
            props.filterClicked || props.side === "right"
              ? "absolute inset-y-0 right-0 p-6 bg-white animate__animated animate__bounceInRight"
              : "absolute inset-y-0 left-0 p-6 bg-white animate__animated animate__bounceInLeft"
          }
          style={{ width: "37vw" }}
        >
          <button
            className="pb-6 focus:outline-none  text-lg text-gray-600 w-6"
            onClick={props.onExit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div style={{ width: "20rem" }}>{props.children}</div>
        </div>
      </>
    </div>
  );
  return element;
}
export default Overlay;
