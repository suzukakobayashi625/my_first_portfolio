import "../../scss/main.scss";

const MobileContents_7 = ({ responsiveType }) => {
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
          <div className="project_name">レセプト書類OCR＋AI分析API</div>
        </div>
        <div className="border" />
        <div className="project_detail_wrapper">
          <table className="products">
            <tbody>
              <tr>
                <td>担当工程</td>
                <td>・設計<br />・コーディング</td>
              </tr>
              <tr>
                <td>環境</td>
                <td>・AWS（S3、DynamoDB、Lambda、APIGateway、EventBridge）<br />・Claude API</td>
              </tr>
            </tbody>
          </table>
          <div className="border" />
          <div className="project_details">
            <div className="sub_title">詳細</div>
            <div>
              治療院の保険請求に使用されるレセプト書類をスキャンしたPDFから内容を取得、その内容をチェックするAPIを作成しました。<br />
              <br />
              電子化に向けて進んでいる中ですが、業界では依然として紙のレセプトによる業務も多く残っており、審査が手作業となっている課題があります。<br />
              <br />
              このような負担をAIで軽減できないかということで、以下の機能を持たせました。<br />
              ・レセプトに記載された情報をデータ化<br />
              ・負傷部位と原因の記載間違いや、署名不足などの簡易ミスを判定<br />
              ・レセプトコンピュータから別途送信されるデータとの相違をチェック<br />
              <br />
              データ化や内容チェックに関してはClaude APIを使用しました。<br />
              AWSの機能を活用することで、サーバーレスで運用できるように構成しました。
            </div>
            <div className="attention">※使用している画像は生成AIを用いたイメージであり、実際のサービスを写したものではございません。</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileContents_7;