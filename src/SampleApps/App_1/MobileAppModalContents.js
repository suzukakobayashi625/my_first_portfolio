import MobileTodoForm from "./ModalContents/MobileTodoForm";
import MobileAllDeleteConfirm from "./ModalContents/MobileAllDeleteConfirm";

const MobileAppModalContents = ({
  modalContentsId,
  inputData,
  setInputData,
  STORAGE_KEY,
  onResetForms,
  getTODO,
  todoList,
  setModalOpen,
  mode,
  setConfirmModalOpen,
  target,
  allDeleteTODO,
  responsiveType,
}) => {

  if (modalContentsId == null) {
    return (<></>);
  }

  if (modalContentsId == 1) {
    return (
      <MobileTodoForm
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
        responsiveType={responsiveType}
      />
    );
  } else if (modalContentsId == 2) {
    return (
      <MobileAllDeleteConfirm
        setModalOpen={setModalOpen}
        allDeleteTODO={allDeleteTODO}
      />
    );
  }
};

export default MobileAppModalContents;