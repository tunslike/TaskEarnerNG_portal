import React, {useState} from 'react'

const PlatformIcon = ({img, title, pricing, isSelected, onSelect}) => {

    return (
        <div className='platform-icon' onClick={onSelect}>
            <img className={`${isSelected ? 'border-2 border-primaryOrange' : 'border-2 border-transparent'}`} src={img} width={110} />
            <h3 className={`${isSelected ? 'text-primaryOrange' : 'text-primaryBlue'}`}>{title}</h3>
            <h4 className='mt-3'><span className={`${isSelected ? 'bg-primaryOrange text-white' : 'bg-[#efefef] text-primaryBlue'}  px-2 py-1 text-[0.7rem] rounded-[1rem]`}>₦{pricing}</span> <span className='font-[500] text-[0.7rem]'>Per Post</span></h4>
        </div>
    )
}

export default PlatformIcon