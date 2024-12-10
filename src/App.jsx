import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Dashboard/Login";
import Register from "./Dashboard/Register";
import AdminPanel from "./Dashboard/AdminPanel";
import Navbar from "./Components/Navbar";
import Home from "./page/Home";
import About from "./page/About";
import Shop from "./page/Shop";
import Product from "./page/Product";
import Pages from "./page/Pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/shop"
          element={
            <>
              <Navbar />
              <Shop />
            </>
          }
       
        />
        <Route
          path="/product"
          element={
            <>
              <Navbar />
              <Product />
            </>
          }
        />
         <Route
          path="/pages"
          element={
            <>
              <Navbar />
              <Pages />
            </>
          }
      />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
