import { useState } from "react";
import "../scss/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";

const MobileSkills = ({
  // skillRef,
}) => {

  const [activeSelect, setActiveSelect] = useState(1);
  const [visible, setVisible] = useState(true);

  const select_contents = {
    "1": "FRONT END",
    "2": "BACK END",
    "3": "ADOBE",
    "4": "AWS",
    "5": "OTHER"
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;

    setVisible(false);
    setActiveSelect(value);

    setTimeout(() => {
      setVisible(true);
    }, 200);
  };

  return (
    <div className="content_4">
      <div className="title">SKILLS</div>
      <div className="skill_wrapper">
        <div className="detail_wrapper">
          <div className="sentence">
            <div className="icon"><FontAwesomeIcon icon={faGem} className="valid_icon" /></div>
            <div className="detail">業務上使用したことがある程度</div>
          </div>
          <div className="sentence">
            <div className="icon">
              <FontAwesomeIcon icon={faGem} className="valid_icon" />
              <FontAwesomeIcon icon={faGem} className="valid_icon" />
              <FontAwesomeIcon icon={faGem} className="valid_icon" />
            </div>
            <div className="detail">基本的な操作が可能</div>
          </div>
          <div className="sentence">
            <div className="icon">
              <FontAwesomeIcon icon={faGem} className="valid_icon" />
              <FontAwesomeIcon icon={faGem} className="valid_icon" />
              <FontAwesomeIcon icon={faGem} className="valid_icon" />
              <FontAwesomeIcon icon={faGem} className="valid_icon" />
              <FontAwesomeIcon icon={faGem} className="valid_icon" />
            </div>
            <div className="detail">頻繁に使用することがあり、発展的な利用方法も経験済み</div>
          </div>
        </div>
        <div className="select-wrapper">
          <select value={activeSelect} onChange={handleSelectChange}>
            {Object.keys(select_contents).map((key) => {
              return (
                <option key={Number(key)} value={Number(key)}>{select_contents[key]}</option>
              );
            })}
          </select>
          <div className={`select_contents ${visible ? "show" : "hide"}`}>
            {activeSelect == 1 ?
              <div className="card">
                <div className="card_title">FRONT END</div>
                <div className="card_content_wrapper">
                  <table>
                    <tbody>
                      <tr>
                        <td>javascript</td>
                        <td>3.5年</td>
                        <td>
                          <div className="level">
                            <FontAwesomeIcon icon={faGem} className="valid_icon" />
                            <FontAwesomeIcon icon={faGem} className="valid_icon" />
                            <FontAwesomeIcon icon={faGem} className="valid_icon" />
                            <FontAwesomeIcon icon={faGem} className="valid_icon" />
                            <FontAwesomeIcon icon={faGem} className="valid_icon" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>React.js</td>
                        <td>3.5年</td>
                        <td>
                          <div className="level">
                            <FontAwesomeIcon icon={faGem} className="valid_icon" />
                            <FontAwesomeIcon icon={faGem} className="valid_icon" />
                            <FontAwesomeIcon icon={faGem} className="valid_icon" />
                            <FontAwesomeIcon icon={faGem} className="valid_icon" />
                            <FontAwesomeIcon icon={faGem} className="valid_icon" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>TypeScript.js</td>
                        <td>0.5年</td>
                        <td>
                          <div className="level">
                            <FontAwesomeIcon icon={faGem} className="valid_icon" />
                            <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                            <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                            <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                            <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              : activeSelect == 2 ?
                <div className="card">
                  <div className="card_title">BACK END</div>
                  <div className="card_content_wrapper">
                    <table>
                      <tbody>
                        <tr>
                          <td>Node.js</td>
                          <td>3年</td>
                          <td>
                            <div className="level">
                              <FontAwesomeIcon icon={faGem} className="valid_icon" />
                              <FontAwesomeIcon icon={faGem} className="valid_icon" />
                              <FontAwesomeIcon icon={faGem} className="valid_icon" />
                              <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                              <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PHP（Laravel）</td>
                          <td>1年</td>
                          <td>
                            <div className="level">
                              <FontAwesomeIcon icon={faGem} className="valid_icon" />
                              <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                              <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                              <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                              <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>MySQL</td>
                          <td>3.5年</td>
                          <td>
                            <div className="level">
                              <FontAwesomeIcon icon={faGem} className="valid_icon" />
                              <FontAwesomeIcon icon={faGem} className="valid_icon" />
                              <FontAwesomeIcon icon={faGem} className="valid_icon" />
                              <FontAwesomeIcon icon={faGem} className="valid_icon" />
                              <FontAwesomeIcon icon={faGem} className="valid_icon" />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                : activeSelect == 3 ?
                  <div className="card">
                    <div className="card_title">ADOBE</div>
                    <div className="card_content_wrapper">
                      <table>
                        <tbody>
                          <tr>
                            <td>Adobe XD</td>
                            <td>
                              <div className="level">
                                <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Illustrator</td>
                            <td>
                              <div className="level">
                                <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Photoshop</td>
                            <td>
                              <div className="level">
                                <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>After Effects</td>
                            <td>
                              <div className="level">
                                <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Premiere</td>
                            <td>
                              <div className="level">
                                <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  : activeSelect == 4 ?
                    <div className="card">
                      <div className="card_title">AWS</div>
                      <div className="card_content_wrapper">
                        <table>
                          <tbody>
                            <tr>
                              <td>Lambda + API Gateway</td>
                              <td>
                                <div className="level">
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>EC2</td>
                              <td>
                                <div className="level">
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Cognito</td>
                              <td>
                                <div className="level">
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>CloudWatch</td>
                              <td>
                                <div className="level">
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Code Deploy + Code Pipeline</td>
                              <td>
                                <div className="level">
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>S3</td>
                              <td>
                                <div className="level">
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    :
                    <div className="card">
                      <div className="card_title">OTHER</div>
                      <div className="card_content_wrapper">
                        <table>
                          <tbody>
                            <tr>
                              <td>Git hub</td>
                              <td>
                                <div className="level">
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Slack</td>
                              <td>
                                <div className="level">
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Chatwork</td>
                              <td>
                                <div className="level">
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                  <FontAwesomeIcon icon={faGem} className="valid_icon" />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
            }
          </div>
        </div>
      </div>


      {/* <div className="skill_wrapper">
        <div className="detail_wrapper">
          <div className="sentence">
            <div className="icon"><FontAwesomeIcon icon={faGem} className="valid_icon" /></div>
            <div className="detail">業務上使用したことがある程度</div>
          </div>
          <div className="sentence">
            <div className="icon">
              <FontAwesomeIcon icon={faGem} className="valid_icon" />
              <FontAwesomeIcon icon={faGem} className="valid_icon" />
              <FontAwesomeIcon icon={faGem} className="valid_icon" />
            </div>
            <div className="detail">基本的な操作が可能</div>
          </div>
          <div className="sentence">
            <div className="icon">
              <FontAwesomeIcon icon={faGem} className="valid_icon" />
              <FontAwesomeIcon icon={faGem} className="valid_icon" />
              <FontAwesomeIcon icon={faGem} className="valid_icon" />
              <FontAwesomeIcon icon={faGem} className="valid_icon" />
              <FontAwesomeIcon icon={faGem} className="valid_icon" />
            </div>
            <div className="detail">頻繁に使用することがあり、発展的な利用方法も経験済み</div>
          </div>
        </div>
        <div className="top_wrapper">
          <div className="card">
            <div className="card_title">FRONT END</div>
            <div className="card_content_wrapper">
              <table>
                <tbody>
                  <tr>
                    <td>javascript</td>
                    <td>3.5年</td>
                    <td>
                      <div className="level">
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>React.js</td>
                    <td>3.5年</td>
                    <td>
                      <div className="level">
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>TypeScript.js</td>
                    <td>0.5年</td>
                    <td>
                      <div className="level">
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card">
            <div className="card_title">BACK END</div>
            <div className="card_content_wrapper">
              <table>
                <tbody>
                  <tr>
                    <td>Node.js</td>
                    <td>3年</td>
                    <td>
                      <div className="level">
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>PHP（Laravel）</td>
                    <td>1年</td>
                    <td>
                      <div className="level">
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>MySQL</td>
                    <td>3.5年</td>
                    <td>
                      <div className="level">
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="bottom_wrapper">
          <div className="card">
            <div className="card_title">ADOBE</div>
            <div className="card_content_wrapper">
              <table>
                <tbody>
                  <tr>
                    <td>Adobe XD</td>
                    <td>
                      <div className="level">
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Illustrator</td>
                    <td>
                      <div className="level">
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Photoshop</td>
                    <td>
                      <div className="level">
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>After Effects</td>
                    <td>
                      <div className="level">
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Premiere</td>
                    <td>
                      <div className="level">
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card">
            <div className="card_title">AWS</div>
            <div className="card_content_wrapper">
              <table>
                <tbody>
                  <tr>
                    <td>Lambda + API Gateway</td>
                    <td>
                      <div className="level">
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>EC2</td>
                    <td>
                      <div className="level">
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Cognito</td>
                    <td>
                      <div className="level">
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>CloudWatch</td>
                    <td>
                      <div className="level">
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Code Deploy + Code Pipeline</td>
                    <td>
                      <div className="level">
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>S3</td>
                    <td>
                      <div className="level">
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card">
            <div className="card_title">OTHER</div>
            <div className="card_content_wrapper">
              <table>
                <tbody>
                  <tr>
                    <td>Git hub</td>
                    <td>
                      <div className="level">
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="invalid_icon" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Slack</td>
                    <td>
                      <div className="level">
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Chatwork</td>
                    <td>
                      <div className="level">
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                        <FontAwesomeIcon icon={faGem} className="valid_icon" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default MobileSkills;