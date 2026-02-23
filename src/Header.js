import "./scss/header.scss";

const Header = ({
  topRef,
  profileRef,
  workRef,
  skillRef,
  newsRef,
}) => {

  const handleScroll = (refId) => {
    if (refId == 1) {
      topRef.current?.scrollIntoView({
        behavior: "smooth", // なめらかスクロール
        block: "center",     // 要素を上端に合わせる
      });
    } else if (refId == 2) {
      profileRef.current?.scrollIntoView({
        behavior: "smooth", // なめらかスクロール
        block: "center",     // 要素を上端に合わせる
      });
    } else if (refId == 3) {
      workRef.current?.scrollIntoView({
        behavior: "smooth", // なめらかスクロール
        block: "center",     // 要素を上端に合わせる
      });
    } else if (refId == 4) {
      skillRef.current?.scrollIntoView({
        behavior: "smooth", // なめらかスクロール
        block: "center",     // 要素を上端に合わせる
      });
    } else if (refId == 5) {
      newsRef.current?.scrollIntoView({
        behavior: "smooth", // なめらかスクロール
        block: "center",     // 要素を上端に合わせる
      });
    }
  };

  return (
    <div className="header_container">
      <div className="main_title" onClick={() => handleScroll(1)}>TOP</div>
      <div className="sub_title_wrapper">
        <div className="menu" onClick={() => handleScroll(2)}>PROFILE</div>
        <div className="menu" onClick={() => handleScroll(3)}>WORKS</div>
        <div className="menu" onClick={() => handleScroll(4)}>SKILLS</div>
        <div className="menu" onClick={() => handleScroll(5)}>NEWS</div>
      </div>
    </div>
  );
}

export default Header;
