import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "../styles/Modal.scss";

const Modal = ({ isOpen, children, onClose }) => {
  const [modalRoot, setModalRoot] = useState(null);

  useEffect(() => {
    const el = document.createElement("div");

    let root = document.getElementById("modal-root");
    if (!root) {
      root = document.createElement("div");
      root.setAttribute("id", "modal-root");
      document.body.appendChild(root);
    }

    root.appendChild(el);
    setModalRoot(root);

    const handleEscape = (event) => {
      if (event.keyCode === 27) onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    // Cleanup function
    return () => {
      root.removeChild(el);
      document.removeEventListener("keydown", handleEscape);

      if (root.childNodes.length === 0) {
        document.body.removeChild(root);
      }
    };
  }, [isOpen, onClose]);

  if (!modalRoot) return null;

  const modalContent = isOpen ? (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  ) : null;

  return ReactDOM.createPortal(modalContent, modalRoot);
};

export default Modal;
