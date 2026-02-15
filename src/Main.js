import "./scss/main.scss";
import Profile from "./Profile";
import Works from "./Works";
import Skill from "./Skill";
import topImage from "../src/images/IMG_0317.jpg";

const Main = () => {
  return (
    <div className="main_container">
      <div className="content_1">
        <img src={topImage} className="top_image" alt="top_image" />
        <div className="image_filter" />
        <div className="main_title">S.Kobayashi<br />Portfolio</div>
      </div>
      <Profile />
      <Works />
      <Skill />
      <div className="content_5">
        <div>nanka contact info</div>
      </div>
    </div>
  );
}

export default Main;