import React, { useState, useEffect } from "react";
import Combiner from "../practicecomponents/combiner";
import "./../components/MyCss.css";
import "./../components/App.css";
import { getAllCuisines } from "../services/ApiService";
export const UserDetailsContext = React.createContext();

function App() {
  const [cousinFilterValue, setCousinFilterValue] = useState([]);

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

  //return <MiddleLevelComponent />;

  return (
    <UserDetailsContext.Provider
      value={{
        userDetail,
        setUserDetail,
        cousinFilterValue,
        setCousinFilterValue,
      }}
    >
      <Combiner></Combiner>
    </UserDetailsContext.Provider>
  );
}

export default App;
