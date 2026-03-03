import "../../../scss/sample_app.scss";

const MobileAllDeleteConfirm = ({
	setModalOpen,
	allDeleteTODO,
}) => {
	return (
		<div className="modal_contents_wrapper" style={{ overflowY: "hidden" }}>
			<div className="main_wrapper">
				完了済みのTODOを一括削除します。<br />
				よろしいですか？
			</div>
			<div className="btn_wrapper">
				<button onClick={() => { setModalOpen(false); }}>キャンセル</button>
				<button onClick={allDeleteTODO}>はい</button>
			</div>
		</div>
	);
};

export default MobileAllDeleteConfirm;