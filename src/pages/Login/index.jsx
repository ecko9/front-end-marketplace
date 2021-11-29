import React, { useState } from 'react'
import RegisterForm from 'components/forms/loginForms/RegisterForm'   
import SignInForm from 'components/forms/loginForms/SignInForm'    
import {Box, Button, Typography} from '@mui/material'
const Login = () => {
  const [isRegistered, setIsRegistered] = useState(true)
  const toggleIsRegistered = () => {
    setIsRegistered(!isRegistered)
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="1em"
    >
      <Typography variant="h2" component="p" color="primary" align="center" >
        { isRegistered ? "Sign In" : "Register" }
      </Typography>
      {isRegistered ?  <SignInForm /> : <RegisterForm />  }
      <Button variant="text" color="primary" disableRipple
        onClick={toggleIsRegistered}
      >
        {isRegistered ? "Already subscribed ?" : "Not subscribed yet ?"}
      </Button>
    </Box>
  )
}
    
export default Login
