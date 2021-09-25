import React from "react";
import { useOnScreenAccount } from "./useOnScreenAccount";
import { useOnScreenAccountHeader } from "../useOnScreenAccountHeader";

export function User() {
  const [ref, visible] = useOnScreenAccount({ threshold: 0.52 });
  const [refOne, visibleOne] = useOnScreenAccountHeader({ threshold: 1 });

  return (
    <>
      <div className="h-20 teal-blue"></div>

      <div ref={refOne}>
        {visibleOne ? (
          <>
            <div className="flex  teal-blue justify-around">
              <div className="h-20 pb-12 flex teal-blue justify-center w-full">
                <div
                  className="flex  justify-between items-center text-white font-bold text-3xl "
                  style={{ width: 1200 }}
                >
                  <div className="flex flex-col ">
                    <div>Aastha</div>
                    <div className="flex space-x-8 text-base font-normal">
                      <div>9406326735</div>
                      <div>aasthap7@gmail.com</div>
                    </div>
                  </div>

                  <button className="border border-white text-base py-2 px-6">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex  teal-blue justify-around">
            <div className="fixed z-40 top-0 h-20  flex teal-blue justify-center w-full">
              <div
                className="flex  justify-between items-center text-white font-bold text-3xl "
                style={{ width: 1200 }}
              >
                <div className="flex flex-col ">
                  <div>Aastha</div>
                  <div className="flex space-x-8 text-base font-normal">
                    <div>9406326735</div>
                    <div>aasthap7@gmail.com</div>
                  </div>
                </div>

                <button className="border border-white text-base py-2 px-6">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div ref={ref}>
        {visible ? (
          <>
            <div className="bg-white">
              <div className="border border-white">
                <div className="flex  mt-10 mx-16">
                  <div className="flex  bg-red-400">
                    <p>
                      {" "}
                      <p>1.jhbfkdnnnevhoriuvr</p>
                      <p>2.jhbfkdnnnevhoriuvr</p>
                      <p>3.jhbfkdnnnevhoriuvr</p>
                      <p>4.jhbfkdnnnevhoriuvr</p>
                      <p>5.jhbfkdnnnevhoriuvr</p>
                      <p>6.jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className=" teal-blue">
              <div className=" mx-6 bg-white">
                <div className="border border-white ">
                  <div className=" m-10 flex border border-black bg-green-400">
                    <p>
                      {" "}
                      <p>1.jhbfkdnnnevhoriuvr</p>
                      <p>2.jhbfkdnnnevhoriuvr</p>
                      <p>3.jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                      <p>jhbfkdnnnevhoriuvr</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
// {
//   visibleOne ? (<>
//    <div className = "flex bg-green-400 border border-black m-10" style = {{height : 1200, width :1225}}>

//   <div className = "bg-red-700" style = {{height : 1200, width :270}}>
// <div className = "flex flex-col my-5" style = {{height :300}}>
// <button className = "flex pl-5  tracking-wide text-gray-800 font-semibold hover:font-bold hover:text-gray-800 focus:font-bold focus:text-gray-800 space-x-4 justify-start items-center  h-20  ml-5 focus:bg-white focus:outline-none" style = {{width:250}}>
// <div className = "w-4">
// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
// </svg>
// </div>
//   <div> Orders</div>

// </button>
// <button className = "flex pl-5  tracking-wide text-gray-800 font-semibold hover:font-bold hover:text-gray-800 focus:font-bold focus:text-gray-800 space-x-4 justify-start items-center  h-20  ml-5 focus:bg-white focus:outline-none" style = {{width:250}}>
//   <div className = "w-4">
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
// </svg>
//   </div>

// <div>Favourites</div>
// </button>
// <button className = "flex pl-5  tracking-wide text-gray-800 font-semibold hover:font-bold hover:text-gray-800 focus:font-bold focus:text-gray-800 space-x-4 justify-start items-center h-20  ml-5 focus:bg-white focus:outline-none" style = {{width:250}}>
//   <div className = "w-4">
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
// </svg>
//   </div>
//   <div>Payments</div></button>
// <button className = "flex pl-5  tracking-wide text-gray-800 font-semibold hover:font-bold hover:text-gray-800 focus:font-bold focus:text-gray-800 space-x-4 justify-start items-center  h-20  ml-5 focus:bg-white focus:outline-none" style = {{width:250}}>
// <div className = "w-4">
// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// </svg>
// </div>
//   <div>Addresses</div></button>
// </div>

// </div>

// <div className = "bg-yellow-400 h-full w-full margin-left"  ></div>

// </div></>) : (<> <div className = "flex bg-green-400 border border-black m-10" style = {{height : 1200, width :1225}}>

//   <div className = "sticky bg-red-700" style = {{height : 1200, width :270}}>
// <div className = "flex flex-col my-5" style = {{height :300}}>
// <button className = "flex pl-5  tracking-wide text-gray-800 font-semibold hover:font-bold hover:text-gray-800 focus:font-bold focus:text-gray-800 space-x-4 justify-start items-center  h-20  ml-5 focus:bg-white focus:outline-none" style = {{width:250}}>
// <div className = "w-4">
// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
// </svg>
// </div>
//   <div> Orders</div>

// </button>
// <button className = "flex pl-5  tracking-wide text-gray-800 font-semibold hover:font-bold hover:text-gray-800 focus:font-bold focus:text-gray-800 space-x-4 justify-start items-center  h-20  ml-5 focus:bg-white focus:outline-none" style = {{width:250}}>
//   <div className = "w-4">
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
// </svg>
//   </div>

// <div>Favourites</div>
// </button>
// <button className = "flex pl-5  tracking-wide text-gray-800 font-semibold hover:font-bold hover:text-gray-800 focus:font-bold focus:text-gray-800 space-x-4 justify-start items-center h-20  ml-5 focus:bg-white focus:outline-none" style = {{width:250}}>
//   <div className = "w-4">
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
// </svg>
//   </div>
//   <div>Payments</div></button>
// <button className = "flex pl-5  tracking-wide text-gray-800 font-semibold hover:font-bold hover:text-gray-800 focus:font-bold focus:text-gray-800 space-x-4 justify-start items-center  h-20  ml-5 focus:bg-white focus:outline-none" style = {{width:250}}>
// <div className = "w-4">
// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
// </svg>
// </div>
//   <div>Addresses</div></button>
// </div>

// </div>

// <div className = "bg-yellow-400 h-full w-full margin-left"  ></div>

// </div></>)
// }
