import MobileTodoForm from "./ModalContents/MobileTodoForm";

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
      />
    );
  }

  // if (modalContentsId == 1) {
  //   return (
  //     <SingleDeleteConfirm
  //       setModalOpen={setModalOpen}
  //       singleDeleteTODO={singleDeleteTODO}
  //     />
  //   );
  // } else if (modalContentsId == 2) {
  //   return (
  //     <AllDeleteConfirm
  //       setModalOpen={setModalOpen}
  //       allDeleteTODO={allDeleteTODO}
  //     />
  //   );
  // }
};

export default MobileAppModalContents;