import "./scss/main.scss";
import { useState } from "react";
import Profile from "./Profile";
import Works from "./Works";
import Skill from "./Skill";
import Modal from "./Modal";
import topImage from "../src/images/IMG_0317.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
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
        <div className="modal_contents_wrapper">
          <div className="project_title_wrapper">
            <div className="kind">
              <div className="marker web_app">WEBアプリケーション</div>
              <div className="devices">
                <FontAwesomeIcon icon={faDesktop} />
              </div>
            </div>
            <div className="project_name">社内顧客管理WEBアプリケーション</div>
          </div>
          <div className="border" />
          <div className="project_detail_wrapper">
            <table className="products">
              <tbody>
                <tr>
                  <td>担当工程</td>
                  <td>環境</td>
                </tr>
                <tr>
                  <td>***</td>
                  <td>***</td>
                </tr>
              </tbody>
            </table>
            <hr />
            <div className="project_details">
              ********
              ********
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="main_container">
        <div className="content_1">
          <img src={topImage} className="top_image" alt="top_image" />
          <div className="image_filter" />
          <div className="main_title">S.Kobayashi<br />Portfolio</div>
        </div>
        <Profile />
        <Works
          handleModalOpen={handleModalOpen}
        />
        <Skill />
        <div className="content_5">
          <div>nanka contact info</div>
        </div>
      </div>
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