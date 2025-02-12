import React from 'react'
import { Header, SideBar, BackButton } from '../../components';
import { Link } from 'react-router-dom'
import { GoInfo } from "react-icons/go";
import { BsBasket3 } from "react-icons/bs";

const Orders = () => {
  return (
    <>
    <div className='md:max-w-[1250px] mx-auto my-6 mb-10'>
    <Header />

    <div className="flex md:max-w-[1150px] mx-auto gap-x-8 mt-[8rem]">

        {/* Left Column - 30% */}
        <div className="w-[40%] bg-white shadow-sm rounded-[1.5rem] relative">

            {/* Side Bar */}
                <SideBar active="orders" />
            {/* Side Bar */}

        </div>

        {/* Right Column - 70% */}
        <div className="w-full mt-[2rem]">

          <div className='mb-4 -mt-6'>
              
              <BackButton />

              <div className='flex gap-x-2 items-center'>
                <BsBasket3 className='text-primaryOrange text-[1.3rem]'/>
                <h2 className="font-[500] text-[1.2rem]">My Orders</h2>
              </div>
          </div>
          <div className='bg-white min-h-[500px] shadow-sm rounded-[1.5rem] p-4'>
              <div className='flex justify-center items-center min-h-[450px]'>
                <div>
                  <GoInfo className='text-[2.5rem] text-[#cfcfcf] mx-auto mb-2' />
                  <h5 className='text-primaryOrange text-[0.8rem]'>You haven't made any order yet!</h5>
                </div>
              </div>
        </div>


        </div>
  </div>

  </div>
  </>
  )
}

export default Orders
