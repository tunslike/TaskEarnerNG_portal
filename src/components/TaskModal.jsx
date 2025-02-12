import React, {useState} from 'react'
import Modal from 'react-modal';
import { CgClose } from "react-icons/cg";


const TaskModal = ({onSelect}) => {

    const [isOpen, setIsOpen] = useState(false);

    // Functions to open and close the modal
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);


  return (
    <div>
           {/* Modal */}
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                className="bg-white rounded-[1rem] shadow-lg w-[45%]"
            >


            <div className='bg-gray-100 p-5 rounded-tl-[1rem] rounded-tr-[1rem] flex justify-between items-center'>
                    <h2 className="font-[500] text-[1.1rem]">Review Your Order</h2>
                    <button onClick={closeModal} className='bg-primaryOrange rounded-full p-1'>
                        <CgClose className='text-white text-[1.3rem]' />
                    </button>
             </div>

             <div className='py-5 px-10 modal-inner-body overflow-scroll'>
                kdldkkl
             </div>

            </Modal>
    </div>
  )
}

export default TaskModal
