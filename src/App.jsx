import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Dashboard/Login";
import Register from "./Dashboard/Register";
import AdminPanel from "./Dashboard/AdminPanel";
import Navbar from "./Components/Navbar";
import Portners from "./Components/Portners";
import Ot from "./Components/ot";
import Categories from "./Components/Category";
import Xm from "./Components/Cards";

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
              <main>
                <Portners />
                <Ot />
                <Categories />
                <Xm />
              </main>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
