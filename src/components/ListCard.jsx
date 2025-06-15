import React, {useState} from 'react'
import {TruncatedText} from '../components'
import Modal from 'react-modal';
import { CgClose } from "react-icons/cg";
import { BiSolidGift } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


const ListCard = ({title, icon, taskid, thumbnail, desc, platform, price, activeStatus }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenActive, setIsOpenActive] = useState(false);
  
  // Functions to open and close the modal
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // open active modal
  const openActiveModal = () => setIsOpenActive(true);
  const closeActiveModal = () => setIsOpenActive(false);


  return (
    <>
    <div onClick={(activeStatus == null) ? openActiveModal : openModal} title='View Tasks' className='list-item-box'>
    <img src={thumbnail}/>
        <div className='px-4 pb-5'>
            <div>
                <h1>{title}</h1>
                <p><TruncatedText text={desc} maxLength={80} /></p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <h5 className='text-primaryOrange text-[0.8rem] font-[400]'>Earnings: </h5> 
                <h4 className='bg-primaryOrange text-[0.8rem] px-4 py-1 text-white font-[500] rounded-[1rem]'>₦ {price}</h4>
            </div>
          </div>
    </div>

    {/* Modal for membership activation */}
    <Modal
        isOpen={isOpenActive}
        onRequestClose={closeActiveModal}
        overlayClassName="fixed z-40 inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        className="bg-white rounded-[1rem] shadow-lg w-[35%]"
    >
     <div className='bg-gray-100 p-5 rounded-tl-[1rem] rounded-tr-[1rem] flex justify-between items-center'>
         <h2 className="font-[400] text-[1.05rem] text-red-700">Membership Activation Required</h2>
         <button onClick={closeActiveModal} className='bg-primaryOrange rounded-full p-1'>
             <CgClose className='text-white text-[1.3rem]' />
         </button>
     </div>

     <div className='m-6'>
      
     <h1 className='text-primaryBlue font-[600] text-[1.3rem] mb-5'>Turn Your Social Media Accounts into a Money Making Machine!</h1>

     <p className='text-[0.78rem] mb-2 text-gray-600'>Do you know you can earn daily income by performing social media tasks such as likes, follows, comments, shares, retweets etc. That is one of the many benefits of becoming a member on TaskEarners NG.</p>
     
     <p className='text-[0.78rem] mb-2 text-gray-600'>When you activate your account with a one-time membership fee of ₦1,000, you get lifetime access to enjoy the following benefits:</p>

     <ul className='active-body-list'>
     
     <li><span className='font-[600] text-primaryOrange'>Earn steady daily figures</span> by following, liking, commenting, sharing, retweeting or posting adverts for businesses on your social media. Click here to see what you will earn when you perform social tasks</li>
     
     <li><span className='font-[600] text-primaryOrange'>Earn an Instant Referral Commission of ₦500</span> when you refer someone to become a member on TaskEarners NG. The more you refer, the more you earn. Click here to learn how referral works.</li>
     
     <li><span className='font-[600] text-primaryOrange'>Earn Social Boost Referral Commission of 20% of any amount paid</span> when you refer someone to Buy Likes, Followers, Comments, Shares, Whatsapp Post Views etc. Click here to learn how referral works.</li>
     
     <li><span className='font-[600] text-primaryOrange'>Start Your Airtime/Data Business on TaskEarners NG.</span> Buy Airtime or Data on TaskEarners NG at up to 10% - 50% Discount and Sell to friends and family at normal prices. Click here to see airtime and data pricing.</li>
     
     <li><span className='font-[600] text-primaryOrange'>Sell Anything on TaskEarners NG Market.</span> As a member, you can take advantage of the huge traffic we have and place your products in front of thousands of buyers. Click here to start selling on TaskEarners NG.</li>
     
     </ul>
   
     </div>
 

     <div className="flex justify-between items-center gap-2 p-4 border-t border-[#f0f0f0]">
        
      <h1 className='text-[0.9rem] ml-6 font-[500]'>Price: <span className='bg-primaryOrange text-white rounded-[1rem] px-3 py-[2px]'>₦ 1,000</span> </h1>
     <Link
       to="/complete-task"
       className="px-12 py-3 text-[0.85rem] flex items-center gap-x-1 bg-green-500 text-white rounded-[2rem] hover:bg-green-600 transition"
     > 
        Make Payment <FaArrowUpRightFromSquare className='text-[0.9rem] ml-1' />
      </Link> 
     </div>
</Modal>
{/* Modal */}

    {/* Modal for membership activation */}

     {/* Modal */}
     <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed z-40 inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        className="bg-white rounded-[1rem] shadow-lg w-[35%]"
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
                <img width={110} src={icon} />
            </div>
      
            <div>
                <h6 className='text-[0.75rem] text-primaryOrange mb-2'>Complete social Media Tasks</h6>
                <h3 className='text-copyrightBlue font-[600] text-[1.3rem]'>{title}</h3>
                {/**
                <div className='bg-[#f8d7db] px-3 py-1 text-[0.7rem] mt-2 border border-[#f5c6cc] flex items-center gap-x-1 rounded-[1rem] text-[#721c25]'>
                    <RiInformationLine className='text-[1rem]'/> Please do not unfollow this profile or account after you follow it
                </div> */}
            </div>

         </div>

         <h6 className='text-primaryOrange ml-3 text-[0.79rem] mb-1'>Description</h6>
         <div className='bg-[#f4f4f4] max-h-[150px] min-h-[100px] overflow-scroll mb-5 rounded-[1rem] text-[#5e5e61] text-[0.75rem] p-3'>{desc}</div>

         </div>

         <div className="flex justify-between items-center gap-2 p-4 border-t border-[#f0f0f0]">
            
          <h1 className='text-[0.9rem] ml-6 font-[500]'>Earnings: <span className='bg-primaryOrange text-white rounded-[1rem] px-3 py-[2px]'>₦ 50</span> </h1>
         <Link
           to="/complete-task" state={{taskId: taskid, taskName: title, thumbnail: icon}}
           className="px-12 py-3 text-[0.85rem] flex items-center gap-x-1 bg-green-500 text-white rounded-[2rem] hover:bg-green-600 transition"
         > 
            Take Offer <BiSolidGift className='text-[1.1rem]' />
          </Link> 
         </div>
   </Modal>
 {/* Modal */}
 </>
  )
}

export default ListCard