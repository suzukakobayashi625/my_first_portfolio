import "./scss/main.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
								プロジェクトの説明
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="project">
							<div className="no_image">no image</div>
							<div className="introduction">
								プロジェクトの説明
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="project">
							<div className="no_image">no image</div>
							<div className="introduction">
								プロジェクトの説明
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="project">
							<div className="no_image">no image</div>
							<div className="introduction">
								プロジェクトの説明
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}

export default Works;