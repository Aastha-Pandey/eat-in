import React from "react";
import { useParams } from "react-router-dom";
import SideNavigationTab from "./sidenavigationtab";
import SideBarCategory from "./../components/sidebarcategory";
export function SideNavigationBar({ visible }) {
  const tabArray = ["Orders", "Favourites", "Payments", "Addresses"];
  const { tab } = useParams();
  return (
    <>
      <div className={visible ? "flex flex-col" : ""}>
        <div
          className={
            visible ? "w-64 absolute h-screen" : "w-64  fixed h-screen"
          }
        >
          <div className="flex bg-gray-200 h-screen flex-col  w-64">
            <div className="flex flex-col my-5" style={{ width: 300 }}>
              {tabArray.map((text) => (
                <SideNavigationTab text={text} />
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 pl-12 ml-64 pr-20 bg-white">
          <SideBarCategory tab={tab} />
        </div>
      </div>
    </>
  );
}
