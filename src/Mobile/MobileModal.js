import { useEffect, useState, useRef } from "react";
import "../scss/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const MobileModal = ({
  modalOpen,
  setModalOpen,
  children,
}) => {

  // モーダルオープン中はスクロール禁止
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [modalOpen]);

  return (
    <div
      className={`mobile-modal-overlay ${modalOpen ? "active" : ""}`}
      id="mobile-modal-overlay"
      onClick={() => { setModalOpen(false); }}
    >
      <div
        className={`mobile-modal ${modalOpen ? "active" : ""}`}
        onClick={(e) => { e.stopPropagation(); }}
      >
        <div className="close_btn" onClick={() => { setModalOpen(false); }}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default MobileModal;