import { useState, useEffect } from "react";
import "../scss/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const MobileHeader = ({
  topRef,
  profileRef,
  workRef,
  skillRef,
  newsRef,
}) => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  const handleScroll = (refId) => {
    setMenuIsOpen(false);

    if (refId == 1) {
      topRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else if (refId == 2) {
      profileRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else if (refId == 3) {
      workRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else if (refId == 4) {
      skillRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else if (refId == 5) {
      newsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  // モーダルオープン中はスクロール禁止
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [isMenuOpen]);

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

      <div
        className={isMenuOpen ? "menu_overlay" : "menu_overlay disabled_overlay"}
        onClick={() => { setMenuIsOpen(false); }}
      />

      <nav className={`sideMenu ${isMenuOpen ? "show" : ""}`}>
        <div className="link_item" onClick={() => handleScroll(1)}>TOP</div>
        <div className="link_item" onClick={() => handleScroll(2)}>PROFILE</div>
        <div className="link_item" onClick={() => handleScroll(3)}>WORKS</div>
        <div className="link_item" onClick={() => handleScroll(4)}>SKILLS</div>
        <div className="link_item" onClick={() => handleScroll(5)}>NEWS</div>
      </nav>
    </div>
  );
}

export default MobileHeader;