import { useEffect, useState, useRef } from "react";
import "../../scss/sample_app.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const MobileAppModal_2 = ({
  confirmModalOpen,
  setConfirmModalOpen,
}) => {

  // モーダルオープン中はスクロール禁止
  useEffect(() => {
    if (confirmModalOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [confirmModalOpen]);

  return (
    <div
      className={`mobile-confirm-modal-overlay ${confirmModalOpen ? "active" : ""}`}
      id="mobile-confirm-modal-overlay"
      onClick={() => { setConfirmModalOpen(false); }}
    >
      <div
        className={`mobile-confirm-modal ${confirmModalOpen ? "active" : ""}`}
        onClick={(e) => { e.stopPropagation(); }}
      >
        <div
          className="close_btn"
          onClick={() => { setConfirmModalOpen(false); }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div className="modal_contents_wrapper">
          <div className="main_wrapper">
            TODOを1件削除します。<br />
            よろしいですか？
          </div>
          <div className="btn_wrapper">
            <button onClick={() => { setConfirmModalOpen(false); }}>キャンセル</button>
            <button>はい</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileAppModal_2;