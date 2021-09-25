import React from "react";
import "./MyCss.css";
import "./App.css";
import { AnimateOnChange } from "react-animation";
import { useEffect } from "react";
import { useState } from "react";
import { Overlay } from "./overlay";
import { Login } from "./login";
import { SignUp } from "./signup";
const images = [
  "https://images.unsplash.com/photo-1550950158-d0d960dff51b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1545775210-00729451dbe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1596464372839-fd7b1eaea27e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
];

const words = [
  "Hungry?",
  "Unexpected guests?",
  "Cooking gone wrong?",
  "Movie marathon?",
  "Game night?",
  "Late night at office?",
];
const selectedImage = images[Math.floor(Math.random() * images.length)];

 function OldLandingPage() {
  const [current, setCurrent] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (current === words.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <>
      <div className="flex flex-col">
        {(isLoggedIn || isSignedUp) && (
          <Overlay
            onExit={() => {
              setIsLoggedIn(false);
              setIsSignedUp(false);
            }}
          >
            {isLoggedIn ? <Login></Login> : <SignUp></SignUp>}
          </Overlay>
        )}

        <div className="flex bg-white" style={{ height: "30rem" }}>
          <div className="flex-grow"> </div>
          <div
            className="flex flex-col flex-auto p-16"
            style={{ width: "40rem" }}
          >
            <div className="flex justify-between">
              <h3 className="flex pb-16 text-3xl font-bold text-yellow-500 ">
                <Logo /> <span className="px-2"> EAT IN </span>
              </h3>
              <div className="flex space-x-8 ">
                <button
                  className="h-10 font-bold text-black hover:text-yellow-600 focus:outline-none"
                  onClick={() => {
                    setIsLoggedIn(true);
                  }}
                >
                  Login
                </button>
                <button
                  className="h-10 px-5 font-bold text-white truncate bg-black hover:text-yellow-500"
                  onClick={() => {
                    setIsSignedUp(true);
                  }}
                >
                  Sign up
                </button>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="flex flex-col space-y-2">
                <h1 className="text-4xl font-bold text-gray-900">
                  <AnimateOnChange>{words[current]}</AnimateOnChange>
                </h1>

                <p className="pb-10 text-xl text-gray-700">
                  Order food from favourite restaurants near you.
                </p>
              </div>

              <div className="flex ">
                <input
                  className="p-3 px-6 text-xl font-medium text-gray-700 border border-r-0 border-gray-500 Caret focus:outline-none focus:shadow focus:border-yellow-500"
                  placeholder="Enter your delivery location"
                  style={{ width: "30rem" }}
                />
                <button className="p-3 px-6 text-white truncate bg-yellow-500 bg-opacity-100">
                  <p className="text-lg font-semibold uppercase">Find food</p>
                </button>
              </div>
              <p className="pt-5 pb-3 text-sm font-normal text-gray-600">
                POPULAR CITIES IN INDIA
              </p>

              <div className="flex flex-wrap">
                {[
                  "Ambikapur",
                  "Raipur",
                  "Pakistan",
                  "Banaras",
                  "Chagadadpur",
                  "Ambikapur",
                  "Raipur",
                  "Pakistan",
                  "Banaras",
                  "Chagadadpur",
                  "& more.",
                ].map((city, i) => (
                  <span
                    className={`text-sm font-normal text-gray-600 pr-2 ${
                      i % 2 === 0 ? "font-semibold" : ""
                    }`}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <img
            className="object-cover h-full "
            style={{ width: "calc(50% - 80px)" }}
            src={selectedImage}
            alt=""
          ></img>
        </div>
      
      </div>
      <div className="w-full h-20 bg-yellow-900"></div>
     
     
    </>
  );
}

function Logo() {
  return <img className="w-12 " src={require("./public/logo.svg")}></img>;
}
