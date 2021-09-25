/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from "react";
import { Login } from "./../components/login";

import { addUsers } from "../services/ApiService";
import { login, ACCESS_TOKEN_KEY } from "../services/ApiService";
import { Redirect } from "react-router-dom";
import { UserDetailsContext } from "./../components/App";
export function SignUp() {
  const { userDetail, setUserDetail } = useContext(UserDetailsContext);
  const [isLoginClicked, setIsLoginClicked] = useState();
  const [midComponent, setMidComponent] = useState();
  const [showHide, setShowHide] = useState();
  const [passwordInput, setPasswordInput] = useState("password");

  const [label, setLabel] = useState({
    userNameLabel: "Name",
    phoneNumberLabel: "Phone number",
    passwordLabel: "Password",
    emailLabel: "Email",
    cityLabel: "City",
  });

  function checkUserNameAndPassword() {
    addUsers(
      userDetail.phoneNumber,
      userDetail.password,
      userDetail.userName,
      userDetail.email,
      userDetail.city
    )
      .then((_) => {
        login(userDetail.phoneNumber, userDetail.password).then(
          ({ data, headers }) => {
            localStorage.setItem(ACCESS_TOKEN_KEY, headers.authorization);
            setUserDetail({
              ...userDetail,
              city: data.city,
              userName: data.name,
              userId: data.userId,
            });

            setMidComponent(true);
          }
        );
      })
      .catch((response) => {
        console.log(response.response.data.message);
      });
  }

  const signUp = (
    <>
      {!midComponent ? (
        <>
          {isLoginClicked ? <Login></Login> : ""}

          <div
            className="inset-y-0 left-0 flex flex-col w-full h-screen bg-white pl-4"
            style={{ width: "400px" }}
          >
            <div className="flex flex-col w-auto h-auto space-y-10">
              <div className="inset-y-0 left-0 flex flex-col ">
                <div className="text-2xl font-semibold text-gray-900">
                  Sign Up
                </div>
                <p className="text-sm">
                  or{" "}
                  <a
                    className="cursor-pointer ... text-sm text-orange-400"
                    onClick={() => {
                      setIsLoginClicked(true);
                    }}
                  >
                    login to your account
                  </a>
                </p>
              </div>

              <div className="inset-y-0 left-0 flex flex-col -space-y-12 ">
                <div>
                  <input
                    type="number"
                    className="form-control placeholder-transparent w-full h-16  pl-4  pt-8 pb-4 text-sm text-gray-700 border border-b-0 border-gray-500  focus:outline-none  focus:border-gray-500"
                    placeholder="1234567890"
                    onChange={(event) => {
                      setUserDetail({
                        ...userDetail,
                        phoneNumber: event.target.value,
                      });
                      setLabel({ ...label, phoneNumberLabel: "Phone number" });
                    }}
                    onBlur={() => {
                      if (
                        userDetail.phoneNumber === undefined ||
                        !userDetail.phoneNumber.match(/^\d{10}$/)
                      ) {
                        setLabel({
                          ...label,
                          phoneNumberLabel: "Enter phone number",
                        });
                      }
                    }}
                    onInput={(event) => {
                      if (event.target.value > 10) {
                        event.target.value = event.target.value.slice(0, 10);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.which === 38 || e.which === 40) {
                        e.preventDefault();
                      }
                    }}
                  ></input>

                  <label
                    className={
                      label.phoneNumberLabel === "Enter phone number"
                        ? "pointer-events-none form-labelerror  text-red-700 block transform -translate-y-10 translate-x-4"
                        : "pointer-events-none form-label  text-gray-500 block transform -translate-y-10 translate-x-4"
                    }
                  >
                    {label.phoneNumberLabel}
                  </label>
                  <div className="h-6"></div>
                </div>

                <div>
                  <input
                    className="form-control placeholder-transparent w-full h-16 pl-4  pt-8 pb-4 text-sm text-gray-700 border border-b-0 border-gray-500  focus:outline-none  focus:border-gray-500"
                    placeholder="John"
                    onChange={(event) => {
                      setUserDetail({
                        ...userDetail,
                        userName: event.target.value,
                      });
                      setLabel({ ...label, userNameLabel: "Name" });
                    }}
                    onBlur={() => {
                      if (
                        userDetail.userName === undefined ||
                        userDetail.userName.length === 0
                      ) {
                        setLabel({
                          ...label,
                          userNameLabel: "Enter your name",
                        });
                      }
                    }}
                  ></input>

                  <label
                    className={
                      label.userNameLabel === "Enter your name"
                        ? "pointer-events-none form-labelerror  text-red-700 block transform -translate-y-10 translate-x-4"
                        : "pointer-events-none form-label  text-gray-500 block transform -translate-y-10 translate-x-4"
                    }
                  >
                    {label.userNameLabel}
                  </label>
                  <div className="h-6"></div>
                </div>
                <div>
                  <input
                    className="form-control placeholder-transparent w-full h-16 pl-4  pt-8 pb-4 text-sm text-gray-700 border border-b-0 border-gray-500  focus:outline-none  focus:border-gray-500"
                    placeholder="John@email.com"
                    onChange={(event) => {
                      setUserDetail({
                        ...userDetail,
                        email: event.target.value,
                      });
                      setLabel({ ...label, emailLabel: "Email" });
                    }}
                    onBlur={() => {
                      if (
                        userDetail.email === undefined ||
                        userDetail.email.length === 0
                      ) {
                        setLabel({ ...label, emailLabel: "Enter your email" });
                      }
                    }}
                  ></input>

                  <label
                    className={
                      label.emailLabel === "Enter your email"
                        ? "pointer-events-none form-labelerror  text-red-700 block transform -translate-y-10 translate-x-4"
                        : "pointer-events-none form-label  text-gray-500 block transform -translate-y-10 translate-x-4"
                    }
                  >
                    {label.emailLabel}
                  </label>
                  <div className="h-6"></div>
                </div>
                <div className="flex flex-col bg-yellow-500">
                  <input
                    type={passwordInput}
                    className="form-control placeholder-transparent w-full h-16 pl-4  pt-8 pb-4 text-sm text-gray-700 border border-b-0  border-gray-500  focus:outline-none  focus:border-gray-500"
                    placeholder="********"
                    onChange={(event) => {
                      setUserDetail({
                        ...userDetail,
                        password: event.target.value,
                      });
                      setLabel({ ...label, passwordLabel: "Password" });
                    }}
                    onBlur={() => {
                      if (
                        userDetail.password === undefined ||
                        userDetail.password.length === 0
                      ) {
                        setLabel({
                          ...label,
                          passwordLabel: "Enter your password",
                        });
                      }
                    }}
                  ></input>

                  <label
                    className={
                      label.passwordLabel === "Enter your password"
                        ? "pointer-events-none form-labelerror  text-red-700 block transform -translate-y-10 translate-x-4"
                        : "pointer-events-none form-label  text-gray-500 block transform -translate-y-10 translate-x-4"
                    }
                  >
                    {label.passwordLabel}
                  </label>
                  {showHide ? (
                    <>
                      {" "}
                      <button
                        className="focus:outline-none self-end form-label  pr-4 pl-4 block transform -translate-y-16 "
                        onClick={() => {
                          setShowHide(false);
                          setPasswordInput("password");
                        }}
                      >
                        <div className="w-6 h-6 text-orange-600">
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
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="focus:outline-none self-end form-label  pr-4 pl-4 block transform -translate-y-16 "
                        onClick={() => {
                          setShowHide(true);
                          setPasswordInput("text");
                        }}
                      >
                        <div className="w-6 h-6 text-orange-600">
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
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                            />
                          </svg>
                        </div>
                      </button>
                    </>
                  )}
                </div>
                <div>
                  <input
                    className="form-control placeholder-transparent w-full h-16 pl-4  pt-8 pb-4 text-sm text-gray-700 border border-gray-500  focus:outline-none  focus:border-gray-500"
                    placeholder="Varanasi"
                    onChange={(event) => {
                      setUserDetail({
                        ...userDetail,
                        city: event.target.value,
                      });
                      setLabel({ ...label, cityLabel: "City" });
                    }}
                    onBlur={() => {
                      if (
                        userDetail.city === undefined ||
                        userDetail.city.length === 0
                      ) {
                        setLabel({
                          ...label,
                          cityLabel: "Enter your city",
                        });
                      }
                    }}
                  ></input>

                  <label
                    className={
                      label.cityLabel === "Enter your city"
                        ? "pointer-events-none form-labelerror  text-red-700 block transform -translate-y-10 translate-x-4"
                        : "pointer-events-none form-label  text-gray-500 block transform -translate-y-10 translate-x-4"
                    }
                  >
                    {label.cityLabel}
                  </label>
                </div>
                <div className="inset-y-0 left-0 flex flex-col">
                  <button
                    class="bg-orange-400 bg-opacity-100 text-white py-3 focus:outline-none my-12"
                    onClick={() => {
                      checkUserNameAndPassword();
                    }}
                  >
                    <p class="font-semibold text-xs uppercase">continue</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Redirect to={`/restaurants/${" "}`} />
      )}
    </>
  );
  return signUp;
}
