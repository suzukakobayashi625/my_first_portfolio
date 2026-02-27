import "../scss/main.scss";
import avaterImage from "../../src/images/IMG_0411.PNG";

const MobileProfile = ({
}) => {
  return (
    <div className="content_2">
      <div className="title">PROFILE</div>
      <div className="profile_wrapper">
        <img src={avaterImage} className="avater_image" alt="avater" />
        <div className="introduction">
          <div>
            埼玉県熊谷市生まれのフロントエンドエンジニアです。<br />
            美術大学を卒業後、大手飲食店企業に就職。<br />
            その後、医療系ソフトウェア開発会社のカスタマーサポートを経て、同社のWEBアプリケーションをはじめとする事業に携わってきました。<br />
            UI・UXデザインを考慮した、「操作マニュアルが無くてもユーザーが分かりやすいサービス」を提供できるよう心掛けています。<br />
            主にフロントエンド領域が得意ですが、DB操作やバックエンドについても経験があります。<br />
            詳細はWORKSに記載していますが、社内顧客管理システム・BtoB向け業務アプリケーションなどに参画しておりました。
          </div>
          <div className="details">
            <div className="hobby">
              <div className="marker">趣味</div>
              <div>ゲーム、一人旅（最近は香港やオーストラリアに行きました。）</div>
            </div>
            <div className="ricense">
              <div className="marker">資格</div>
              <div>AWS Cloud Plactitioner</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileProfile;