import "./scss/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const News = ({
  newsRef,
}) => {

  const news = [
    {
      date: '2026/03/01',
      detail: 'ポートフォリオサイトを公開しました。',
    },
  ];

  return (
    <div className="content_5" ref={newsRef}>
      <div className="title">NEWS</div>
      <div className="news_wrapper">
        {news.length > 0 ?
          <table>
            <tbody>
              {news.map((d, index) => {
                return (
                  <tr key={index}>
                    <td>{d.date}</td>
                    <td>{d.detail}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          :
          <div className="no_news">
            <FontAwesomeIcon icon={faCircleXmark} />
            <div>新着情報はありません</div>
          </div>
        }
      </div>
    </div>
  );
}

export default News;