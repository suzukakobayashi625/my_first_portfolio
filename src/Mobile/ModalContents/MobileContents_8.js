import "../../scss/main.scss";

const MobileContents_8 = ({ responsiveType }) => {
  return (
    <div
      className="modal_contents_wrapper"
      style={{ maxHeight: responsiveType == 'mobile' ? '65vh' : '75vh' }}
    >
      <div className="scroll_wrapper">
        <div className="project_title_wrapper">
          <div className="kind">
            <div className="marker web_app">その他</div>
          </div>
          <div className="project_name">セミナー動画編集</div>
        </div>
        <div className="border" />
        <div className="project_detail_wrapper">
          <table className="products">
            <tbody>
              <tr>
                <td>担当工程</td>
                <td>・編集</td>
              </tr>
              <tr>
                <td>環境</td>
                <td>・Adobe Premiere</td>
              </tr>
            </tbody>
          </table>
          <div className="border" />
          <div className="project_details">
            <div className="sub_title">詳細</div>
            <div>
              クライアントの開催したセミナー録画ファイルのカット・編集作業を行いました。<br />
              動画の中で重要と思われる用語をハイライトして字幕表示するなど、クオリティを評価いただきました。
            </div>
            <div className="attention">※使用している画像は生成AIを用いたイメージであり、実際のサービスを写したものではございません。</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileContents_8;