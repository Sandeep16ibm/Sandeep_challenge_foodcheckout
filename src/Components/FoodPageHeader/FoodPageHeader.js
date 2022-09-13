import React, { useState } from "react";
import "./styles.css";
import { useGlobalContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import FoodList from "../FoodList/FoodList";

const FoodPageHeader = () => {
  const { state } = useGlobalContext();
  const [modal, setModal] = useState(false);
  const numofitem = state.data.filter((item) => {
    return item.total !== 0;
  });
  return (
    <>
      {modal ? (
        numofitem.reduce((acc, curitem) => {
          console.log(acc);
          console.log(curitem);
          return acc + curitem.cost;
        }, 0) === 0 ? (
          ""
        ) : (
          <div className="modalParent">
            <div>
              <div className="modalinner">
                <h2>Order Summary</h2>
                {numofitem.map((item, index) => {
                  return (
                    <FoodList
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
                <p className="modalTotal">
                  Total (INR) :{" "}
                  {numofitem.reduce((acc, curitem) => {
                    console.log(acc);
                    console.log(curitem);
                    return acc + curitem.cost;
                  }, 0)}
                </p>
                <div className="modalFotter">
                  <Link
                    className="modalbtn"
                    to="/FoodCheckout"
                    onClick={() => setModal(false)}
                  >
                    SAVE AND CHECKOUT
                  </Link>
                  <p className="cancel" onClick={() => setModal(false)}>
                    CANCEL
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      ) : (
        ""
      )}

      <div className="header">
        <div className="headerleft">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
          >
            <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
          </svg>
          <h2> Food's Restuarant</h2>
        </div>
        <div className="headerright">
          {numofitem.length > 0 ? (
            <span onClick={() => setModal(true)}>
              {" "}
              <div className="badge">{numofitem?.length}</div>
              <img src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png" />{" "}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default FoodPageHeader;
