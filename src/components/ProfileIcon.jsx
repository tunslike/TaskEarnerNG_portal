import React from "react";
import { SlUser } from "react-icons/sl";
import { Tooltip } from 'react-tooltip';

const ProfileIcon = () => {
  return (
    <div className="flex items-center justify-center bg-[#f3f3f3] text-white w-24 h-24 rounded-full">
      <SlUser className="text-[2.5rem] text-primaryOrange" />
    </div>
  );
};

export default ProfileIcon;