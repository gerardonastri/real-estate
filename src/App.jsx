import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import Home from './pages/Home/Home'
import Property from './pages/Property/Property'
import Search from './pages/Search/Search'



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/property/:id" element={<Property />} />
        {/* <Route exact path="/profile/:id" element={<Profile />} />
        <Route exact path="/edit/:id" element={<Edit />} />
        <Route exact path="/search" element={<Search />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
