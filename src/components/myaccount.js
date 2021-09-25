import React, { useContext } from "react";
import { useOnScreen } from "./../components/useOnScreen";

import { SideNavigationBar } from "./../components/sidenavigationbar";
import { UserDetailsContext } from "./../components/App";
const MyAccount = () => {
  const [ref, visible] = useOnScreen({ threshold: 0.7 });

  const { userDetail } = useContext(UserDetailsContext);

  return (
    <>
      <div ref={ref}>
        <>
          <div
            className={
              visible
                ? "h-40  flex teal-blue justify-center w-full"
                : "h-20  fixed top-0 z-40 flex teal-blue justify-center w-full"
            }
          >
            <div
              className="flex  justify-between items-center text-white font-bold text-3xl "
              style={{ width: 1200 }}
            >
              <div className="flex flex-col ">
                <div>{userDetail.userName}</div>
                <div className="flex space-x-8 text-base font-normal">
                  <div>{userDetail.phoneNumber}</div>
                  <div>{userDetail.email}</div>
                </div>
              </div>

              <button className="border border-white text-base py-2 px-6">
                Edit Profile
              </button>
            </div>
          </div>
        </>
      </div>

      <div className="bg-white">
        <div className="mx-20">
          <SideNavigationBar visible={visible} />
        </div>
      </div>
    </>
  );
};

export default MyAccount;
