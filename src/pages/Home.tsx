import React from "react";
import Navbar from "../components/Navbar";
import TopBar from "../TopBar"; 
import Hero from "../components/Hero";
import Categories  from "../components/Categories";
import ProductCategories from "../components/ProductCategories";

const Home = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <Categories />
      <ProductCategories />
    </div>
  );
};

export default Home;