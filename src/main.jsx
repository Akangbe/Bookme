import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

// import Home from ".";
import PrivacyPolicy from "./PrivacyPolicy/Privacypolicy";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);
