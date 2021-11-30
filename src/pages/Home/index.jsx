import React from 'react'
import RealEstateList from 'components/RealEstateList'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
       
const Home = () => {

  return (
    <>
      <Box>
          <Typography variant="h2" component="div"  sx={{ mr: 4 } }>
            Bienvenue sur Immobills, venez vendre vos biens!
          </Typography>
      </Box>
      <div className='Home'>
        <RealEstateList />
      </div>
    </>
  )
}
    
export default Home
