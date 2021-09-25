import React from "react";

export function PastOrdersCard(props) {
  return (
    <>
      <div className="h-64 py-6 bg-red-200">
        <div className="mx-6 h-full bg-yellow-500">
          {props.item.restaurant_dishDTO.dish.name}
        </div>
      </div>
    </>
  );
}
