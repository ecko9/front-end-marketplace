import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { Image } from 'cloudinary-react'
import APIManager from 'services/Api'
import { useSelector } from 'react-redux'

const cloudName = "thefinalproject"
const uploadPreset = "qxdc6yj1"

const FileDropzone = ({user}) => {
const [uploadedFilesID, setUploadedFilesID] = useState([])
const store = useSelector(state => state) 
  
  const onDrop = useCallback((acceptedFiles) => {
    
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
    acceptedFiles.forEach(async (file) => {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("upload_preset",uploadPreset) // Needed to upload on cloudinary

      const response = await fetch(url,{
        method: 'post',
        body: formData
      })
      const data = await response.json()
      console.log("DATA", data)
      setUploadedFilesID([...uploadedFilesID, data.public_id])
    })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  uploadedFilesID.forEach(async (fileID) =>{
    APIManager.updateUserAvatar(fileID, store.userReducer.user.id)
  }
  )


  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accepts: "image/*", /* */
    multiple: false,
  })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
      {console.log("uploadedFilesID", uploadedFilesID)}
      <ul>
        {uploadedFilesID.map(fileID => (
          <li key={fileID}>
            <Image 
              cloudName={cloudName}
              publicId={fileID}
              width="300"
              crop="scale"
            />
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default FileDropzone