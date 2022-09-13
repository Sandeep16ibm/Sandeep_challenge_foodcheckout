import React from "react";
import { useGlobalContext } from "../../Context/Context";
import "./styles.css";

const FoodList = ({ imgUrl, itemName, price, total, cost, item }) => {
  const { increment, decrement } = useGlobalContext();
  const inc = {
    item: item.item,
    price: item.price,
    image: imgUrl,
    total: item.total + 1,
    cost: item.cost + item.price,
  };
  const dec = {
    item: item.item,
    price: item.price,
    image: imgUrl,
    total: item.total - 1,
    cost: item.cost - item.price,
  };
  return (
    <div>
      <div className="listParent">
        <h3 className="flexChildren"> {itemName} : </h3>
        {total !== 0 ? <p className="flexChildren">{total}</p> : ""}
        <div className="flexChildren">
          <button
            className="cardBtnInc"
            onClick={() => {
              increment(inc);
            }}
          >
            +
          </button>
          <button
            className="cardBtnDec"
            onClick={() => {
              if (total > 0) {
                decrement(dec);
              }
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodList;
