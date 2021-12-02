import React, { useEffect } from 'react';
import { useState } from 'react';
import APIManager from 'services/Api';
import RealEstateCard from 'components/RealEstateCard';
import { Grid } from '@mui/material';

const RealEstateList = (props) => {
  return (
    <Grid container spacing={1}>
      {props.list? props.list.map(realEstate => <RealEstateCard realEstate={realEstate}/>) : <p>Loading... </p>}
    </Grid>
  );
};

export default RealEstateList;