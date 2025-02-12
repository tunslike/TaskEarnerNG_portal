import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

const ProfileLink = ({title, icon, to, active}) => {
  return (
       
    <Link to={to} className={`${active ? 'text-primaryOrange' : null} flex group items-center gap-x-5 mb-4 hover:text-primaryOrange bg-[#f2f2f2] hover:bg-[#ededed] p-[0.8rem] rounded-lg text-[0.84rem] font-[500]`}>
        {icon}
        <div className='flex-1'>{title}</div>
        <IoIosArrowForward className={`${active ? 'text-primaryOrange' : 'text-[#cfcfcf]'} group-hover:text-primaryOrange`} />
    </Link>
  )
}

export default ProfileLink