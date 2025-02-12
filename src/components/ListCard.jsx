import React from 'react'

const ListCard = ({onSelect}) => {
  return (
    <div onClick={onSelect} title='View Tasks' className='list-item-box'>
    <img src='./img1.jpg' />
        <div className='px-4 pb-5'>
            <div>
                <h1>Follow JumpTask</h1>
                <p>BetFolio 2.0 offers daily prediction games for token prices.</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <h5 className='text-primaryOrange text-[0.8rem] font-[400]'>Earnings:</h5> 
                <h4 className='bg-primaryOrange text-[0.8rem] px-4 py-1 text-white font-[500] rounded-[1rem]'>₦ 50</h4>
            </div>
          </div>
    </div>
  )
}

export default ListCard