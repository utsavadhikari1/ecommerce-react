import React from "react";
import "./App.css";
import Header from "./components/header.js";
import Frame from "./components/frame.js";
import Products from "./components/Products";
import FeatureCard from "./components/FeaturesCard";

const App = () => {
  return (
    <div>
      <Header />
      <Frame />
      <h2 className=" text-4xl font-bold text-center mt-20">Products</h2>
      <Products />
      <FeatureCard />
    </div>
  );
};

export default App;
