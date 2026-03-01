import "../../scss/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faTabletScreenButton,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

const MobileContents_4 = () => {
  return (
    <div className="modal_contents_wrapper">
      <div className="scroll_wrapper">
        <div className="project_title_wrapper">
          <div className="kind">
            <div className="marker web_site">WEBサイト</div>
            <div className="devices">
              <FontAwesomeIcon icon={faDesktop} />
              <FontAwesomeIcon icon={faTabletScreenButton} />
              <FontAwesomeIcon icon={faMobileScreen} />
            </div>
          </div>
          <div className="project_name">本ポートフォリオサイト</div>
        </div>
        <div className="border" />
        <div className="project_detail_wrapper">
          <table className="products">
            <tbody>
              <tr>
                <td>担当工程</td>
                <td>すべて</td>
              </tr>
              <tr>
                <td>環境</td>
                <td>React.js、Node.js、AWS（EC2など）</td>
              </tr>
            </tbody>
          </table>
          <div className="border" />
          <div className="project_details">
            <div className="sub_title">詳細</div>
            <div>
              React.jsでポートフォリオサイトを作成しました。<br />
              ドメインを取得し、EC2インスタンスで起動しています。<br />
              テンプレートは使用せず、画面構成は自分で作成しています。また、PC・タブレット・モバイルのレスポンシブ対応を行いました。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileContents_4;