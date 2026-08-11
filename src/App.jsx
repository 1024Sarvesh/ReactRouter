import React from "react";
import { Routes,Route } from "react-router";
import Header from "./components/Header/Header";
import footer from "./components/Footer/footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="" element={<Header/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/" element={<footer/>}></Route>
    </Routes>
  );
}

export default App;
