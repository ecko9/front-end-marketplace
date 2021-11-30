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
    setList(response.realEstate)
  }

  useEffect (() => {
    HandleList()
  },
  []
  )

  return (
    <>
      <Grid container spacing={1}>
        {list? list.map(realEstate => <RealEstateCard realEstate={realEstate}/>) : <p>Loading... </p>}
      </Grid>
    </>
  );
};

export default RealEstateList;