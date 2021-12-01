import React from 'react'
import {Typography, Box } from '@mui/material';

const ProfileInfo = ({profile}) => {
  return (
    <Box>
      <Typography variant="h2" color="primary" component="p">
        Profile
      </Typography>
      <Typography variant="h6" component="p">
        Username: {profile.username}
      </Typography>
      <Typography variant="h6" component="p">
        Email: {profile.email}
      </Typography>
    </Box>
  )
}
    
export default ProfileInfo
