/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useContext, useState, useEffect } from "react";
import { login, ACCESS_TOKEN_KEY } from "./../services/ApiService";
import { UserDetailsContext } from "./../components/App";
import { Redirect } from "react-router-dom";
import { SignUp } from "./../components/signup";
import TogglePasswordVisibility from "./togglepasswordvisibility";

import SubmitButton from "./submitbutton";
const Login = () => {
  const { userDetail, setUserDetail } = useContext(UserDetailsContext);
  const [isCreateAccountClicked, setIsCreateAccountClicked] = useState(false);
  const [midComponent, setMidComponent] = useState();
  const [showHide, setShowHide] = useState();
  const [passwordInput, setPasswordInput] = useState("password");
  const [error, setError] = useState("");
  const text = "Login";

  const [label, setLabel] = useState({
    phoneNumberLabel: "Phone number",
    passwordLabel: "Password",
  });
  const doLogin = () => {
    login(userDetail.phoneNumber, userDetail.password)
      .then(({ data }) => {
        localStorage.setItem(ACCESS_TOKEN_KEY, data.token);
        const user = {
          userName: data.name,
          userId: data.userId,
          city: data.city,
          phoneNumber: userDetail.phoneNumber,
          email: data.email,
        };

        localStorage.setItem("userDetail", JSON.stringify(user));
        setUserDetail(user);

        setMidComponent(true);
      })
      .catch((e) => {
        setError(e.response.data.message);
      });
  };

  return (
    <>
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
                  {text}
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

                <div className="flex flex-col ">
                  <input
                    type={passwordInput}
                    className=" form-control placeholder-transparent w-full h-16 pl-4  pt-8 pb-4 text-sm text-gray-700 border border-gray-500  focus:outline-none  focus:border-gray-500"
                    placeholder="*********"
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
                  <TogglePasswordVisibility
                    showHide={showHide}
                    setShowHide={setShowHide}
                    setPasswordInput={setPasswordInput}
                  ></TogglePasswordVisibility>
                </div>
                <SubmitButton doLogin={doLogin} text={text} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Redirect to={`/restaurants`} />
        </>
      )}
    </>
  );
};

export default Login;
