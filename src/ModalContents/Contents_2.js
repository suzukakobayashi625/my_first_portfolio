import "../scss/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDesktop,
	faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

const Contents_2 = () => {
	return (
		<div className="modal_contents_wrapper">
			<div className="project_title_wrapper">
				<div className="kind">
					<div className="marker web_app">WEBアプリケーション</div>
					<div className="devices">
						<FontAwesomeIcon icon={faDesktop} />
						<FontAwesomeIcon icon={faMobileScreen} />
					</div>
				</div>
				<div className="project_name">治療院業界向けCRM 顧客別カスタム</div>
			</div>
			<div className="border" />
			<div className="project_detail_wrapper">
				<table className="products">
					<tbody>
						<tr>
							<td>担当工程</td>
							<td>コーディング、保守運用、UI/UXデザイン</td>
						</tr>
						<tr>
							<td>環境</td>
							<td>React.js、Node.js、AWS（EC2,Route53,CloudWatch,CodePipeLine,API Gateway,Lambdaなど）、MySQL、Google Apps Script</td>
						</tr>
					</tbody>
				</table>
				<div className="border" />
				<div className="project_details">
					<div className="sub_title">詳細</div>
					<div>
						自社で提供されている治療院向けCRMの、顧客別カスタムアプリケーションを4社分担当しました。<br />
						既存のDBサーバーからデータを送受信するAPIを作成し、予実管理できる機能があります。<br />
						<br />
						顧客へのヒアリングを基に、複数回アップグレードも行なっています。<br />
						また、顧客によってはGoogleスプレッドシートを使用したいご要望がありましたので、GAS（Google Apps Script）を用いて、実績取得及び予算送信を行うサービスを作成しました。
					</div>
					<div className="attention">※使用している画像は生成AIを用いたイメージであり、実際のサービスを写したものではございません。</div>
				</div>
			</div>
		</div>
	);
};

export default Contents_2;