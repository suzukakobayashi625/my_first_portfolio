import { useState, useEffect } from "react";
import "../scss/sample_app.scss";
import RightContents from "./App_1/RightContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

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
    solved: false,
  });
  const [mode, setMode] = useState('create');

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
      solved: false,
    });
  };

  const getTODO = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    console.log('data');
    console.log(JSON.parse(data));


    if (data != null) {
      setTodoList(JSON.parse(data));
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

    const newTodo = {
      created: Date.now(),
      updated: Date.now(),
      title: inputData.title,
      title_style: inputData.title_style,
      detail: inputData.detail,
      detail_style: inputData.detail_style,
      add_badge: inputData.add_badge,
      badge_type: inputData.badge_type,
      badge_free_style: inputData.badge_free_style,
      solved: false,
    };

    const added_list = [...todoList, newTodo];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(added_list));

    onResetForms();
    toast.success('TODOを作成しました');
    getTODO();
  };

  const onEdit = (index) => {
    setMode('edit');

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
      solved: target_data.solved,
    });
  };

  const handleSolved = (is_solved) => {
  };

  const DisplayTask = () => {
    return (
      <>
        {todoList.map((d, index) => {
          return (
            <div
              className="item_card"
              key={index}
              onClick={() => {
                onEdit(index);
              }}
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
                <div className="task_wrapper">
                  <div className="mini_title">完了</div>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox-1"
                      name="task_solved"
                      checked={d.solved}
                      onChange={() => { handleSolved(d.solved) }}
                    />
                  </label>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  useEffect(() => {
    getTODO();
  }, []);

  return (
    <div className="sample_1_container">
      <div className="main_wrapper">
        <div className="main_title">
          <FontAwesomeIcon icon={faClipboardList} />
          <div>Sample TODO App</div>
        </div>
        <div className="todo_list_wrapper">
          {todoList.length > 0 ?
            // <>
            //   {todoList.map((d, index) => {
            //     return (
            //       <div className="item_card" key={index}>
            //         <div className="card_left">
            //           {d.title != '' ?
            //             <div className="title_wrapper">
            //               {d.add_badge ?
            //                 <>
            //                   {d.badge_type == 1 ?
            //                     <div className="badge denger">重要</div>
            //                     : d.badge_type == 2 ?
            //                       <div className="badge gaisyutsu">外出</div>
            //                       : d.badge_type == 3 ?
            //                         <div className="badge new">NEW</div>
            //                         : d.badge_type == 0 ?
            //                           <div
            //                             className="badge"
            //                             style={{
            //                               backgroundColor: d.badge_free_style.back_ground,
            //                               color: d.badge_free_style.color,
            //                             }}
            //                           >
            //                             {d.badge_free_style.name}
            //                           </div>
            //                           :
            //                           <></>
            //                   }
            //                 </>
            //                 :
            //                 <></>
            //               }
            //               <div
            //                 className="title"
            //                 style={d.title_style?.bold ?
            //                   { color: d.title_style?.color, fontWeight: "600" } :
            //                   { color: d.title_style?.color }
            //                 }
            //               >
            //                 {d.title}
            //               </div>
            //             </div>
            //             :
            //             <></>
            //           }
            //           {d.detail != '' ?
            //             <div
            //               className="detail"
            //               style={d.detail_style?.bold ?
            //                 { color: d.detail_style?.color, fontWeight: "600" } :
            //                 { color: d.detail_style?.color }
            //               }
            //             >
            //               {d.detail}
            //             </div>
            //             :
            //             <></>
            //           }
            //         </div>
            //         <div className="card_right">
            //           <div className="task_wrapper">
            //             <div className="mini_title">完了</div>
            //             <label>
            //               <input type="checkbox" className="checkbox-1" name="task_solved" />
            //             </label>
            //           </div>
            //         </div>
            //       </div>
            //     );
            //   })}
            // </>
            <DisplayTask />
            :
            <div className="no_data">
              <FontAwesomeIcon icon={faCircleXmark} />
              <div>タスクがありません</div>
            </div>
          }
        </div>
      </div>
      <RightContents
        inputData={inputData}
        setInputData={setInputData}
        onSetColor={onSetColor}
        onChengeBoldness={onChengeBoldness}
        onSetName={onSetName}
        createTODO={createTODO}
      />
    </div >
  );
}

export default SampleApp_1;
