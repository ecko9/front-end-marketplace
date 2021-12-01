import AvatarForm from 'components/forms/profileForms/AvatarForm';
import RealEstateForm from 'components/forms/profileForms/RealEstateForm';
import React from 'react';

const Profile = () => {
  return (
    <div className="Profile">
      <h2>Profile</h2>
      <AvatarForm />
      <h2>New Real Estate</h2>
      <RealEstateForm />
    </div>
  );
};

export default Profile;