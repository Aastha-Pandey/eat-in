/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { SignUp } from "./../components/signup";
import { Redirect } from "react-router-dom";
import { login, ACCESS_TOKEN_KEY } from "./../services/ApiService";

import TogglePasswordVisibility from "./../practicecomponents/togglepasswordvisibility";
export const UserContext = React.createContext();
export function Login() {
  const [isCreateAccountClicked, setIsCreateAccountClicked] = useState(false);
  const [midComponent, setMidComponent] = useState();
  const [showHide, setShowHide] = useState();
  const [passwordInput, setPasswordInput] = useState("password");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [label, setLabel] = useState({
    phoneNumberLabel: "Phone number",
    passwordLabel: "Password",
  });
  const doLogin = () => {
    login(user.phoneNumber, user.password)
      .then(({ data, headers }) => {
        localStorage.setItem(ACCESS_TOKEN_KEY, headers.authorization);
        setUser({
          userName: data.name,
          userId: data.userId,
          userCity: data.city,
        });

        setMidComponent(true);
      })
      .catch((e) => {
        setError(e.response.data.message);
      });
  };

  const loginform = (
    <UserContext.Provider value={{ user }}>
      {console.log(user)}
      {!midComponent ? (
        <>
          {isCreateAccountClicked ? <SignUp></SignUp> : ""}
          <div
            className="inset-y-0 left-0 flex flex-col h-screen w-full pl-4"
            style={{ width: "400px" }}
          >
            <div className="flex flex-col w-auto h-auto space-y-10">
              <div className="inset-y-0 left-0 flex flex-col">
                <div className="text-2xl font-semibold text-gray-900">
                  Login
                </div>
                <p className="text-sm">
                  or{" "}
                  <a
                    className="cursor-pointer ... text-sm text-orange-400"
                    onClick={() => {
                      setIsCreateAccountClicked(true);
                    }}
                  >
                    {" "}
                    create an account
                  </a>
                </p>
              </div>
              {error ? (
                <>
                  {" "}
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <strong className="font-bold">{error}</strong>
                  </div>
                </>
              ) : (
                ""
              )}
              <div className="inset-y-0 left-0 flex flex-col -space-y-12">
                <div>
                  <input
                    type="number"
                    className="form-control placeholder-transparent w-full h-16 pl-4  pt-8 pb-4 text-sm text-gray-700 border border-b-0 border-gray-500  focus:outline-none  focus:border-gray-500"
                    placeholder="1234567890"
                    onChange={(event) => {
                      setUser({ ...user, phoneNumber: event.target.value });

                      setLabel({ ...label, phoneNumberLabel: "Phone number" });
                    }}
                    onBlur={() => {
                      if (
                        user.phoneNumber === undefined ||
                        !user.phoneNumber.match(/^\d{10}$/)
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

                <div className="flex flex-col">
                  <input
                    type={passwordInput}
                    className="form-control placeholder-transparent w-full h-16 pl-4  pt-8 pb-4 text-sm text-gray-700 border border-gray-500  focus:outline-none  focus:border-gray-500"
                    placeholder="*********"
                    onChange={(event) => {
                      setUser({ ...user, password: event.target.value });

                      setLabel({ ...label, passwordLabel: "Password" });
                    }}
                    onBlur={() => {
                      if (
                        user.password === undefined ||
                        user.password.length === 0
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
                  {/* {showHide ? (
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
                  )} */}
                  <TogglePasswordVisibility
                    showHide={showHide}
                    setShowHide={setShowHide}
                    setPasswordInput={setPasswordInput}
                  ></TogglePasswordVisibility>
                </div>

                <div className="inset-y-0 left-0 flex flex-col">
                  <button
                    className="bg-orange-400 bg-opacity-100 text-white py-3 focus:outline-none my-12"
                    onClick={doLogin}
                  >
                    <p className="font-semibold text-xs uppercase">Login</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Redirect
            to={`/restaurants/${user.userName}/${user.userCity}/${user.userId}`}
          />
        </>
      )}
    </UserContext.Provider>
  );
  return loginform;
}
