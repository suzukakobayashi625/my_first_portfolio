import { useEffect, useState, useRef } from "react";
import "../../scss/sample_app.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const AppModal_1 = ({
  modalOpen,
  setModalOpen,
  children,
}) => {

  const modalRef = useRef(null);
  const [isMouseDownInside, setIsMouseDownInside] = useState(false);

  const handleMouseDown = (e) => {
    // クリックされた場所がモーダルの内部かどうかを確認する
    if (modalRef.current && modalRef.current.contains(e.target)) {
      setIsMouseDownInside(true);
    } else {
      setIsMouseDownInside(false);
    }
  };

  const handleMouseUp = (e) => {
    // クリック終了時に外側がクリックされた場合のみモーダルを閉じる
    if (!isMouseDownInside && modalRef.current && e.target.id == 'modal-overlay') {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    // イベントリスナーの設定
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      // クリーンアップ：イベントリスナーを解除
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isMouseDownInside]);

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
      className={`modal-overlay ${modalOpen ? "active" : ""}`}
      id="modal-overlay"
      onClick={(e) => e.stopPropagation()}
    >
      <div className={`modal ${modalOpen ? "active" : ""}`} ref={modalRef}>
        <div className="close_btn" onClick={() => { setModalOpen(false); }}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default AppModal_1;