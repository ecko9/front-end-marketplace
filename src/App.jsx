import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import NavBar from 'components/NavBar';
import Cookies from 'js-cookie'
import { fetchUserSignInSuccess, fetchUserRequest, fetchUserError, fetchAllAvatarSuccess } from 'store/user/actions';
import APIManager from 'services/Api';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';

const App = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.themeReducer.theme)

  React.useEffect( // sign in user if he have a valid jwt
    () => {
      const signInWithJwt = async() =>{
        const jwt = Cookies.get('token')
        console.log('jwt =', jwt)
        if(jwt){
          dispatch(fetchUserRequest)
          const response = await APIManager.signInUserJwt()
          response.error ? 
            dispatch(fetchUserError(response.error)) :
            dispatch(fetchUserSignInSuccess(response)) 
        }
      }
      signInWithJwt()
    },[dispatch]
  )

  React.useEffect( // setup all avatars in store
    () => {
      const fetchAllAvatars = async() =>{
        dispatch(fetchUserRequest)
        const response = await APIManager.getAllAvatars()
        response.error ? 
          dispatch(fetchUserError(response.error)) :
          dispatch(fetchAllAvatarSuccess(response)) 
      }
      fetchAllAvatars()
    }, [dispatch]
  )
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
            <Route path="/profile" element={<Profile />} exact />
            <Route path="/profile/:id" element={<Profile />} exact />
          </Routes>
        </Router>

      </ThemeProvider>
    </div>
  );
}
export default App;

