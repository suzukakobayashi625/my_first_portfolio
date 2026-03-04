import "../scss/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDesktop,
	faTabletScreenButton,
	faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

const Contents_4 = () => {
	return (
		<div className="modal_contents_wrapper">
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
							<td>React.js</td>
						</tr>
					</tbody>
				</table>
				<div className="border" />
				<div className="project_details">
					<div className="sub_title">詳細</div>
					<div>
						React.jsでポートフォリオサイトを作成しました。<br />
						GitHub Pagesを用いて公開しています。<br />
						テンプレートは使用せず、 デザインは自身で作成しています。また、PC・タブレット・モバイルでも閲覧できるように調整しています。
					</div>
					<div className="how_to">
						<div className="sub_title">トップに使用している画像について</div>
						<div>
							トップの画像は、大学時代に作成した、リンゴとチワワのキメラ「チワップル」の模型です。<br />
							生物と何らかの有機物を融合したものを作成する課題で生まれたキャラクターです。
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contents_4;