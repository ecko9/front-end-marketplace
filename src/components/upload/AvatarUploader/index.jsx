import React from 'react';
import { Card, CardContent } from '@mui/material';
import MultipleFilesDropZone from 'components/upload/FileDropzone'
// import { useSelector } from 'react-redux';

const AvatarUploader = () => {

  // const store = useSelector(state => state) 

  return (
    <Card >
      <CardContent>
        {/* Le FileDropzone crée un dropzone (click ou drag & drop) pour ajouter des images,
          Il est enfermé dans la carte donc vous pour modifier le css de la card pour 
          en changer l'affichage*/}
        <MultipleFilesDropZone  />
        {/* console.log("store",store) */}
      </CardContent>
    </Card>
  );
}

export default AvatarUploader
