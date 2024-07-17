import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-8 rounded-lg max-w-[400px] w-full text-center'>
        <h2 className='text-2xl font-bold mb-4 text-black'>Welcome!</h2>
        <p className='text-black'>This is your modal message.</p>
        <button onClick={onClose} className='bg-[#00df9a] w-full mt-4 rounded-md font-medium py-2 text-black'>Close</button>
      </div>
    </div>
  );
};

export default Modal;
