import "./scss/header.scss";

const Header = () => {
  return (
    <div className="header_container">
      <div className="main_title">TOP</div>
      <div className="sub_title_wrapper">
        <div className="menu">PROFILE</div>
        <div className="menu">WORKS</div>
        <div className="menu">SKILL</div>
        <div className="menu">CONTACT</div>
      </div>
    </div>
  );
}

export default Header;
