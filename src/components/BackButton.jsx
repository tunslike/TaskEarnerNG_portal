import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";

const BackButton = ({to}) => {
  return (
    <Link className='flex gap-x-2 items-center mb-6 hover:bg-[#0582ff] hover:text-white text-[0.8rem] w-[90px] text-[#0582ff] border border-[#0582ff] px-4 py-[6px] rounded-[1rem]' to={to ? to : -1}><FaArrowLeftLong /> Back</Link>
  )
}

export default BackButton
