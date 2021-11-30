import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import RealEstateList from 'components/RealEstateList';
import Profile from 'pages/Profile';
import NavBar from 'components/NavBar';
import UserProfile from './pages/UserProfile'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        
        <Routes>
          <Route path="/user" element={<UserProfile/>} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

