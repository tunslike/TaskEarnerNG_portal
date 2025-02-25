import React, {useState} from 'react'
import {TruncatedText} from '../components'
import Modal from 'react-modal';
import { CgClose } from "react-icons/cg";
import { BiSolidGift } from "react-icons/bi";
import { Link } from 'react-router-dom'


const ListCard = ({title, icon, thumbnail, desc, platform, price }) => {

  const [isOpen, setIsOpen] = useState(false);

  // Functions to open and close the modal
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
    <div onClick={openModal} title='View Tasks' className='list-item-box'>
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
           to="/complete-task"
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