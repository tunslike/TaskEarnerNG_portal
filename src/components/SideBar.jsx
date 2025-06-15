import React, {useState, useEffect} from 'react'
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
import Modal from 'react-modal';
import { fetchEarningBalance, submitWithdrawlRequest } from '../services/TasksService';
import { CgClose } from "react-icons/cg";
import { BiSolidGift } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import Swal from 'sweetalert2';
import { useDispatch } from "react-redux";
import {updateEarningsBalance} from '../store/subscriberSlice'

const SideBar = (props) => {

  const subscriberData = useSelector((state) => state.subscriber.subscriberData)
  const subscriberProfile = useSelector((state) => state.subscriber.subscriberProfile);

  const dispatch = useDispatch();

  const [balance, setBalance] = useState(0.00);

  const [isOpen, setIsOpen] = useState(false);
  const [otpValid, setOtpValid] = useState(null);
  const [showOtp, setShowOtp] = useState(null);
  const [otpValue, setOtpValue] = useState('');
  const [withdrawalAmt, setWithdrawalAmt] = useState('');
  const [loading, setLoading] = useState(false);


  // Functions to open and close the modal
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // submit withdrawal request
  const validateSubmitWithdrawal = async () => {

    //check otp value
    if(otpValue !== '12345') {
      Swal.fire({
        title: "Withdrawal Request!",
        text: "Incorrect OTP value! Please check",
        icon: "error",
        confirmButtonText: "OK",
      });

      return;
    }


    Swal.fire({
      title: "Withdrawal Request?",
      text: "Submit withdrawal request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0ad13f",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
      
          //submit completed task
          submitProcessWithdrawlRequest();
          return;
        
      }
    });
  }

  // submit withdrawal request
  const submitProcessWithdrawlRequest = async () => {

    try {

      const data = {
        subscriberId : subscriberData.subscriberId,
        amount : withdrawalAmt,
        channel : "Bank Transfer",
        paymentStatus : 1
      }

      setLoading(true);

      const response = await submitWithdrawlRequest(data);

      if(response != '') {
        Swal.fire({
          title: "Withdrawal Request!",
          text: "Your withdrawal request was submitted successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      }

      // fetch earnings
      fetchEarnings();

      // close modal
      closeModal();

      setLoading(false);

    }catch(e) {
      setLoading(false);
      console.error(e.message)
      return;
    }
  }


  // validate OTP
  const validateOTP = () => {

    if(withdrawalAmt == '') {
      Swal.fire({
        title: "Withdrawal Request!",
        text: "Please enter withdrawal amount!",
        icon: "error",
        confirmButtonText: "OK",
      });

      return;
    }

    if(withdrawalAmt > balance) {
      Swal.fire({
        title: "Withdrawal Request!",
        text: "Insufficient Withdrawal Balance!",
        icon: "error",
        confirmButtonText: "OK",
      });

      return;
    }

    setShowOtp(true);

  }

  // fetch earnigs
  const fetchEarnings = async () => {

    try {

      const response = await fetchEarningBalance(subscriberData.subscriberId);

      setBalance(response.totalEarnings);
      dispatch(updateEarningsBalance(response));

    }catch(e) {
      console.log(e.error)
    }

  }

  // fetch data
  useEffect(() => {
    fetchEarnings();
  }, []);

  return (
    <>
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
    {balance == 0 && 
      <h1 className='text-primaryOrange text-[2rem]'>₦ 0.00</h1>
    }
    {
      balance > 0 &&
      <h1 className='text-primaryOrange text-[2rem]'>₦ {balance.toFixed(2)}</h1>
    }
    
    <h5 className='text-[#a1a5a8] text-[0.8rem] mt-5'>Minimum payout amount: <span className='text-primaryOrange'>₦5,000</span></h5>

    <button onClick={openModal} disabled={balance == 0 ? true : false} className={balance == 0 ? `bg-[#d1d1d1] group cursor-not-allowed flex justify-center py-[0.7rem] hover:font-[500] hover:text-white gap-x-2 items-center w-full mt-2 rounded-lg font-[500] text-[0.85rem] text-[#ffffff] border-[#25a773]` : `bg-[#1b7652] group cursor-pointer flex justify-center py-[0.7rem] hover:font-[500] hover:text-white gap-x-2 items-center w-full mt-2 hover:bg-[#25a773] rounded-lg font-[500] text-[0.85rem] text-[#ffffff] border-[#25a773]`}>
      Withdraw
      <LuLogOut className='text-[#ffffff] group-hover:text-white font-bold text-[1rem]' />
    </button>
</div>

<div className='p-7'>
    <ProfileLink title="Orders" active={(props.active == 'orders') ? true : null} to="/orders" icon={<BsBasket3 className='text-primaryOrange text-[1rem]' />} />
    <ProfileLink title="Earnings" active={(props.active == 'earnings') ? true : null} to="/earnings" icon={<LiaMoneyBillAltSolid className='text-primaryOrange text-[1rem]' />} />
    <ProfileLink title="Withdrawals" active={(props.active == 'withdrawal') ? true : null} to="/withdrawal" icon={<LiaMoneyBillWaveSolid className='text-primaryOrange text-[1rem]' />} />
    <ProfileLink title="Manage Tasks" active={(props.active == 'tasks') ? true : null} icon={<LuLayoutList className='text-primaryOrange text-[1rem]' />} />
    <ProfileLink title="Notifications" active={(props.active == 'notification') ? true : null} icon={<IoNotificationsOutline className='text-primaryOrange text-[1rem]' />} />
    <ProfileLink title="Customer Support" icon={<IoChatbubblesOutline className='text-primaryOrange text-[1rem]' />} />
    <button className='border hover:bg-primaryOrange hover:text-white flex justify-center mt-[2rem] items-center gap-x-2 text-primaryOrange border-primaryOrange p-[0.8rem] rounded-lg text-[0.84rem] font-[500] w-full'>
      Logout <HiOutlineLogout className='text-[1.1rem]' />
    </button>
</div>
    </div>

    {/* Modal */}
    <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    overlayClassName="fixed z-40 inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    className="bg-white rounded-[1rem] shadow-lg w-[35%]"
>
     <div className='bg-gray-100 p-5 rounded-tl-[1rem] rounded-tr-[1rem] flex justify-between items-center'>
         <h2 className="font-[500] text-[1.1rem]">Withdraw from Earnings</h2>
         <button onClick={closeModal} className='bg-primaryOrange rounded-full p-1'>
             <CgClose className='text-white text-[1.3rem]' />
         </button>
     </div>

     <div className='py-5 px-5 modal-inner-body overflow-scroll'>

            <h1 className='text-primaryOrange bg-[#f6f6f6] flex gap-x-2 items-center p-3 rounded-lg text-[0.8rem]'>
              <FaLongArrowAltRight /> Withdrawal Details
            </h1>

            <div className='mb-3 mt-4'>
                <h4 className='profile-label-style w-full'>Withdrawal Amount</h4>
                <input type='number' value={withdrawalAmt} disabled={showOtp ? 'disabled' : null} onChange={(e) => setWithdrawalAmt(e.target.value)} className='profile-input-style' placeholder='Enter amount here' />
            </div>


            <h1 className='text-primaryOrange bg-[#f6f6f6] flex gap-x-2  mt-9 items-center p-3 rounded-lg text-[0.8rem]'>
              <FaLongArrowAltRight /> Payment Bank Account
            </h1>

            <p className='text-[0.75rem] text-green-600 mt-4 ml-2'>Kindly note that your payment will be made into the account below. 
            <Link to="/manageProfile" className='text-primaryOrange ml-2 underline'>Update account</Link></p>

          <div className='flex mt-2 justify-between items-center'>
                <div className='mt-3'>
                <h4 className='text-[0.83rem] mb-1 ml-2 text-[#a7a7a7]'>Bank Name</h4>
                <input type='text' value={subscriberProfile.bankName}  disabled className='withdrawal-input-style' />
              </div>
              <div  className='mt-3'>
                <h4 className='text-[0.83rem] mb-1 ml-2 text-[#a7a7a7]'>Account Number</h4>
                <input type='text' value={subscriberProfile.accountNumber} disabled className='withdrawal-input-style' />
            </div>
          </div>
          <div className='mt-3 mb-4'>
            <h4 className='text-[0.83rem] mb-1 ml-2 text-[#a7a7a7]'>Account Name</h4>
            <input type='text' value={subscriberProfile.accountName} disabled className='text-primaryBlue placeholder-[#a6a6a6] outline outline-[#e4e4e4] rounded-[0.7rem] p-3 text-[0.87rem] w-full' />
          </div>

          {showOtp && 
            <div className='mt-3'>
            <h4 className='text-[0.83rem] mb-1 ml-2 text-blue-500'>OTP Value</h4>
            <input type='number' value={otpValue} maxLength={5} onChange={(e) => setOtpValue(e.target.value)} placeholder='Enter the OTP sent to your phone' className='text-primaryBlue placeholder-[#a6a6a6] outline outline-[#e4e4e4] rounded-[0.7rem] p-3 text-[0.87rem] w-full' />
          </div>
          }
        

     </div>

     <div className="flex justify-between items-center gap-2 p-4 border-t border-[#f0f0f0]">
        
          <div></div>

          {!showOtp &&
            <button onClick={validateOTP} className='bg-primaryOrange px-[30px] py-[10px] text-[0.85rem] flex items-center gap-x-2 rounded-[2rem] text-white'>Validate Request <FaLongArrowAltRight className='text-[1.2rem]' /></button>
          }

          {showOtp && 
            <button onClick={validateSubmitWithdrawal} className='bg-green-600 px-[30px] py-[10px] text-[0.85rem] flex items-center gap-x-2 rounded-[2rem] text-white'>Submit Withdrawal <FiArrowRightCircle className='text-[1.2rem]' /></button>
          }
          
     </div>
</Modal>
{/* Modal */}
</>
  )
}

export default SideBar
