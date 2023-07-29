import React from "react";
import "./App.css";
import Header from "./components/header.js";
import Frame from "./components/frame.js";
import Products from "./components/Products";
import FeatureCard from "./components/FeaturesCard";
import StatCard from "./components/StatCard";
import Footer from "./components/Footer";
import Home from "./components/modules";
import { Routes, Route } from "react-router-dom";
import Product from "./components/modules";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Frame />

      <Products />
      <FeatureCard />
      <StatCard />
      <Footer />
    </div>
  );
};

export default App;
