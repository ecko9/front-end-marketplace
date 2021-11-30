import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchUserRequest, fetchUserError, fetchUserSignOutSuccess } from 'store/user/actions'
import APIManager from 'services/Api'
import { useNavigate } from 'react-router'
import { Button } from '@mui/material'

const LoginButton = () => {
  const user = useSelector(state => state.userReducer.user)
  const [btnContent, setBtnContent] = useState("Login")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = async() => {
    if(Object.keys(user).length > 0) {
      dispatch(fetchUserRequest())
      const response = await APIManager.signOutUser()
      response.error ? 
        dispatch(fetchUserError(response.error)) :
        dispatch(fetchUserSignOutSuccess(response))
    } else {
      navigate("/login")
    }

  }

  React.useEffect(
    ()=> {
      console.log(user)
      if(Object.keys(user).length > 0) 
        setBtnContent("Logout")
    },[user]
  )

  return (
    <Button 
      variant='contained' 
      color='primary' 
      onClick={handleClick}
    >
      {btnContent}
      {console.log("qdsoijf",user)}
    </Button>
  )
}
    
export default LoginButton
