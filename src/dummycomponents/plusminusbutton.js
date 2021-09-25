import React from "react";

const PlusMinusButton = ({ count, onPlusButtonClick, onMinusButtonClick }) => {
  return (
    <>
      <button
        className="bg-green-600 w-10"
        onClick={() => {
          onPlusButtonClick();
        }}
      >
        +
      </button>
      <input
        type="text"
        min="0"
        className="w-8"
        readOnly
        value={count}
        style={{ textAlign: "center" }}
      ></input>

      <button
        className="bg-red-600 w-10"
        onClick={() => {
          onMinusButtonClick();
        }}
      >
        -
      </button>
    </>
  );
};

export default PlusMinusButton;
