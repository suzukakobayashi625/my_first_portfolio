import "../scss/main.scss";
import { useState } from "react";
import topImage from "../../src/images/IMG_0317.jpg";
import MobileProfile from "./MobileProfile";
import MobileWorks from "./MobileWorks";
import MobileSkills from "./MobileSkills";
import MobileNews from "./MobileNews";

const MobileMain = ({
}) => {
  // const [modalOpen, setModalOpen] = useState(false);
  // const [modalContentsId, setModalContentsId] = useState(null);

  // const handleModalOpen = (id) => {
  //   setModalContentsId(id);
  //   setModalOpen(true);
  // };

  // const ModalContents = () => {
  //   if (modalContentsId == null) {
  //     return (<></>);
  //   }

  //   if (modalContentsId == 1) {
  //     return (
  //       <Contents_1 />
  //     );
  //   } else if (modalContentsId == 2) {
  //     return (
  //       <Contents_2 />
  //     );
  //   } else if (modalContentsId == 3) {
  //     return (
  //       <Contents_3 />
  //     );
  //   } else if (modalContentsId == 4) {
  //     return (
  //       <Contents_4 />
  //     );
  //   }
  // };

  return (
    <>
      <div className="mobile_main_container">
        <div className="content_1">
          <img src={topImage} className="top_image" alt="top_image" />
          <div className="image_filter" />
          <div className="main_title">S.Kobayashi<br />Portfolio</div>
        </div>
        <MobileProfile />
        <MobileWorks />
        <MobileSkills />
        <MobileNews />
      </div>
    </>
  );
}

export default MobileMain;