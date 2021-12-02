import React from 'react';
import { Card, CardContent } from '@mui/material';
import FileDropZone from 'components/upload/FileDropzone/FileDropzone'
// import { useSelector } from 'react-redux';

const AvatarUploader = () => {

  // const store = useSelector(state => state) 

  return (
    <Card >
      <CardContent>
        {/* Le FileDropzone crée un dropzone (click ou drag & drop) pour ajouter des images,
          Il est enfermé dans la carte donc vous pour modifier le css de la card pour 
          en changer l'affichage */}
        <FileDropZone  />
        {/* console.log("store",store) */}
      </CardContent>
    </Card>
  );
}

export default AvatarUploader
