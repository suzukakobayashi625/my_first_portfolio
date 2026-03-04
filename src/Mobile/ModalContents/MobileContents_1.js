import "../../scss/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

const MobileContents_1 = ({ responsiveType }) => {
  return (
    <div
      className="modal_contents_wrapper"
      style={{ maxHeight: responsiveType == 'mobile' ? '50vh' : '70vh' }}
    >
      <div className="scroll_wrapper">
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
                <td>DB設計、インフラ構築、コーディング、保守運用、UI/UXデザイン</td>
              </tr>
              <tr>
                <td>環境</td>
                <td>React.js、Node.js、AWS（EC2,Route53,CloudWatch,CodePipeLineなど）、MySQL、Adobe XD</td>
              </tr>
            </tbody>
          </table>
          <div className="border" />
          <div className="project_details">
            <div className="sub_title">詳細</div>
            <div>
              元々Microsoft Accessで管理していた、社内用の顧客情報を閲覧・編集できるアプリケーションを作成しました。
              MySQLにデータ移行を行い、旧システムには無かった契約情報や訪問・アプローチ履歴などを残す機能を追加しています。<br />
              エンジニアとして初めて担当した案件であり、学習のためデザイン〜リリースまでほとんど1人で担当しました。
              AWSのCloudWatchで稼働状況を監視しており、エラーやサーバー停止などを感知してチャットに通知するよう設定しています。<br />
              現在も社内でカスタマーサポート部署を中心に利用いただいています。
            </div>
            <div className="attention">※使用している画像は生成AIを用いたイメージであり、実際のサービスを写したものではございません。</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileContents_1;