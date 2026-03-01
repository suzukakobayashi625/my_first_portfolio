import { useEffect, useRef, } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../scss/sample_app.scss";
import {
  faTrashCan,
  faUpDown,
  faXmark,
  faCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import Sortable from "sortablejs";
import DisplayTask from "./DisplayTask";

const MobileMainContents = ({
  STORAGE_KEY,
  mode,
  setMode,
  isDisplaySolvedTask,
  setIsDisplaySolvedTask,
  onResetForms,
  todoList,
  setTodoList,
  handleModalOpen,
  getTODO,
  inputData,
  setInputData,
  target,
  setTarget,
}) => {

  const listRef = useRef(null);

  const onSaveSort = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todoList));

      toast.success('並び順を保存しました');
      setMode('create');
      getTODO();

    } catch (error) {
      console.log(error);
      toast.error('並び順の保存中にエラーが発生しました');
      return;
    }
  };

  const onEdit = (index) => {
    setMode('edit');
    setTarget(index);

    const target_data = todoList[index];

    setInputData({
      ...inputData,
      title: target_data.title,
      title_style: {
        color: target_data.title_style.color,
        bold: target_data.title_style.bold,
      },
      detail: target_data.detail,
      detail_style: {
        color: target_data.detail_style.color,
        bold: target_data.detail_style.bold,
      },
      add_badge: target_data.add_badge,
      badge_type: target_data.badge_type,
      badge_free_style: {
        color: target_data.badge_free_style.color,
        back_ground: target_data.badge_free_style.back_ground,
        name: target_data.badge_free_style.name,
      },
      is_solved: target_data.is_solved,
    });
  };

  const handleSolved = (is_solved, index) => {
    const newTodo = todoList.map((todo, i) =>
      i == index ? { ...todo, is_solved: is_solved ? false : true, } : todo
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodo));

    getTODO();
  };

  useEffect(() => {
    const sortable = Sortable.create(listRef.current, {
      animation: 200,
      handle: ".handle", // ハンドル指定可能
      onEnd: (evt) => {
        const newList = [...todoList];
        const [movedItem] = newList.splice(evt.oldIndex, 1);
        newList.splice(evt.newIndex, 0, movedItem);
        setTodoList(newList);
      },
    });

    return () => sortable.destroy();
  }, [todoList]);

  return (
    <div className="contents_wrapper">
      {mode != 'sort' ?
        <div className="option_wrapper">
          <div className="hidden_check">
            <label>
              <input
                type="checkbox"
                className="checkbox-1"
                name="hidden_check"
                value={isDisplaySolvedTask}
                onChange={() => { setIsDisplaySolvedTask(!isDisplaySolvedTask); }}
              />
              <div className="sentence">完了済みのタスクは表示しない</div>
            </label>
          </div>
          <div className="btn_wrapper">
            <div
              className="sort_btn"
              onClick={() => {
                setMode('sort');
                onResetForms();
              }}
            >
              <FontAwesomeIcon icon={faUpDown} />
              <div>並び替え</div>
            </div>
            <div
              className="all_delete_btn"
              onClick={() => {
                if (todoList.filter((d) => d.is_solved).length == 0) {
                  toast.error('完了済みのタスクがありません');
                } else {
                  handleModalOpen(2);
                }
              }}
            >
              <FontAwesomeIcon icon={faTrashCan} />
              <div>完了済みのTODOを一括削除</div>
            </div>
          </div>
        </div>
        :
        <div className="option_wrapper">
          <div className="sort_title">タスクの並び替え中</div>
          <div className="btn_wrapper">
            <div
              className="cancel_btn"
              onClick={() => {
                setMode('create');
                getTODO();
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
              <div>並び替えをやめる</div>
            </div>
            <div className="submit_btn" onClick={onSaveSort}>
              <FontAwesomeIcon icon={faCheck} />
              <div>並び替えを保存</div>
            </div>
          </div>
        </div>
      }
      <div className="todo_list_wrapper" ref={listRef}>
        {mode == 'create' && (inputData.title != '' || inputData.detail != '') ?
          <div className="create_preview">
            <div className="creating_title">作成中イメージ</div>
            <div className="item_card disabled_card">
              <div className="card_left">
                {inputData.title != '' ?
                  <div className="title_wrapper">
                    {inputData.add_badge ?
                      <>
                        {inputData.badge_type == 1 ?
                          <div className="badge denger">重要</div>
                          : inputData.badge_type == 2 ?
                            <div className="badge gaisyutsu">外出</div>
                            : inputData.badge_type == 3 ?
                              <div className="badge new">NEW</div>
                              : inputData.badge_type == 0 ?
                                <div
                                  className="badge"
                                  style={{
                                    backgroundColor: inputData.badge_free_style.back_ground,
                                    color: inputData.badge_free_style.color,
                                  }}
                                >
                                  {inputData.badge_free_style.name}
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
                      style={inputData.title_style?.bold ?
                        { color: inputData.title_style?.color, fontWeight: "600" } :
                        { color: inputData.title_style?.color }
                      }
                    >
                      {inputData.title}
                    </div>
                  </div>
                  :
                  <></>
                }
                {inputData.detail != '' ?
                  <div
                    className="detail"
                    style={inputData.detail_style?.bold ?
                      { color: inputData.detail_style?.color, fontWeight: "600" } :
                      { color: inputData.detail_style?.color }
                    }
                  >
                    {inputData.detail}
                  </div>
                  :
                  <></>
                }
              </div>
              <div className="card_right">
                <div className="task_wrapper">
                  <div className="mini_title">完了</div>
                  <label style={{ cursor: "default" }}>
                    <input
                      type="checkbox"
                      className="checkbox-1"
                      name="task_solved"
                      disabled
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          :
          <></>
        }
        {todoList.length > 0 ?
          <DisplayTask
            todoList={todoList}
            mode={mode}
            setMode={setMode}
            target={target}
            setTarget={setTarget}
            onResetForms={onResetForms}
            onEdit={onEdit}
            inputData={inputData}
            handleSolved={handleSolved}
          />
          :
          <div className="no_data">
            <FontAwesomeIcon icon={faCircleXmark} />
            <div>タスクがありません</div>
          </div>
        }
      </div>
    </div>
  );
}

export default MobileMainContents;
