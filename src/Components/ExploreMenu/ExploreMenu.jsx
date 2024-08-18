import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <div className="menu-text">
        <h2>Explore Our Menu</h2>
        <p>
          Explore our diverse menu featuring gourmet burgers, spicy wings,
          crispy fries, fresh salads, and mouthwatering desserts, all crafted
          with the finest ingredients for an unforgettable dining experience.
        </p>
      </div>

      <div className="menu-card">
        <div className="center-menu">
          {menu_list.map((item, index) => {
            return (
              <div
                onClick={
                  () =>
                    setCategory((prev) =>
                      prev === item.menu_name ? "all" : item.menu_name
                    )
                  // console.log("click hogya hai");
                }
                key={index}
                className="menu-item"
              >
                <img
                  className={category === item.menu_name ? "Active" : ""}
                  src={item.menu_image}
                  alt="Menu Img"
                />
                <p className="menu-name">{item.menu_name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;
