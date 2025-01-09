import React from 'react'

const TaskCard = (props) => {
  return (
    <div>
        <div className='task-card'>
            <img src={props.img} />
            <div>
                <h1>Follow 0x0x Agent on X!</h1>
                <p>Earn money for watching a video and following the provided instructions!</p>
                <div className='flex items-center gap-2 mt-4'>
                    <h5 className='text-primaryOrange text-[0.8rem] font-[400]'>Earnings:</h5> 
                    <h4 className='bg-primaryOrange text-[0.8rem] px-4 py-1 text-white font-[500] rounded-[1rem]'>₦ 50</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TaskCard;