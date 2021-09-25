import React, { useState, useEffect } from "react";
import Combiner from "../components/combiner";
import "./../css/MyCss.css";
import "./../css/App.css";
import { getAllCuisines } from "../services/ApiService";

export const UserDetailsContext = React.createContext();

function App() {
  const [cousinFilterValue, setCousinFilterValue] = useState([]);
  const [addClicked, setAddClicked] = useState([]);
  const [cartId, setCartId] = useState();
  const [cartItem, setCartItem] = useState(0);
  useEffect(() => {
    getAllCuisines().then((data) => {
      setCousinFilterValue(
        data.data.map((item) => ({ label: item, checked: false }))
      );
    });
  }, []);
  const [userDetail, setUserDetail] = useState(
    JSON.parse(localStorage.getItem("userDetail"))
  );

  return (
    <UserDetailsContext.Provider
      value={{
        userDetail,
        setUserDetail,
        cousinFilterValue,
        setCousinFilterValue,
        cartItem,
        setCartItem,
        addClicked,
        setAddClicked,
        cartId,
        setCartId,
      }}
    >
      <Combiner></Combiner>
    </UserDetailsContext.Provider>
  );
}

export default App;
