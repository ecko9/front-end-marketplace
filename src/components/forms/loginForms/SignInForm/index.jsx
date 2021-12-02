import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserRequest, fetchUserError, fetchUserSignInSuccess } from 'store/user/actions'
import APIManager from 'services/Api'
import { Button, Box, Stack, TextField } from '@mui/material'

const SignInForm = () => {

  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(fetchUserRequest())

    const response = await APIManager.signInUser(email, password)
    response.status = 200 ?
      dispatch(fetchUserSignInSuccess(response.user)) :
      dispatch(fetchUserError(response.error))
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
    </form>
  )
}

export default SignInForm