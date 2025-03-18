import React from 'react'
import { ProfileIcon, ProfileLink } from '../components';
import { FiSettings } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { BsBasket3 } from "react-icons/bs";
import { LuLayoutList } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { LiaMoneyBillAltSolid } from "react-icons/lia";
import { useSelector } from 'react-redux';
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';

const SideBar = (props) => {

  const subscriberData = useSelector((state) => state.subscriber.subscriberData)

  return (
    <div>
    <button className='bg-[#f3f3f3] p-2 rounded-[0.8rem] -mt-8 mr-4 absolute right-0'>
    <FiSettings 
      className='text-primaryOrange text-[1.3rem]' 
      data-tooltip-id="tip01" 
      data-tooltip-place='top' 
      data-tooltip-content="Account Settings"
    />
    <Tooltip id="tip01" style={{fontSize: 12}} className='text-[0.8rem]' />
  </button>

  <div className='mt-[3rem] flex justify-center'>
      <ProfileIcon />
  </div>
  

  <div className='mt-5 flex gap-2 items-center justify-center'>
    <h1 className='text-copyrightBlue font-[500] text-[1.3rem]'>{`${subscriberData.firstname} ${subscriberData.lastname}`}</h1>
    <Link 
        to="/manageProfile"
        title='Edit Profile' 
        className='hover:bg-[#f3f3f3] rounded-full p-1'
        data-tooltip-id="profileTip" 
        data-tooltip-place='top' 
        data-tooltip-content="Manage Profile"
    >
      <MdEdit className='hover:text-primaryOrange text-[#507178] text-[1.1rem]' />
    </Link>
    <Tooltip id="profileTip" style={{fontSize: 12}} className='text-[0.8rem]' />
</div>
<h5 className='text-center text-primaryOrange text-[0.8rem]'>@{subscriberData.username}</h5>

<div className='border-t border-b border-[#f3f3f3] py-7 px-7 mt-6'>
    <h1 className='text-[1.1rem] font-[500]'>Total Earnings</h1>
    <h1 className='text-primaryOrange text-[2rem]'>₦ 50,039.00</h1>
    <h5 className='text-[#a1a5a8] text-[0.8rem] mt-5'>Minimum payout amount: <span className='text-primaryOrange'>₦5,000</span></h5>

    <button className='group bg-[#1b7652] flex justify-center py-[0.7rem] hover:font-[500] hover:text-white gap-x-2 items-center w-full mt-2 hover:bg-[#25a773] rounded-lg font-[500] text-[0.85rem] text-[#ffffff] border-[#25a773]'>
      Withdraw
      <LuLogOut className='text-[#ffffff] group-hover:text-white font-bold text-[1rem]' />
    </button>
</div>

<div className='p-7'>
    <ProfileLink title="Orders" active={(props.active == 'orders') ? true : null} to="/orders" icon={<BsBasket3 className='text-primaryOrange text-[1rem]' />} />
    <ProfileLink title="Payments" active={(props.active == 'payments') ? true : null} to="/transactions" icon={<LiaMoneyBillAltSolid className='text-primaryOrange text-[1rem]' />} />
    <ProfileLink title="Withdrawals" active={(props.active == 'withdrawal') ? true : null} to="/withdrawal" icon={<LiaMoneyBillWaveSolid className='text-primaryOrange text-[1rem]' />} />
    <ProfileLink title="Manage Tasks" active={(props.active == 'tasks') ? true : null} icon={<LuLayoutList className='text-primaryOrange text-[1rem]' />} />
    <ProfileLink title="Notifications" active={(props.active == 'notification') ? true : null} icon={<IoNotificationsOutline className='text-primaryOrange text-[1rem]' />} />
    <ProfileLink title="Customer Support" icon={<IoChatbubblesOutline className='text-primaryOrange text-[1rem]' />} />
    <button className='border hover:bg-primaryOrange hover:text-white flex justify-center mt-[2rem] items-center gap-x-2 text-primaryOrange border-primaryOrange p-[0.8rem] rounded-lg text-[0.84rem] font-[500] w-full'>
      Logout <HiOutlineLogout className='text-[1.1rem]' />
    </button>
</div>
    </div>
  )
}

export default SideBar
