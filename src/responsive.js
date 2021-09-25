import React, { useState } from "react";
//const emoji = require("emoji-dictionary");

const Emoji = () => {
  // const [inputEmoji, setInputEmoji] = useState();
  // const [translateClicked, setTranslateClicked] = useState();
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <button
          className="bg-green-400 w-24 h-12"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <label className="w-24 text-center h-12">{count}</label>
        <button
          className="bg-red-400 w-24 h-12"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
      </div>

      {/* <div className = "flex flex-col space-y-4">
        <div className = "flex space-x-4">
        <input className = "border border-yellow-500 p-12" onChange = {(e) => {
            setInputEmoji(e.target.value)
            setTranslateClicked(false)
        }}></input>
       <button className = "bg-yellow-500 p-10" onClick = {() => {
           setTranslateClicked(true)
       }}>Translate</button>
        </div>
        {
            translateClicked ? ( <label className = "border border-yellow-500 p-8 mx-20"> {emoji.getName(inputEmoji)}</label>) : ( <label className = "border border-yellow-500 p-8 mx-20">Result will be shown here!!</label>)
        }
      
        </div> */}
    </>
  );
};

export default Emoji;
