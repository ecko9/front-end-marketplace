import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUserRequest, fetchUserError, fetchUserRegisterSuccess } from 'store/user/actions'
import APIManager from 'services/Api'
import { Button, Box, Stack, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const SignInForm = () => {

  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(fetchUserRequest())
    const response = await APIManager.signInUser(email, password)
    response.status = 200 ?
      dispatch(fetchUserRegisterSuccess(response.user)) :
      dispatch(fetchUserError(response.error))
    console.log("LA REPONSE EST =>", response)
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Stack spacing={4} >
        <TextField
          label="Email" id="email-input" type="email"
          variant="outlined" required
          onChange={e => setEmail(e.target.value)}
        />

        <TextField
          label="Password" id="password-input" type="password"
          variant="outlined" required
          onChange={e => setPassword(e.target.value)}
        />
        <Box display="flex" justifyContent="center">
          <Button variant="contained" color="primary" type="submit">
            Valider
          </Button>
        </Box>
      </Stack>
      <Link to="/profile">
        profile
      </Link>
    </form>
  )
}

export default SignInForm