import React, { useState, useEffect, useContext } from "react";
import { UserDetailsContext } from "./../components/App";
import { getDishes } from "./../services/ApiService";
import { DishesCard } from "./../components/dishescard";

import { Link } from "react-router-dom";
export function Dishes({ restaurantDetails }) {
  const [dishes, setDishes] = useState([]);
  const { userDetail, setUserDetail } = useContext(UserDetailsContext);
  const [restaurantId, setRestaurantId] = useState(restaurantDetails.rId);

  useEffect(() => {
    setRestaurantId(restaurantDetails.rId);
    getDishes(restaurantId).then(({ data }) => {
      setDishes(data);
    });
  }, [restaurantId, restaurantDetails]);
  return (
    <>
      <div>
        {dishes.map((item) => (
          <>
            <DishesCard
              item={item}
              userDetail={userDetail.userId}
              restaurantId={restaurantId}
            ></DishesCard>
          </>
        ))}
      </div>
      <Link to={`/cart/${userDetail.userId}`}>
        <button className="bg-orange-500 mt-8 font-semibold">Go to cart</button>
      </Link>
    </>
  );
}
