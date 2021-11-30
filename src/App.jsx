import React from 'react'
import Home from 'pages/Home';
import Login from 'pages/Login';
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';
import Profile from 'pages/Profile';
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

