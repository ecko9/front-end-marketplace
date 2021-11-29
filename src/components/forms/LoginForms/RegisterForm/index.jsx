import React ,{useState} from 'react'
import {Button, TextField} from '@mui/material'
import { useDispatch } from 'react-redux'
import { fetchUserRequest, fetchUserError, fetchUserRegisterSuccess } from 'store/user/actions'
import APIManager from 'services/Api'

const RegisterForm = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [username, setUsername] = useState('')

  const handleRegister = async (event) => {
    event.preventDefault()

    dispatch(fetchUserRequest())
    const response = await APIManager.registerUser(email, password, passwordConfirmation, username)
    response.status = 200 ? 
      dispatch(fetchUserRegisterSuccess(response.user)) :
      dispatch(fetchUserError(response.error))
  }

  return (
    <form onSubmit={handleRegister}>
      <TextField label="Email" id="email-input" type="email" variant="outlined" required
        onChange={e => setEmail(e.target.value)}/>
      <TextField label="Password" id="password-input" type="password" variant="outlined" required
        onChange={e => setPassword(e.target.value)}/>
      <TextField label="Confirmation" id="confirmation-input" type="password" variant="outlined" required
        onChange={e => setPasswordConfirmation(e.target.value)}/>
      <TextField label="Username" id="username-input" variant="outlined" required
        onChange={e => setUsername(e.target.value)}/>

      <Button variant="contained" color="primary" type="submit">
        Valider
      </Button>
    </form>
  )
}
    
export default RegisterForm
