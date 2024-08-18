import React, { useState } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../Components/Food Display/FoodDisplay";
import AppDownload from "../../Components/AppDownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("all");
  return (
    <div className="home">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  );
};

export default Home;
