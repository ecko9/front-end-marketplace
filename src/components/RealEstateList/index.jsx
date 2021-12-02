import React, { useEffect } from 'react';
import { useState } from 'react';
import APIManager from 'services/Api';
import RealEstateCard from 'components/RealEstateCard';
import { Grid } from '@mui/material';

const RealEstateList = () => {
  const [list, setList] = useState(null)

  const HandleList = async () => {
    const response = await APIManager.showRealEstateList()
    console.log(response)
    setList(response.data)
  }

  useEffect(() => {
    HandleList()
  },
    []
  )

  return (
    <div className="RealEstateList">
      <Grid container spacing={1}>
        {list ? list.map((realEstate, i) => <RealEstateCard realEstate={realEstate} key={i} />) : <p>Loading... </p>}
      </Grid>
    </div>
  );
};

export default RealEstateList;