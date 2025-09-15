import React, { useState } from 'react';
import ProfileCard from './profile-card.component';

const ProfileCardContainer = () => {
  const [loading, _] = useState(false);

  return <ProfileCard loading={loading} />;
};

export default ProfileCardContainer;
