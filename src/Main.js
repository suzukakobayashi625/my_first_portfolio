import "./scss/main.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Main = () => {
  return (
    <div className="main_container">
      <div className="content_1">
        <div className="dummy_image">Suzuka.K Portfolio</div>
      </div>
      <div className="content_2">
        <div className="title">PROFILE</div>
        <div className="profile_wrapper">
          <div className="dummy_avater"></div>
          <div className="introduction">
            <div>
              埼玉県熊谷市生まれのフロントエンドエンジニアです。<br />
              美術大学を卒業後、大手飲食店企業に就職。<br />
              その後、医療系ソフトウェア開発会社のカスタマーサポートを経て、WEBアプリケーションをはじめとする事業に携わってきました。<br />
              UI・UXデザインを考慮した、「操作マニュアルが無くてもユーザーが分かりやすいサービス」を提供できるよう心掛けています。<br />
              主にフロントエンド領域が得意ですが、DB操作やバックエンドについても経験があります。<br />
              詳細はWORKSに記載していますが、社内顧客管理システム・BtoB向け業務アプリケーションなどに参画しておりました。
            </div>
            <div>
              趣味：ゲーム、一人旅（最近は香港やオーストラリアに行きました。）
            </div>
          </div>
        </div>
      </div>
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
      <div className="content_4">
        <div>nanka skill</div>
      </div>
      <div className="content_5">
        <div>nanka contact info</div>
      </div>
    </div>
  );
}

export default Main;