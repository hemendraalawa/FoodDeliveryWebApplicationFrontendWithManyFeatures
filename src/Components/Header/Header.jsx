import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-bg">
        <div className="header-content">
          <div>
            <h2>Order Your</h2>
            <h2>Favourite Food Here</h2>
          </div>
          <p>
            Welcome to our food delivery website, where we bring you fast,
            reliable, and convenient access to delicious, fresh, and hot meals.
            Enjoy a wide variety of affordable and tasty dishes, from savory and
            spicy to crispy and juicy, ensuring every bite is flavorful and
            satisfying.
          </p>
          <button>View Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
