import React, { useEffect, useState } from "react";
import Login from "./login";
import { AnimateOnChange } from "react-animation";
import { SignUp } from "./../components/signup";
import Overlay from "./../redux/containers/restaurantcontainer";

const images = [
  "https://images.unsplash.com/photo-1550950158-d0d960dff51b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1545775210-00729451dbe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1596464372839-fd7b1eaea27e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
];
const selectedImage = images[Math.floor(Math.random() * images.length)];
const words = [
  "Hungry?",
  "Unexpected guests?",
  "Cooking gone wrong?",
  "Movie marathon?",
  "Game night?",
  "Late night at office?",
];
const LandingPage = () => {
  const [side] = useState("right");
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
  }, [isLoggedIn, current]);
  return (
    <>
      <>
        <div class="flex">
          {(isLoggedIn || isSignedUp) && (
            <Overlay.overlayConnect
              onExit={() => {
                setIsLoggedIn(false);
                setIsSignedUp(false);
              }}
              side={side}
            >
              {isLoggedIn ? <Login></Login> : <SignUp />}
            </Overlay.overlayConnect>
          )}

          <div class="w-4/5 ">
            <div
              className="my-16 ml-20"
              style={{ height: "355px", width: "541px" }}
            >
              <div className="flex space-x-48 ">
                <div className="flex">
                  <h3 className="flex pb-5 pr-12  text-3xl font-bold text-orange-400 truncate">
                    <Logo /> EAT IN
                  </h3>
                </div>

                <div className="flex space-x-6">
                  <button
                    className=" h-10 text-sm font-bold text-black hover:text-orange-400 focus:outline-none"
                    onClick={() => {
                      setIsLoggedIn(true);
                    }}
                  >
                    Login
                  </button>

                  <button
                    className="h-10 px-5 text-sm font-bold text-white truncate bg-black"
                    onClick={() => {
                      setIsSignedUp(true);
                    }}
                  >
                    Sign up
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold text-gray-900">
                  <AnimateOnChange>{words[current]}</AnimateOnChange>
                </h1>
                <p className="pb-10 text-xl text-gray-700">
                  Order food from favourite restaurants near you.
                </p>
                <div className="flex ">
                  <input
                    className="p-3  text-base font-medium text-gray-800 border border-r-0 border-gray-500 Caret focus:outline-none  focus:border-orange-400"
                    placeholder="Enter your delivery location"
                    style={{ width: "25rem" }}
                  />
                  <button className="p-3 px-8 text-sm text-white truncate bg-orange-400 bg-opacity-100">
                    <p className="text-sm font-bold uppercase">Find food</p>
                  </button>
                </div>
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
            className="object-cover"
            style={{ height: "490px", width: "800px" }}
            src={selectedImage}
            alt=""
          ></img>
        </div>

        <div className="bg-yellow-900 text-center">
          hgjkkjlkjkjkjkjkj
          <br></br>
          hgjkkjlkjkjkjkjkj
        </div>
      </>
    </>
  );
};
function Logo() {
  return <img className="w-12 " src={require("./../public/logo.svg")}></img>;
}
export default LandingPage;
