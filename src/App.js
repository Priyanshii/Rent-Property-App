import React from "react";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import SearchedProperties from "./components/SearchedProperties";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchedProperties />} />
          <Route path="/Favourites" element={<Favourites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
