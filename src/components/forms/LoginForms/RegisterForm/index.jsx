import React from 'react'
import {Button, TextField} from '@mui/material'
import { useDispatch } from 'react-redux'
import { fetchUserRequest, fetchUserError, fetchUserRegisterSuccess } from 'store/user/actions'
import APIManager from 'services/Api'

const RegisterForm = () => {
    const dispatch = useDispatch()

    const handleRegister = async (event) => {
      event.preventDefault()
      const email = event.target.querySelector('#email-input').value
      const password = event.target.querySelector('#password-input').value
      const password_confirmation = event.target.querySelector('#confirmation-input').value
      const username = event.target.querySelector('#username-input').value
      
      dispatch(fetchUserRequest())
      const response = await APIManager.registerUser(email, password, password_confirmation, username)
      response.status = 200 ? 
        dispatch(fetchUserRegisterSuccess(response.user)) :
        dispatch(fetchUserError(response.error))
      

    }
  return (
    <form onSubmit={handleRegister}>
      <TextField label="Email" id="email-input" type="email" variant="outlined" required/>
      <TextField label="Password" id="password-input" type="password" variant="outlined" required/>
      <TextField label="Confirmation" id="confirmation-input" type="password" variant="outlined" required/>
      <TextField label="Username" id="username-input" variant="outlined" required/>
      <Button variant="contained" color="primary" type="submit">
        Valider
      </Button>
    </form>
  )
}
    
export default RegisterForm
