import React, { useState, useEffect, createContext } from "react";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
  
import './index.css';

function App() {
    
    return (
      <main className="main-container">
        <Navbar />
        <Router>
          {/*{!loading ? (<AppProvider FunctionContext={FunctionContext} token={localStorage.token}>*/}
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
        <Footer />
      </main>
    );
  }
  
export default App;

