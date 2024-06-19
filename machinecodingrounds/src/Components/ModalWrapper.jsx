import React, { useState } from 'react';
import Modal from './ModalComponent';  

const ModalButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      {/* Button that triggers the modal */}
      <button onClick={() => setModalOpen(true)}>
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h1>Modal Header</h1>
        <p>This is some content within the modal...</p>
      </Modal>
    </div>
  );
};

export default ModalButton;
