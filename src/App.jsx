import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import NavBar from 'components/NavBar';
import { useSelector } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
const App = () => {
  const theme = useSelector(state => state.themeReducer.theme)
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        {/* Needed in order that css base properties like body background color  match the current theme 
          if you want to disable it or overwrite it in a specific component use Paper from @mui/material/paper
          Paper info => https://mui.com/components/paper/#main-content
        */}
        <CssBaseline /> 

        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>

      </ThemeProvider>
    </div>
  );
}
export default App;

