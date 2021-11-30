import React from 'react'
import Home from 'pages/Home';
import Login from 'pages/Login';
import { BrowserRouter as Router,
Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div className='App'>
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
    
