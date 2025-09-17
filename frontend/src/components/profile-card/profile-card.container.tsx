import React, { FC, useCallback, useEffect, useState } from 'react';
import ProfileCard from './profile-card.component';
import { TimeCategories } from '../../model/time-categories.model';
import { UserResponseModel } from '../../model/user-response.model';
import { getUserById } from '../../api/user.api';

type ProfileCardContainerProps = {
  userId: string;
  activeNavLink: TimeCategories;
  onNavLinkClick: (timeCategory: TimeCategories) => void;
};

const ProfileCardContainer: FC<ProfileCardContainerProps> = ({
  userId,
  activeNavLink,
  onNavLinkClick,
}) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserResponseModel>();

  const handleNavLinkClick = useCallback(
    (navLink: TimeCategories) => {
      onNavLinkClick(navLink);
    },
    [onNavLinkClick],
  );

  useEffect(() => {
    getUserById(userId)
      .then((data) => setUser(data))
      .finally(() => setLoading(false));
  }, [userId]);

  return (
    <ProfileCard
      userName={user?.name}
      avatarPath={user?.avatarPath}
      activeNavLink={activeNavLink}
      onNavClick={handleNavLinkClick}
      loading={loading}
    />
  );
};

export default ProfileCardContainer;
