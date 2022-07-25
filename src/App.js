import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./index.css";
import HeadCards from "./components/HeadCards";
import Food from "./components/Food";
import Category from "./components/Category";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <HeadCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
