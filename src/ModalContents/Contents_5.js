import "../scss/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faTabletScreenButton,
  faMobileScreen,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Contents_5 = () => {
  return (
    <div className="modal_contents_wrapper">
      <div className="project_title_wrapper">
        <div className="kind">
          <div className="marker sample">サンプル</div>
          <div className="devices">
            <FontAwesomeIcon icon={faDesktop} />
            <FontAwesomeIcon icon={faTabletScreenButton} />
            <FontAwesomeIcon icon={faMobileScreen} />
          </div>
        </div>
        <div className="project_name">サンプルTODOアプリケーション</div>
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
              <td>React.js</td>
            </tr>
          </tbody>
        </table>
        <div className="border" />
        <div className="project_details">
          <div className="sub_title">詳細</div>
          <div>
            サンプルTODOアプリケーションをReact.jsで作成しました。<br />
            作成したTODOのデータは、ローカルストレージに保存されるようになっています。
          </div>
          <div className="how_to">
            <div className="sub_title">PC操作について</div>
            <div>
              画面右側で新規のTODOを作成することができます。<br />
              画面左側に作成済みのTODOがリストされます。<br />
              TODOを完了したら、リスト右側にある「完了」のチェックボックスを入れます。<br />
              編集や削除するときは任意のTODOをクリックしてください。
            </div>
          </div>
          <Link
            to="/sample_app_1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="link_btn">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              サンプルTODOアプリはこちら
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contents_5;