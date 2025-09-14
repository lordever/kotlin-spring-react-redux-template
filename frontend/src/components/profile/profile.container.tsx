import React, { useState } from 'react';
import Profile from './profile.component';

const ProfileContainer = () => {
  const [loading, setLoading] = useState(true);

  return <Profile loading={loading} />;
};

export default ProfileContainer;
