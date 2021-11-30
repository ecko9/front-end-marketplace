import React from 'react'
import RealEstateList from 'components/RealEstateList'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
       
const Home = () => {

  return (
    <Box>
      <Typography variant="h2" component="div"  sx={{ mr: 4 } }>
        Bienvenue sur Immobills, venez vendre ou acheter vos biens!
      </Typography>
      <RealEstateList />
    </Box>
  )
}
    
export default Home
