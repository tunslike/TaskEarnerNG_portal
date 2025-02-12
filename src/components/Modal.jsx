import React, { useState } from 'react';
import Modal from 'react-modal';

// Set app root for accessibility (required by react-modal)
Modal.setAppElement('#root');

const ModalComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  // Functions to open and close the modal
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
    {/* 
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Open Modal
      </button> */}

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full"
      >
        <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
        <p className="mb-4">This is a modal using React Modal and Tailwind CSS.</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
          >
            Close
          </button>
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            Confirm
          </button>
        </div>
      </Modal>
    {/* Modal */}
    </div>
  );
};

export default ModalComponent;
