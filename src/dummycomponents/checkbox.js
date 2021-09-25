import React from "react";

const Checkbox = ({ arr, onChange = (_) => {} }) => {
  return (
    <>
      {arr.map(({ checked, label }, index) => (
        <div className="flex flex-col justify-evenly" key={label}>
          <label className="px-2">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => {
                const isChecked = e.target.checked;
                const newArray = [...arr];

                newArray[index] = { ...newArray[index], checked: isChecked };

                onChange(newArray);
              }}
            ></input>
            {label}
          </label>
        </div>
      ))}
    </>
  );
};

export default Checkbox;
