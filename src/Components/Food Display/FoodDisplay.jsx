import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-container">
      <div className="food-display" id="food-display">
        <h2>Top Dishesh Near You</h2>
        <div className="food-display-list">
          {food_list.map((item, index) => {
            if (category === "all" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodDisplay;
