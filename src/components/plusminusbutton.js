import React from "react";
import { mutate } from "swr";

const PlusMinusButton = ({
  count,
  onPlusButtonClick,
  onMinusButtonClick,
  position,
}) => {
  return (
    <div className={`flex ${position} border-gray-400 border`}>
      <button
        className="bg-white w-10  h-8 text-green-600 font-bold text-sm focus:outline-none"
        onClick={() => {
          mutate("cart");
          onPlusButtonClick();
        }}
      >
        +
      </button>
      <input
        type="text"
        min="0"
        className="w-8 h-8 text-green-600 font-bold text-sm"
        readOnly
        value={count}
        style={{ textAlign: "center" }}
      ></input>

      <button
        className="bg-white w-10 h-8 text-green-600 font-bold text-sm focus:outline-none"
        onClick={() => {
          mutate("cart");
          onMinusButtonClick();
        }}
      >
        -
      </button>
    </div>
  );
};

export default PlusMinusButton;
