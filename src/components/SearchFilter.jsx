import React from 'react'

const SearchFilter = (props) => {
  return (
    <button className='border border-primaryOrange hover:bg-primaryOrange hover:text-white hover:border-primaryOrange text-primaryOrange text-[0.8rem] px-[1.2rem] py-[0.45rem] rounded-[1rem]'>
        {props.title}
    </button>
  )
}

export default SearchFilter