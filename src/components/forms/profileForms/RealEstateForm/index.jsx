import React from 'react';
import { Box, Button, Input, Stack, TextField } from '@mui/material'
import APIManager from 'services/Api';

const RealEstateForm = () => {

  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState(null);
  const [description, setDescription] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    let files = document.getElementById('upload-images').files
    const formData = new FormData();

    for (let file of files)
      formData.append('images[]', file);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('sold', false);
    formData.append('description', description);
    formData.append('user_id', 2);
    formData.append('city_id', 1);

    const response = await APIManager.createRealEstate(formData);
  }

  return (
    <Box className="RealEstateForm">
      <Stack spacing={4} >

        <TextField
          label="Name" id="name-input" type="text"
          variant="outlined" required
          onChange={e => setName(e.target.value)}
        />

        <TextField
          label="Price" id="price-input" type="number"
          variant="outlined" required
          onChange={e => setPrice(e.target.value)}
        />

        <TextField
          label="Description" id="description-input" type="text"
          variant="outlined" required
          onChange={e => setDescription(e.target.value)}
        />

        <input accept="image/*" multiple type="file" id="upload-images" />

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>

      </Stack>
    </Box>
  );
};

export default RealEstateForm;