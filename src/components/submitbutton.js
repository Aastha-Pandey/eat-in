import React from "react";

const SubmitButton = ({ doLogin, text }) => {
  return (
    <>
      <div className="inset-y-0 left-0 flex flex-col">
        <button
          className="bg-orange-400 bg-opacity-100 text-white py-3 focus:outline-none my-12"
          onClick={doLogin}
        >
          <p className="font-semibold text-xs uppercase">{text}</p>
        </button>
      </div>
    </>
  );
};
export default SubmitButton;
