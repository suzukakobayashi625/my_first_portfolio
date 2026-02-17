import "./scss/main.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Works = () => {
	return (
		<div className="content_3">
			<div className="title">WORKS</div>
			<div className="carousel_wrapper">
				<Swiper
					navigation   // ← 左右ボタン
					modules={[Navigation]}
					slidesPerView={3}      // ← 常に3つ表示
					slidesPerGroup={1}     // ← 1つずつ動く
					spaceBetween={16}
				>
					<SwiperSlide>
						<div className="project">
							<div className="no_image">no image</div>
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
						<div className="project">
							<div className="no_image">no image</div>
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
						<div className="project">
							<div className="no_image">no image</div>
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
						<div className="project">
							<div className="no_image">no image</div>
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
						<div className="project">
							<div className="no_image">no image</div>
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

export default Works;