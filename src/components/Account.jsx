import React, {useState, useEffect} from 'react'
import { IoWalletOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { useAuth } from "../context/AuthContext";
import { useSelector } from 'react-redux';
import { fetchEarningBalance } from '../services/TasksService';
import {updateEarningsBalance} from '../store/subscriberSlice'

const Account = () => {

  const subscriberData = useSelector((state) => state.subscriber.subscriberData)
  const earningsBalance = useSelector((state) => state.subscriber.earningsBalance)
  const [activeMember, setActiveMember] = useState('');

  const [balance, setBalance] = useState(null)


   // fetch earnigs
   const fetchEarnings = async () => {

    try {

      const response = await fetchEarningBalance(subscriberData.subscriberId);

      setBalance(response);
      dispatch(updateEarningsBalance(response));

    }catch(e) {
      console.log(e.error)
    }

  }

  
  useEffect(() => {

      //check active subscription
      setActiveMember(subscriberData.subscription)

      // fetch earnings
      fetchEarnings();

  }, [])
  

  return (
    <section className='md:max-w-[1100px] mx-auto mt-[85px]'>
      <div className='display-box'>
        <div className='flex items-center justify-between gap-5 w-full'>
        <div className='flex items-center gap-5'>
            <h1>Welcome, {subscriberData.firstname}</h1>
            {
              (activeMember) ?
              <div className='bg-green-600 text-white px-3 rounded-[1rem] py-1 text-[0.65rem]'>Active Member</div>
              :
              <div className='bg-red-600 text-white px-3 rounded-[1rem] py-1 text-[0.65rem]'>Member not active</div>
            }
            
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
                <h1>₦{balance?.totalEarnings.toFixed(2)}</h1>
            </div>

            <div className='bg-[#f1fbf9] account-box'>
            <IoWalletOutline className='mb-4 text-[#9bcfc0] text-[2.5rem]' />
            <h4 className='text-[#545756]'>Wallet Balance</h4>
            <h1>₦{balance?.walletBalance.toFixed(2)}</h1>
        </div>

            <div className='bg-[#f9f0ed] account-box'>
                <LuLogOut className='mb-5 text-[#daaf63] text-[2.3rem]' />
                <h4 className='text-[#d1c1a5]'>Total Withdrawal</h4>
                <h1 className='text-red-500'>₦{balance?.totalWithdrawal.toFixed(2)}</h1>
        </div>
        </div>
      </div>


      {
        (!activeMember) &&

        <div className='bg-[#daedf7] border border-[#bde8f1] mt-10 ml-2 mr-2 text-[#31718f] rounded-[0.7rem] p-4'>
        <h4 className='font-[500] text-[0.85rem] text-[#0b2c3e]'>MEMBERSHIP ACTIVATION IS REQUIRED TO GET STARTED</h4>
        <p className='text-[0.78rem] mt-4'>To get started, you will need to activate a one-time membership fee of ₦1,000 and with your membership you will unlimited access to earn more on tasks on TaskEarners.ng</p>
        <button className='bg-primaryOrange hover:bg-[#ff7e2e] text-white mt-5 px-4 py-2 rounded-[2rem] text-[0.8rem]'>
          Click here to Pay Now
        </button>
  </div>

      }
    
    </section>
  )
}

export default Account
