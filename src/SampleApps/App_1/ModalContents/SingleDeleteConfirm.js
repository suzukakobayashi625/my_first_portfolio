import "../../../scss/sample_app.scss";

const SingleDeleteConfirm = ({
	setModalOpen,
	singleDeleteTODO,
}) => {
	return (
		<div className="modal_contents_wrapper">
			<div className="main_wrapper">
				TODOを1件削除します。<br />
				よろしいですか？
			</div>
			<div className="btn_wrapper">
				<button onClick={() => { setModalOpen(false); }}>キャンセル</button>
				<button onClick={singleDeleteTODO}>はい</button>
			</div>
		</div>
	);
};

export default SingleDeleteConfirm;