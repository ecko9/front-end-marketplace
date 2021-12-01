import { Typography } from '@mui/material';
//import AvatarForm from 'components/forms/profileForms/AvatarForm';
import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import APIManager from 'services/Api'

const Profile = () => {
  const userStore = useSelector( state => state.userReducer)
  const [profile, setProfile] = useState({username: "", email: ""})
  const {id} = useParams()
  

  useEffect (
    () => { 
      const fetchUserProfile = async() => {
        const userID = id || userStore.user.id
        const response = await APIManager.getUserProfile(userID)
        setProfile(response)
      }
    fetchUserProfile()
  },
  [userStore, id]
  )



  return (
    <div className="Profile">
      <h2>Profile</h2>
      <Avatar>{profile.username}</Avatar>
      <Typography variant="h6" component="p">
        Username: {profile.username}
      </Typography>
      <Typography variant="h6" component="p">
        Email: {profile.email}
      </Typography>
      {console.log("Store => ",userStore.user)}
    </div> 
  );
};

export default Profile;