import React from "react";
import "./styles.css";
import FoodCard from "../FoodCard/FoodCard";

import { useGlobalContext } from "../../Context/Context";

const FoodMenu = () => {
  const { state } = useGlobalContext();
  return (
    <div className="menuParent">
      {state?.data.map((item, index) => {
        return (
          <FoodCard
            key={index}
            imgUrl={item.image}
            itemName={item.item}
            price={item.price}
            total={item.total}
            cost={item.cost}
            item={item}
          />
        );
      })}
    </div>
  );
};

export default FoodMenu;
