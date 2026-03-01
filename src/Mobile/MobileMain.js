import "../scss/main.scss";
import { useState } from "react";
import topImage from "../../src/images/IMG_0317.jpg";
import MobileProfile from "./MobileProfile";
import MobileWorks from "./MobileWorks";
import MobileSkills from "./MobileSkills";
import MobileNews from "./MobileNews";
import MobileModal from "./MobileModal";
import MobileContents_1 from "./ModalContents/MobileContents_1";
import MobileContents_2 from "./ModalContents/MobileContents_2";
import MobileContents_3 from "./ModalContents/MobileContents_3";
import MobileContents_4 from "./ModalContents/MobileContents_4";

const MobileMain = ({
  topRef,
  profileRef,
  workRef,
  skillRef,
  newsRef,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContentsId, setModalContentsId] = useState(null);

  const handleModalOpen = (id) => {
    setModalContentsId(id);
    setModalOpen(true);
  };

  const ModalContents = () => {
    if (modalContentsId == null) {
      return (<></>);
    }

    if (modalContentsId == 1) {
      return (
        <MobileContents_1 />
      );
    } else if (modalContentsId == 2) {
      return (
        <MobileContents_2 />
      );
    } else if (modalContentsId == 3) {
      return (
        <MobileContents_3 />
      );
    } else if (modalContentsId == 4) {
      return (
        <MobileContents_4 />
      );
    }
  };

  return (
    <>
      <div className="mobile_main_container">
        <div className="content_1" ref={topRef}>
          <img src={topImage} className="top_image" alt="top_image" />
          <div className="image_filter" />
          <div className="main_title">S.Kobayashi<br />Portfolio</div>
        </div>
        <MobileProfile profileRef={profileRef} />
        <MobileWorks
          handleModalOpen={handleModalOpen}
          workRef={workRef}
        />
        <MobileSkills skillRef={skillRef} />
        <MobileNews newsRef={newsRef} />
      </div>
      <MobileModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      >
        <ModalContents />
      </MobileModal>
    </>
  );
}

export default MobileMain;