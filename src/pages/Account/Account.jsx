import React, {useState} from 'react';
import { Header, SideBar } from '../../components';
import { RxDashboard } from "react-icons/rx";
import { GoInfo } from "react-icons/go";
import { FaTasks } from "react-icons/fa";


const Account = () => {
  return (
    <>
      <div className='md:max-w-[1250px] mx-auto my-6 mb-10'>
      <Header />

      <div className="flex md:max-w-[1150px] mx-auto gap-x-8 mt-[8rem]">

          {/* Left Column - 30% */}
          <div className="w-[40%] bg-white shadow-sm rounded-[1.5rem] relative">

              {/* Side Bar */}
                  <SideBar />
              {/* Side Bar */}

          </div>

          {/* Right Column - 70% */}
          <div className="w-full mt-[2rem]">

            <div className='flex gap-x-4 items-center mb-4 -mt-6'>
                <RxDashboard className='text-primaryOrange text-[1.3rem]'/>
                <h2 className="font-[500] text-[1.2rem]">My Completed Tasks</h2>
            </div>
            <div className='bg-white min-h-[300px] shadow-sm rounded-[1.5rem] p-4'>
                <div className='flex justify-center items-center min-h-[300px]'>
                  <div>
                    <GoInfo className='text-[2.5rem] text-[#cfcfcf] mx-auto mb-2' />
                    <h5 className='text-primaryOrange text-[0.8rem]'>You are yet to complete any task! Please see recommended tasks below</h5>
                  </div>
                </div>
          </div>

          <div className='flex gap-x-4 items-center ml-4 mt-11 mb-4'>
            <FaTasks className='text-primaryOrange text-[1.3rem]'/>
            <h2 className="font-[500] text-[1.2rem]">Recommended For You</h2>
          </div>

          <div className='bg-white min-h-[400px] shadow-sm rounded-[1.5rem] p-4'>
          <div className='flex justify-center items-center min-h-[300px]'>
            <div>
              <GoInfo className='text-[2.5rem] text-[#cfcfcf] mx-auto mb-2' />
              <h5 className='text-primaryOrange text-[0.8rem]'>You are yet to complete any task! Please see recommended tasks below</h5>
            </div>
          </div>
    </div>


          </div>
    </div>

    </div>
    </>
  )
}

export default Account;