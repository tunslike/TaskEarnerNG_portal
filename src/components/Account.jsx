import React from 'react'
import { IoWalletOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";

const Account = () => {
  return (
    <section className='md:max-w-[1100px] mx-auto mt-[85px]'>
      <div className='display-box'>
        <div className='flex items-center justify-between gap-5 w-full'>
        <div className='flex items-center gap-5'>
            <h1>Welcome, Babatunde</h1>
            <div className='bg-green-600 text-white px-3 rounded-[1rem] py-1 text-[0.65rem]'>Active Member</div>
        </div>
         <div className='flex items-center justify-start gap-3'>
                <button className='account-btn bg-[#c91542]'>Withdraw</button>
                <button className='account-btn bg-blue-500'>Fund Wallet</button>
         </div>
        </div>
        
        <div className='flex items-center gap-5 my-7'>
            <div className='bg-[#eae8ff] account-box'>
                <img src="./money.png" width={35} className='mb-5' />
                <h4>Total Earnings</h4>
                <h1>₦450,039.00</h1>
            </div>

            <div className='bg-[#f1fbf9] account-box'>
            <IoWalletOutline className='mb-4 text-[#9bcfc0] text-[2.5rem]' />
            <h4 className='text-[#545756]'>Wallet Balance</h4>
            <h1>₦50,039.00</h1>
        </div>

            <div className='bg-[#f9f0ed] account-box'>
                <LuLogOut className='mb-5 text-[#daaf63] text-[2.3rem]' />
                <h4 className='text-[#d1c1a5]'>Total Withdrawal</h4>
                <h1>₦0.00</h1>
        </div>
        </div>

      </div>
    </section>
  )
}

export default Account
