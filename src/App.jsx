import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import NavBar from 'components/NavBar';
import Cookies from 'js-cookie'
import { fetchUserSignInSuccess, fetchUserRequest, fetchUserError } from 'store/user/actions';
import APIManager from 'services/Api';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch()

  React.useEffect( // sign in user if he have a valid jwt
    () => {
      const signInWithJwt = async() =>{
        const jwt = Cookies.get('token')
        if(jwt !== '')
          dispatch(fetchUserRequest)
          const response = await APIManager.signInUserJwt()
          response.error ? 
            dispatch(fetchUserError(response.error)) :
            dispatch(fetchUserSignInSuccess(response)) 
      }
      signInWithJwt()
    },[dispatch]
  )

  return (
    <div className='App'>
      <Router>
        <NavBar />
        
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

