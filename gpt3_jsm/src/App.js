import React from "react";


import {Footer , Blog, Possibility, WhatGPT3, Header } from "./containers";
import {Brand, Cta, Feature, Navbar } from './Components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
