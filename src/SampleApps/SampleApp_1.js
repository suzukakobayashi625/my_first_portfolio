import { useState, useEffect, useRef, } from "react";
import "../scss/sample_app.scss";
import RightContents from "./App_1/RightContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faCircleXmark,
  faXmark,
  faUpDown,
  faTrashCan,
  faBars,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import AppModal_1 from "./App_1/AppModal_1";
import SingleDeleteConfirm from "./App_1/ModalContents/SingleDeleteConfirm";
import AllDeleteConfirm from "./App_1/ModalContents/AllDeleteConfirm";
import Sortable from "sortablejs";

const SampleApp_1 = () => {

  const STORAGE_KEY = "sample_app_1";
  const [todoList, setTodoList] = useState([]);
  const [inputData, setInputData] = useState({
    title: '',
    title_style: {
      color: '#0d4c6d',
      bold: false,
    },
    detail: '',
    detail_style: {
      color: '#0d4c6d',
      bold: false,
    },
    add_badge: false,
    badge_type: 1,
    badge_free_style: {
      color: '#ffffff',
      back_ground: '#f9060f',
      name: '',
    },
    is_solved: false,
  });
  const [mode, setMode] = useState('create');
  const [target, setTarget] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContentsId, setModalContentsId] = useState(null);
  const [isDisplaySolvedTask, setIsDisplaySolvedTask] = useState(true);
  const listRef = useRef(null);

  const onSetColor = (form, color_1) => {
    const origin_obj = form == 'title' ?
      inputData.title_style : form == 'detail' ?
        inputData.detail_style : (form == 'badge_color' || form == 'badge_back') ?
          inputData.badge_free_style : {};

    if (form == 'title') {
      origin_obj.color = color_1;
      setInputData({
        ...inputData,
        title_style: origin_obj,
      });
    } else if (form == 'detail') {
      origin_obj.color = color_1;
      setInputData({
        ...inputData,
        detail_style: origin_obj,
      });
    } else if (form == 'badge_color') {
      origin_obj.color = color_1;
      setInputData({
        ...inputData,
        badge_free_style: origin_obj,
      });
    } else if (form == 'badge_back') {
      origin_obj.back_ground = color_1;
      setInputData({
        ...inputData,
        badge_free_style: origin_obj,
      });
    }
  };

  const onChengeBoldness = (form) => {
    const origin_obj = form == 'title' ?
      inputData.title_style : form == 'detail' ?
        inputData.detail_style : {};

    if (form == 'title') {
      origin_obj.bold = origin_obj.bold ? false : true;
      setInputData({
        ...inputData,
        title_style: origin_obj,
      });
    } else if (form == 'detail') {
      origin_obj.bold = origin_obj.bold ? false : true;
      setInputData({
        ...inputData,
        detail_style: origin_obj,
      });
    }
  };

  const onSetName = (params) => {
    const origin_obj = inputData.badge_free_style;
    origin_obj.name = params;

    setInputData({
      ...inputData,
      badge_free_style: origin_obj,
    });
  };

  const onResetForms = () => {
    setInputData({
      ...inputData,
      title: '',
      title_style: {
        color: '#0d4c6d',
        bold: false,
      },
      detail: '',
      detail_style: {
        color: '#0d4c6d',
        bold: false,
      },
      add_badge: false,
      badge_type: 1,
      badge_free_style: {
        color: '#ffffff',
        back_ground: '#f9060f',
        name: '',
      },
      is_solved: false,
    });
  };

  const getTODO = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    console.log('data');
    console.log(JSON.parse(data));


    if (data != null) {
      if (isDisplaySolvedTask) {
        setTodoList(JSON.parse(data));
      } else {
        const filteredTodo = JSON.parse(data).filter((d) => !d.is_solved);
        setTodoList(filteredTodo);
      }
    } else {
      setTodoList([]);
    }
  };

  const createTODO = () => {
    if (inputData.title == '' && inputData.detail == '') {
      toast.error('タイトルか詳細のいずれかを入力してください');
      return;

    } else if (inputData.add_badge && inputData.badge_type == 0 && inputData.badge_free_style.name == '') {
      toast.error('バッヂの名前を入力してください');
      return;
    }

    try {
      const newTodo = {
        updated: Date.now(),
        title: inputData.title,
        title_style: inputData.title_style,
        detail: inputData.detail,
        detail_style: inputData.detail_style,
        add_badge: inputData.add_badge,
        badge_type: inputData.badge_type,
        badge_free_style: inputData.badge_free_style,
        is_solved: false,
      };

      const added_list = [newTodo, ...todoList,];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(added_list));

      onResetForms();
      toast.success('TODOを作成しました');
      getTODO();

    } catch (error) {
      console.log(error);
      toast.error('TODOの作成中にエラーが発生しました');
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

  const onSumbitEdit = () => {

    if (inputData.title == '' && inputData.detail == '') {
      toast.error('タイトルか詳細のいずれかを入力してください');
      return;

    } else if (inputData.add_badge && inputData.badge_type == 0 && inputData.badge_free_style.name == '') {
      toast.error('バッヂの名前を入力してください');
      return;
    }

    try {
      const newTodo = {
        updated: Date.now(),
        title: inputData.title,
        title_style: inputData.title_style,
        detail: inputData.detail,
        detail_style: inputData.detail_style,
        add_badge: inputData.add_badge,
        badge_type: inputData.badge_type,
        badge_free_style: inputData.badge_free_style,
        is_solved: inputData.is_solved,
      };

      const updated_arr = todoList.map((todo, index) =>
        index == target ? newTodo : todo
      );

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated_arr));

      onResetForms();
      setTarget(null);
      setMode('create');
      toast.success('変更を保存しました');
      getTODO();

    } catch (error) {
      console.log(error);
      toast.error('TODOの保存中にエラーが発生しました');
      return;
    }
  };

  const DisplayTask = () => {

    return (
      <>
        {todoList.map((d, index) => {
          return (
            <div key={index} className={mode == 'edit' && index == target ? "editting_card" : ""}>
              {mode == 'edit' && index == target ?
                <div className="editting_mode_wrapper">
                  <div className="editting_title">編集中</div>
                  <div
                    className="cancel_btn"
                    onClick={() => {
                      setMode('create');
                      setTarget(null);
                      onResetForms();
                    }}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                    <div>編集をやめる</div>
                  </div>
                </div>
                :
                <></>
              }
              <div
                className={mode == 'sort' || (mode == 'edit' && index == target) ?
                  "item_card disabled_card" : "item_card"}
                onClick={() => {
                  if (mode != 'sort' && index != target) {
                    onEdit(index);
                  }
                }}
              >
                {mode == 'edit' && index == target ?
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
                  :
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
                }
                {mode == 'edit' && index == target ?
                  <div className="card_right">
                  </div>
                  :
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
                }
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const handleModalOpen = (id) => {
    setModalContentsId(id);
    setModalOpen(true);
  };

  const singleDeleteTODO = () => {
    try {
      const deletedTodo = todoList.filter((d, index) => index != target);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(deletedTodo));

      onResetForms();
      setTarget(null);
      setMode('create');
      setModalOpen(false);
      toast.success('TODOを削除しました');
      getTODO();

    } catch (error) {
      console.log(error);
      toast.error('TODOの削除中にエラーが発生しました');
      return;
    }
  };

  const ModalContents = () => {
    if (modalContentsId == null) {
      return (<></>);
    }

    if (modalContentsId == 1) {
      return (
        <SingleDeleteConfirm
          setModalOpen={setModalOpen}
          singleDeleteTODO={singleDeleteTODO}
        />
      );
    } else if (modalContentsId == 2) {
      return (
        <AllDeleteConfirm
          setModalOpen={setModalOpen}
          allDeleteTODO={allDeleteTODO}
        />
      );
    }
  };

  const allDeleteTODO = () => {
    try {
      const deletedTodo = todoList.filter((d) => !d.is_solved);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(deletedTodo));

      onResetForms();
      setTarget(null);
      setMode('create');
      setModalOpen(false);
      toast.success('TODOを削除しました');
      getTODO();

    } catch (error) {
      console.log(error);
      toast.error('TODOの削除中にエラーが発生しました');
      return;
    }
  };

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

  useEffect(() => {
    getTODO();
  }, [isDisplaySolvedTask]);

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
    <div className="sample_1_container">
      <div className="main_wrapper">
        <div className="main_title">
          <FontAwesomeIcon icon={faClipboardList} />
          <div>Sample TODO App</div>
        </div>
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
              <DisplayTask />
              :
              <div className="no_data">
                <FontAwesomeIcon icon={faCircleXmark} />
                <div>タスクがありません</div>
              </div>
            }
          </div>
        </div>
      </div>
      <RightContents
        inputData={inputData}
        setInputData={setInputData}
        onSetColor={onSetColor}
        onChengeBoldness={onChengeBoldness}
        onSetName={onSetName}
        createTODO={createTODO}
        mode={mode}
        onSumbitEdit={onSumbitEdit}
        handleModalOpen={handleModalOpen}
        onResetForms={onResetForms}
      />
      <AppModal_1
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      >
        <ModalContents />
      </AppModal_1>
    </div >
  );
}

export default SampleApp_1;
