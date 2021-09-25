import React, { useState, useEffect, useContext } from "react";
import { PastOrdersCard } from "./../components/pastorderscard";
import { getOrders } from "./../services/ApiService";
import { UserDetailsContext } from "./../components/App";
import SideNavigationTab from "./../practicecomponents/sidenavigationtab";
export function Orders({ visible }) {
  const [orders, setOrders] = useState([]);
  const tabArray = ["Orders", "Favourites", "Payments", "Addresses"];
  const { userDetail } = useContext(UserDetailsContext);
  useEffect(() => {
    getOrders(userDetail.userId).then((data) => {
      setOrders(data.data);
    });
  }, []);
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
          <div>
            <p className="tracking-wide text-gray-800 font-bold text-xl ">
              Past Orders
            </p>

            {orders.map((item) => (
              <>
                <PastOrdersCard item={item}></PastOrdersCard>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
