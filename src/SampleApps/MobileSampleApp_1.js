import { useState, useEffect, } from "react";
import "../scss/sample_app.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import MobileMainContents from "./App_1/MobileMainContents";
import MobileAppModal_1 from "./App_1/MobileAppModal_1";
import MobileAppModal_2 from "./App_1/MobileAppModal_2";
import MobileAppModalContents from "./App_1/MobileAppModalContents";

const MobileSampleApp_1 = ({ responsiveType }) => {

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
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [modalContentsId, setModalContentsId] = useState(null);
  const [isDisplaySolvedTask, setIsDisplaySolvedTask] = useState(true);

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

  const handleModalOpen = (id) => {
    setModalContentsId(id);
    setModalOpen(true);
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

  useEffect(() => {
    getTODO();
  }, [isDisplaySolvedTask]);

  return (
    <div className="mobile_sample_1_container">
      <div
        className="create_btn"
        onClick={() => {
          handleModalOpen(1);
          setMode('create');
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </div>

      <div className="main_wrapper">
        <div className="main_title">
          <FontAwesomeIcon icon={faClipboardList} />
          <div>Sample TODO App</div>
        </div>
        <MobileMainContents
          STORAGE_KEY={STORAGE_KEY}
          mode={mode}
          setMode={setMode}
          isDisplaySolvedTask={isDisplaySolvedTask}
          setIsDisplaySolvedTask={setIsDisplaySolvedTask}
          onResetForms={onResetForms}
          todoList={todoList}
          setTodoList={setTodoList}
          handleModalOpen={handleModalOpen}
          getTODO={getTODO}
          inputData={inputData}
          setInputData={setInputData}
          setTarget={setTarget}
        />
      </div>
      <MobileAppModal_1
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        onResetForms={onResetForms}
      >
        <MobileAppModalContents
          modalContentsId={modalContentsId}
          inputData={inputData}
          setInputData={setInputData}
          STORAGE_KEY={STORAGE_KEY}
          onResetForms={onResetForms}
          getTODO={getTODO}
          todoList={todoList}
          setModalOpen={setModalOpen}
          mode={mode}
          setConfirmModalOpen={setConfirmModalOpen}
          target={target}
          allDeleteTODO={allDeleteTODO}
          responsiveType={responsiveType}
        />
      </MobileAppModal_1>
      <MobileAppModal_2
        confirmModalOpen={confirmModalOpen}
        setConfirmModalOpen={setConfirmModalOpen}
      />
    </div >
  );
}

export default MobileSampleApp_1;
