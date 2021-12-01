import AvatarForm from 'components/forms/profileForms/AvatarForm';
import RealEstateForm from 'components/forms/profileForms/RealEstateForm';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import APIManager from 'services/Api'
import ProfileInfo from 'components/ProfileInfo';

const Profile = () => {
  const userStore = useSelector(state => state.userReducer)
  const [profile, setProfile] = useState({ username: "", email: "" })
  const [realEstates, setRealEstates] = useState()
  const { id } = useParams()


  useEffect(
    () => {
      const fetchUserProfile = async () => {
        const userID = id || userStore.user.id
        const response = await APIManager.getUserProfile(userID)
        setProfile(response.user)
        setRealEstates(response.real_estates)
      }
      fetchUserProfile()
    },
    [userStore, id]
  )



  return (
    <div className="Profile">
      <h2>Profile</h2>
      <AvatarForm />
      <ProfileInfo profile={profile} />
      <h2>New Real Estate</h2>
      <RealEstateForm />
    </div>
  );
};

export default Profile;