import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import RealEstateList from 'components/RealEstateList';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/RealEstates" element={<RealEstateList/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
    
