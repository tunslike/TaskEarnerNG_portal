import React from 'react'
import { BiAnalyse } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";


const EngagementItem = ({title, desc, price, isSelected, onSelect}) => {
  return (
    <div onClick={onSelect} className='w-full cursor-pointer gap-x-6 flex bg-[#f5f5f5] justify-between items-center mb-2 rounded-[0.7rem] p-3'>

            <BiAnalyse className={`${isSelected ? 'text-primaryOrange' : ' text-[#bfbfbf]'} text-[1.5rem] ml-2`}/>
      
            <div className='flex-1'>
                <h1 className='text-primaryBlue text-[0.9rem] font-[500]'>{title}</h1>
                <p className='text-[#696969] font-[400] text-[0.78rem]'>{desc}</p>
            </div>

            <div className='flex items-center gap-x-4'>
                <h1 className={`${isSelected ? 'bg-primaryOrange text-white' : 'border border-primaryOrange text-primaryOrange'} text-[0.8rem] font-[500] rounded-[1rem] py-[2px] px-3`}>₦ {price}</h1>
                {isSelected && 
                    <FaCheck className='text-primaryOrange' />
                }
            </div>
    </div>
  )     
}

export default EngagementItem