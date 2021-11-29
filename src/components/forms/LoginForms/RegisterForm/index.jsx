import React from 'react'
import {Button, TextField} from '@mui/material'
const RegisterForm = () => {

    const handleRegister =() => {

    }
  return (
    <form onSubmit={handleRegister}>
      <TextField label="email" id="email-input" type="email" variant="outlined" />
      <TextField label="password" id="password-input" type="password" variant="outlined" />
      <TextField label="confirmation" id="confirmationinput" type="password" variant="outlined" />
      <Button variant="contained" color="primary">
        Valider
      </Button>
    </form>
  )
}
    
export default RegisterForm
