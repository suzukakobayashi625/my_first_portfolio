import { useState } from "react";
import "../scss/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const MobileHeader = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="mobile_header_container">
      <div className="mobile_header_wrapper">
        <div
          className={isMenuOpen ? "hamburger_btn open" : "hamburger_btn close"}
          onClick={() => setMenuIsOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} className="icon bars" />
          <FontAwesomeIcon icon={faXmark} className="icon close" />
        </div>
      </div>

      <div className={isMenuOpen ? "menu_overlay" : "menu_overlay disabled_overlay"}></div>

      <nav className={`sideMenu ${isMenuOpen ? "show" : ""}`}>
        <div className="link_item">TOP</div>
        <div className="link_item">PROFILE</div>
        <div className="link_item">WORKS</div>
        <div className="link_item">SKILLS</div>
        <div className="link_item">NEWS</div>
      </nav>
    </div>
  );
}

export default MobileHeader;