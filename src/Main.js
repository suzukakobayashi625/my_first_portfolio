import "./scss/main.scss";
import { useState } from "react";
import Profile from "./Profile";
import Works from "./Works";
import Skills from "./Skills";
import News from "./News";
import Modal from "./Modal";
import topImage from "../src/images/IMG_0317.jpg";
import Contents_1 from "./ModalContents/Contents_1";
import Contents_2 from "./ModalContents/Contents_2";
import Contents_3 from "./ModalContents/Contents_3";
import Contents_4 from "./ModalContents/Contents_4";
import Contents_5 from "./ModalContents/Contents_5";
import Footer from "./Footer";

const Main = ({
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
        <Contents_1 />
      );
    } else if (modalContentsId == 2) {
      return (
        <Contents_2 />
      );
    } else if (modalContentsId == 3) {
      return (
        <Contents_3 />
      );
    } else if (modalContentsId == 4) {
      return (
        <Contents_4 />
      );
    } else if (modalContentsId == 5) {
      return (
        <Contents_5 />
      );
    }
  };

  return (
    <>
      <div className="main_container">
        <div className="content_1" ref={topRef}>
          <img src={topImage} className="top_image" alt="top_image" />
          <div className="image_filter" />
          <div className="main_title">S.Kobayashi<br />Portfolio</div>
        </div>
        <Profile profileRef={profileRef} />
        <Works
          handleModalOpen={handleModalOpen}
          workRef={workRef}
        />
        <Skills skillRef={skillRef} />
        <News newsRef={newsRef} />
      </div>
      <Footer />
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      >
        <ModalContents />
      </Modal>
    </>
  );
}

export default Main;