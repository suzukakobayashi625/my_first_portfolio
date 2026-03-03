import "../scss/main.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import CustomerManagementImage from "../../src/images/customer_management_image.PNG";
import CrmAppImage from "../../src/images/crm_image.PNG";
import RezeptImage from "../../src/images/rezept_image.PNG";
import PortfolioImage from "../../src/images/IMG_0317.jpg";
import SampleAppImage_1 from "../../src/images/sample_app_1_image.png";
import { useNavigate } from "react-router-dom";

const MobileWorks = ({
	handleModalOpen,
	workRef,
}) => {

	const navigate = useNavigate();

	return (
		<div className="content_3" ref={workRef}>
			<div className="title">WORKS</div>
			<div className="carousel_wrapper">
				<Swiper
					navigation   // ← 左右ボタン
					modules={[Navigation]}
					slidesPerView={1}      // ← 常に3つ表示
					slidesPerGroup={1}     // ← 1つずつ動く
					spaceBetween={20}
					loop={true}
				>
					<SwiperSlide>
						<div className="project" onClick={() => handleModalOpen(1)}>
							<img src={CustomerManagementImage} className="service_image" alt="顧客管理のイメージ画像" />
							<div className="introduction">
								<div className="service_title">
									<div className="marker web_app">WEBアプリ</div>
									<div>社内顧客管理WEBアプリケーション</div>
								</div>
								<div className="detail_link">
									<div>詳細を見る</div>
									<FontAwesomeIcon icon={faAngleRight} />
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="project" onClick={() => handleModalOpen(2)}>
							<img src={CrmAppImage} className="service_image" alt="CRMのイメージ画像" />
							<div className="introduction">
								<div className="service_title">
									<div className="marker web_app">WEBアプリ</div>
									<div>治療院業界向けCRM 顧客別カスタム</div>
								</div>
								<div className="detail_link">
									<div>詳細を見る</div>
									<FontAwesomeIcon icon={faAngleRight} />
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="project" onClick={() => handleModalOpen(3)}>
							<img src={RezeptImage} className="service_image" alt="レセプト書類Ïのイメージ画像" />
							<div className="introduction">
								<div className="service_title">
									<div className="marker web_app">WEBアプリ</div>
									<div>治療院業界向け BtoB WEBサービス</div>
								</div>
								<div className="detail_link">
									<div>詳細を見る</div>
									<FontAwesomeIcon icon={faAngleRight} />
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="project" onClick={() => handleModalOpen(4)}>
							<img src={PortfolioImage} className="service_image" alt="ポートフォリオのトップ画像" />
							<div className="introduction">
								<div className="service_title">
									<div className="marker web_site">WEBサイト</div>
									<div>本ポートフォリオサイト</div>
								</div>
								<div className="detail_link">
									<div>詳細を見る</div>
									<FontAwesomeIcon icon={faAngleRight} />
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="project" onClick={() => handleModalOpen(5)}>
							<img src={SampleAppImage_1} className="service_image" alt="サンプルアプリ１のイメージ画像" />
							<div className="introduction">
								<div className="service_title">
									<div className="marker sample">サンプル</div>
									<div>サンプルTODOアプリケーション</div>
								</div>
								<div className="detail_link">
									<div>詳細を見る</div>
									<FontAwesomeIcon icon={faAngleRight} />
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}

export default MobileWorks;