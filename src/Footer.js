import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./scss/main.scss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <div className="footer_container">
      <div className="footer_wrapper">
        <Link
          to="https://github.com/suzukakobayashi625"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="git_link">
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </Link>
        <div>Suzuka Kobayashi 2026</div>
      </div>
    </div>
  );
}

export default Footer;