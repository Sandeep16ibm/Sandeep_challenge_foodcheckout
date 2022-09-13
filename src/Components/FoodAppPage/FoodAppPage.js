import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const FoodAppPage = () => {
  return (
    <div className="homeParent">
      <div className="innerBox">
        <h1>Welcome to Food's Kitchen </h1>
        <Link to="/FoodMenu">Go To Menu</Link>
      </div>
    </div>
  );
};

export default FoodAppPage;
