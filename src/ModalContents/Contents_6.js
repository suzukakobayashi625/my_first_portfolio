import "../scss/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faMobileScreen,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const Contents_6 = () => {
  return (
    <div className="modal_contents_wrapper">
      <div className="project_title_wrapper">
        <div className="kind">
          <div className="marker sample">サンプル</div>
          <div className="devices">
            <FontAwesomeIcon icon={faDesktop} />
            <FontAwesomeIcon icon={faMobileScreen} />
          </div>
        </div>
        <div className="project_name">備忘録メモアプリケーション</div>
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
            備忘録メモアプリケーションをReact.jsで作成しました。<br />
            ポートフォリオと同様、GitHub Pagesで公開しています。<br />
            <br />
            コードを触る中で、エラーを解消したり、意図しない動きの原因を調査した時のことを残しています。<br />
            本来、このようなサービスはDBに記事データを保存して動的に運用することが多いかと思われますが、サンプルのため直接内容を書いています。
          </div>
          <a
            href="https://suzukakobayashi625.github.io/knowledge_memo_app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="link_btn">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              備忘録メモアプリはこちら
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contents_6;