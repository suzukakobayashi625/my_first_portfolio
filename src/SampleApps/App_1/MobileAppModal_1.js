import { useEffect, useState, useRef } from "react";
import "../../scss/sample_app.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const MobileAppModal_1 = ({
  modalOpen,
  setModalOpen,
  onResetForms,
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
      className={`mobile-app-modal-overlay ${modalOpen ? "active" : ""}`}
      id="mobile-app-modal-overlay"
      onClick={() => {
        setModalOpen(false);
        onResetForms();
      }}
    >
      <div
        className={`mobile-app-modal ${modalOpen ? "active" : ""}`}
        onClick={(e) => { e.stopPropagation(); }}
      >
        <div
          className="close_btn"
          onClick={() => {
            setModalOpen(false);
            onResetForms();
          }}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default MobileAppModal_1;