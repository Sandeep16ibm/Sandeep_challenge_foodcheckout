import React from "react";
import "./styles.css";
import { useGlobalContext } from "../../Context/Context";

const ProductCard = ({ imgUrl, itemName, price, total, cost, item }) => {
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
    <div className="cardParent">
      <div className="cardImgbx">
        <img src={imgUrl} alt="item" />
      </div>
      <div className="cardDetail">
        <h3> {itemName}</h3>
        <p>Price: {price}</p>
        {total !== 0 ? <p> Total: {total}</p> : ""}
        {cost !== 0 ? <p>Cost (INR): {cost}</p> : ""}
        <div>
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

export default ProductCard;
