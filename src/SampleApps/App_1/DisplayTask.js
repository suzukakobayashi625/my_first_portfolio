import "../../scss/sample_app.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const DisplayTask = ({
  todoList,
  mode,
  setMode,
  target,
  setTarget,
  onResetForms,
  onEdit,
  inputData,
  handleSolved,
}) => {

  return (
    <>
      {todoList.map((d, index) => {
        return (
          <div key={index}>
            <div
              className="item_card"
              onClick={() => { onEdit(index); }}
            >
              <div className="card_left">
                {d.title != '' ?
                  <div className="title_wrapper">
                    {d.add_badge ?
                      <>
                        {d.badge_type == 1 ?
                          <div className="badge denger">重要</div>
                          : d.badge_type == 2 ?
                            <div className="badge gaisyutsu">外出</div>
                            : d.badge_type == 3 ?
                              <div className="badge new">NEW</div>
                              : d.badge_type == 0 ?
                                <div
                                  className="badge"
                                  style={{
                                    backgroundColor: d.badge_free_style.back_ground,
                                    color: d.badge_free_style.color,
                                  }}
                                >
                                  {d.badge_free_style.name}
                                </div>
                                :
                                <></>
                        }
                      </>
                      :
                      <></>
                    }
                    <div
                      className="title"
                      style={d.title_style?.bold ?
                        { color: d.title_style?.color, fontWeight: "600" } :
                        { color: d.title_style?.color }
                      }
                    >
                      {d.title}
                    </div>
                  </div>
                  :
                  <></>
                }
                {d.detail != '' ?
                  <div
                    className="detail"
                    style={d.detail_style?.bold ?
                      { color: d.detail_style?.color, fontWeight: "600" } :
                      { color: d.detail_style?.color }
                    }
                  >
                    {d.detail}
                  </div>
                  :
                  <></>
                }
              </div>
              <div className="card_right">
                {mode == 'create' ?
                  <div className="task_wrapper">
                    <div className="mini_title">完了</div>
                    <label
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSolved(d.is_solved, index);
                      }}
                    >
                      <input
                        type="checkbox"
                        className="checkbox-1"
                        name="task_solved"
                        checked={d.is_solved}
                        onChange={() => { }}
                      />
                    </label>
                  </div>
                  : mode == 'sort' ?
                    <div className="handle">
                      <FontAwesomeIcon icon={faBars} />
                    </div>
                    :
                    <></>
                }
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DisplayTask;