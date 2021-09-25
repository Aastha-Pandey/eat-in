import React, { useEffect, useState, useContext } from "react";
import { UserDetailsContext } from "../components/App";
import { getOrders } from "../services/ApiService";
import { PastOrdersCard } from "./../components/pastorderscard";
import Favourites from "./favourites";
import Addressess from "./../components/addresses";
import Payments from "./../components/payments";
const SideBarCategory = ({ tab }) => {
  const [orders, setOrders] = useState([]);
  const { userDetail } = useContext(UserDetailsContext);
  const [text, setText] = useState();
  useEffect(() => {
    console.log(tab);
    if (tab === "Orders" || tab === undefined) {
      setText(" Past Orders");
    } else if (tab === "Favourites") {
      setText("Favourites");
    } else if (tab === "Payments") {
      setText("Payments");
    } else if (tab === "Addresses") {
      setText("Addresses");
    }
    getOrders(userDetail.userId).then((data) => {
      setOrders(data.data);
    });
  }, [tab, userDetail.userId]);

  return (
    <div>
      <p className="tracking-wide text-gray-800 font-bold text-xl ">{text}</p>

      {tab === "Orders" || tab === undefined ? (
        <>
          {orders.map((item) => (
            <>
              <PastOrdersCard item={item}></PastOrdersCard>
            </>
          ))}
        </>
      ) : tab === "Favourites" ? (
        <Favourites />
      ) : tab === "Payments" ? (
        <Payments />
      ) : tab === "Addresses" ? (
        <Addressess />
      ) : (
        ""
      )}
    </div>
  );
};

export default SideBarCategory;
