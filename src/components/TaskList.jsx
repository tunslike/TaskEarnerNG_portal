import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import ListCard from './ListCard';

const TaskList = (props) => {
  return (
    <section className='md:max-w-[1100px] mx-auto my-10'>
        <div className='task-body'>
            <div className='flex justify-between items-center'>
                <div className='flex items-baseline pb-2 gap-5'>
                    <h1 className='ml-4'>{props.title}</h1>
                    <h6>
                        46 Tasks Available
                    </h6>
                </div>
                <a>View All <FaArrowRightLong /></a>
            </div>
            <div className='task-box'>
                <ListCard />
                <ListCard />
            </div>
        </div>
    </section>
  )
}

export default TaskList