import React, { FC, useCallback, useState } from 'react';
import ProfileCard from './profile-card.component';
import { TimeCategories } from '../../model/time-categories.model';

type ProfileCardContainerProps = {
  activeNavLink: TimeCategories;
  onNavLinkClick: (timeCategory: TimeCategories) => void;
};

const ProfileCardContainer: FC<ProfileCardContainerProps> = ({
  activeNavLink,
  onNavLinkClick,
}) => {
  const [loading] = useState(false);

  const handleNavLinkClick = useCallback(
    (navLink: TimeCategories) => {
      onNavLinkClick(navLink);
    },
    [onNavLinkClick],
  );

  return (
    <ProfileCard
      activeNavLink={activeNavLink}
      onNavClick={handleNavLinkClick}
      loading={loading}
    />
  );
};

export default ProfileCardContainer;
