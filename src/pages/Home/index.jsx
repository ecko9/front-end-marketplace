import React from 'react'
import RealEstateList from 'components/RealEstateList'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LoginButton from 'components/buttons/LoginButton';
       
const Home = () => {

  return (
    <Box>
      <LoginButton />
        <Typography variant="h2" component="div"  sx={{ mr: 4 } }>
          Bienvenue sur Immobills, venez vendre ou acheter vos biens!
        </Typography>
    </Box>
  )
}
    
export default Home
