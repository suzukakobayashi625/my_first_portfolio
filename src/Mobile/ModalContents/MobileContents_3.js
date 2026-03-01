import "../../scss/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

const MobileContents_3 = () => {
  return (
    <div className="modal_contents_wrapper">
      <div className="scroll_wrapper">
        <div className="project_title_wrapper">
          <div className="kind">
            <div className="marker web_app">WEBアプリケーション</div>
            <div className="devices">
              <FontAwesomeIcon icon={faDesktop} />
              <FontAwesomeIcon icon={faMobileScreen} />
            </div>
          </div>
          <div className="project_name">治療院業界向け BtoB WEBサービス</div>
        </div>
        <div className="border" />
        <div className="project_detail_wrapper">
          <table className="products">
            <tbody>
              <tr>
                <td>担当工程</td>
                <td>DB設計の一部、コーディング、UI/UXデザイン</td>
              </tr>
              <tr>
                <td>環境</td>
                <td>React.js、PHP（Laravel）、AWS（S3）、MySQL、Adobe Premiere</td>
              </tr>
            </tbody>
          </table>
          <div className="border" />
          <div className="project_details">
            <div className="sub_title">詳細</div>
            <div>
              治療院と、その保険請求を代行する団体との事務手続きをスムーズにするWEBアプリケーションを作成しました。
              また、リリース後の追加改修として代行団体向けの顧客管理システムの開発に携わりました。<br />
              途中までは別の担当者が開発を行っており、リリース・現在の運用保守までを自身を含めた複数人で行いました。
              主にフロントエンドを担当しましたが、それに付随するバックエンドの一部も担当しています。<br />
              bootstrapのテンプレートが導入されていたため、これを基準にUIデザイン変更を行なっています。
              モバイル対応及び、動画による操作マニュアル作成も担当しました。
            </div>
            <div className="attention">※使用している画像は生成AIを用いたイメージであり、実際のサービスを写したものではございません。</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileContents_3;