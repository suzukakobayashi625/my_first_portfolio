import "../../../scss/sample_app.scss";

const AllDeleteConfirm = ({
	setModalOpen,
	singleDeleteTODO,
}) => {
	return (
		<div className="modal_contents_wrapper">
			<div className="main_wrapper">
				完了済みのTODOを一括削除します。<br />
				よろしいですか？
			</div>
			<div className="btn_wrapper">
				<button onClick={() => { setModalOpen(false); }}>キャンセル</button>
				<button onClick={singleDeleteTODO}>はい</button>
			</div>
		</div>
	);
};

export default AllDeleteConfirm;