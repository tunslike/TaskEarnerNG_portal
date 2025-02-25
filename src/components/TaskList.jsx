import React, {useState, useEffect} from 'react'

import { FaArrowRightLong } from "react-icons/fa6";
import ListCard from './ListCard';
import Modal from 'react-modal';
import { CgClose } from "react-icons/cg";
import { LuExternalLink } from "react-icons/lu";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { RiInformationLine } from "react-icons/ri";
import {TaskTimer} from '../components';
import { Link } from 'react-router-dom'
import TaskImageMatcher from '../constants/TaskImageMatcher';

const TaskList = ({title, tasks}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [taskStart, setTaskStart] = useState(null);

    // Functions to open and close the modal
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const startTaskApp = () => {
        setTaskStart(true)
    }

    const data = [
        { id: 1, name: "Alice", status: "active", img: '/insta_taskbg.png' },
        { id: 2, name: "Bob", status: "inactive", img: '/twitter_taskbg.png'  },
        { id: 3, name: "Charlie", status: "active", img: '/youtube_taskbg.png' },
        { id: 4, name: "David", status: "inactive", img: '/whatsapp_taskbg.png' },
        { id: 5, name: "Facebook", status: "inactive", img: '/facebook_taskbg.png' },
      ];

    useEffect(() => {
        console.log("Received users in child:", tasks);
      }, [tasks]);

  return (
    <section className='md:max-w-[1100px] mx-auto my-10'>
        <div className='task-body'>
            <div className='flex justify-between items-center'>
                <div className='flex items-baseline pb-2 gap-5'>
                    <h1 className='ml-4'>{title}</h1>
                    <h6>
                      0 Tasks Available
                    </h6>
                </div>
                <a>View All <FaArrowRightLong /></a>
            </div>
            <div className='task-box'>
            {/**    <ListCard onSelect={openModal} /> */}

       
                <ListCard />

            </div>


        </div>



        
         {/* Modal */}
         <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            className="bg-white rounded-[1rem] shadow-lg w-[45%]"
         >


            <div className='bg-gray-100 p-5 rounded-tl-[1rem] rounded-tr-[1rem] flex justify-between items-center'>
                    <h2 className="font-[500] text-[1.1rem]">Perform Task - <span className='text-[#006ce8]'>TE-23090</span></h2>
                    <button onClick={closeModal} className='bg-primaryOrange rounded-full p-1'>
                        <CgClose className='text-white text-[1.3rem]' />
                    </button>
            </div>

            <div className='py-2 px-10 modal-inner-body overflow-scroll'>
                
            <div className='mt-4 mb-6 flex items-center gap-x-6'>
                <div className='preview-platform-icon'>
                    <img width={110} src="./you_tube.png" />
                </div>
                <div>
                    <h6 className='text-[0.75rem] text-primaryOrange mb-2'>Complete social Media Tasks</h6>
                    <h3 className='text-copyrightBlue font-[600] text-[1.3rem]'>Follow Tunslike on X</h3>
                    <div className='bg-[#f8d7db] px-3 py-1 text-[0.7rem] mt-2 border border-[#f5c6cc] flex items-center gap-x-1 rounded-[1rem] text-[#721c25]'>
                        <RiInformationLine className='text-[1rem]'/> Please do not unfollow this profile or account after you follow it
                    </div>
                </div>
            </div>

            <h4 className='pl-5'>Social Media Page/Profile Link</h4>  
            <div className='bg-[#f9f9f9] w-full py-3 mt-2 rounded-lg mb-8 px-3 flex justify-between items-center'>
                <h6 className='text-primaryOrange text-[0.7rem] font-[400]'>https://www.facebook.com/profile.php?id=61563070051221& mibextid=ZbWkwL</h6>
                <a href="#" className='text-[#006ce8] hover:bg-[#006ce8] hover:text-white text-[0.72rem] border border-[#006ce8] px-3 py-[4px] rounded-[1rem] flex items-center gap-x-1'>Open Link <LuExternalLink /></a>
            </div>

            <h4 className='pl-5'>Task Instruction</h4> 
            <div className='overflow-scroll mb-6 min-h-[120px] w-full mt-2 p-4 rounded-[1rem] bg-[#f9f9f9]'>
            <h6 className='text-black font-[500] text-[0.8rem] mb-5'>Please follow the step-by-step instructions below to do your task:</h6>
                <ul className='text-[0.7rem] leading-6 font-[300] text-[#262525]'>  
                  
                    <li><b>Step 1:</b> Open the Task Link above on your Facebook Mobile App or browser</li>
                    <li><b>Step 2:</b> The link will direct you to a Facebook Page which you are meant to like and follow.</li>
                    <li><b>Step 3:</b> Click on the Like or Follow button on the Facebook Page to start liking or following the page. You MUST NOT Unfollow the account after you have followed the account.</li>
                    <li><b>Step 4:</b> Create a screenshot of the page that shows you have liked or followed the page and upload the screenshot under the Proof of Work Form below. You are also required to enter your Facebook Username or Name which you used to perform the task</li>
                </ul>
            </div>

                <p className='text-[#0e5461] bg-[#d1ecf1] mb-4 border border-[#bfe5eb] px-2 py-[2px] rounded-[1rem] text-[0.73rem] flex items-start gap-x-3'><IoMdInformationCircleOutline className='text-[2rem]' /> Kindly note that you can only perform this task as long as available. This task will be saved on your dashboard once you start and available for you to continue as long as it is available and valid</p>
            </div>

            <div className="flex justify-between items-center gap-2 p-4 border-t border-[#f0f0f0]">

            <h1 className='text-[0.9rem] ml-6 font-[500]'>Earnings: <span className='bg-primaryOrange text-white rounded-[1rem] px-3 py-[2px]'>₦ 50</span> </h1>

            {taskStart ? (

                <TaskTimer startTime="00:10:00" endTime="00:00:00" />

            ) : (

                <Link
                    to="/complete-task"
                    className="px-7 py-3 text-[0.80rem] flex items-center gap-x-1 bg-green-500 text-white rounded-[2rem] hover:bg-green-600 transition"
                >
                    Complete Task Now
                </Link> 
            )
            }
          </div>
        </Modal>

    </section>
  )
}

export default TaskList