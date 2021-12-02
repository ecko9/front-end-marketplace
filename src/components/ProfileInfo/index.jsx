import React from 'react'
import { Typography, Box, Avatar } from '@mui/material';

const ProfileInfo = ({ profile }) => {
  return (
    <Box>
      <Typography variant="h2" color="primary" component="p">
        Profile
      </Typography>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: "blue" }}>{profile.username[0]}</Avatar>
      </Stack>
      <Typography variant="h6" component="p">
        Username: {profile.username}
      </Typography>
      <Typography variant="h6" component="p">
        Email: {profile.email}
      </Typography>
    </Box >
  )
}

export default ProfileInfo
