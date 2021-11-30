import React from 'react'
import Home from 'pages/Home';
import Login from 'pages/Login';
import { BrowserRouter as Router,
Routes, Route } from 'react-router-dom';
import NavBar from 'components/NavBar';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
    
