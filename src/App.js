import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieCard from "./components/MovieCard/MovieCard";
import Navbar from "./components/Navbar/Navbar";
import AddNew from "./components/AddNew/AddNew";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addnew" element={<AddNew />}></Route>
          <Route path="/movies/:id" element={<MovieCard />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
