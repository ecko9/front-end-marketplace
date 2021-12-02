import React, { useEffect, useState } from 'react'
import RealEstateList from 'components/RealEstateList'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import AvatarUploader from 'components/upload/AvatarUploader';
import APIManager from 'services/Api';

const Home = () => {
  const [list, setList] = useState(null)

  const HandleList = async () => {
    const response = await APIManager.showRealEstateList()
    setList(response.list)
  }

  useEffect (() => {
    HandleList()
  },
  []
  )

  return (
    <Box>
      <AvatarUploader />
      <Typography variant="h2" component="div"  sx={{ mr: 4 } }>
        Bienvenue sur Immobills, venez vendre ou acheter vos biens!
      </Typography>
      <RealEstateList list={list}/>
    </Box>
  )
}
    
export default Home
