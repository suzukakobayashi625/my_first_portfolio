import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../scss/sample_app.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const MobileTodoForm = ({
	inputData,
	setInputData,
	STORAGE_KEY,
	onResetForms,
	getTODO,
	todoList,
}) => {

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

	return (
		<div className="modal_contents_wrapper">
			<div className="modal_title">
				<FontAwesomeIcon icon={faPlus} />
				<div>TODO新規作成</div>
			</div>
			<div className="scroll_wrapper">
				<div className="input_wrapper">
					<div className="input_form">
						<label>タイトル</label>
						<input
							type="text"
							value={inputData.title}
							onChange={(e) => { setInputData({ ...inputData, title: e.target.value }); }}
							placeholder="タイトルを入力してください"
						/>
						<div className="style_change">
							<div className="color_select">
								<label>タイトル文字色</label>
								<input
									type="color"
									value={inputData.title_style.color}
									onChange={(e) => { onSetColor('title', e.target.value); }}
								/>
								<div className="default_colors">
									<label>
										<input
											type="radio"
											name="title_color"
											checked={inputData.title_style.color == "#0d4c6d"}
											onChange={() => { onSetColor('title', "#0d4c6d"); }}
										/>
										<div className="color_core" />
									</label>
									<label>
										<input
											type="radio"
											name="title_color"
											checked={inputData.title_style.color == "#f9060f"}
											onChange={() => { onSetColor('title', "#f9060f"); }}
										/>
										<div className="color_core" />
									</label>
									<label>
										<input
											type="radio"
											name="title_color"
											checked={inputData.title_style.color == "#12ae5f"}
											onChange={() => { onSetColor('title', "#12ae5f"); }}
										/>
										<div className="color_core" />
									</label>
								</div>
							</div>
							<div className="boldness_select">
								<label className="checkbox-container">
									<input
										className="custom-checkbox"
										type="checkbox"
										checked={inputData.title_style.bold}
										onChange={() => { onChengeBoldness('title'); }}
									/>
									<span className="checkmark"></span>
									タイトルを太字にする
								</label>
							</div>
						</div>
					</div>
					<div className="input_form">
						<label>詳細</label>
						<textarea
							value={inputData.detail}
							onChange={(e) => { setInputData({ ...inputData, detail: e.target.value }); }}
							placeholder="詳細を入力してください"
							rows="6"
						/>
						<div className="style_change">
							<div className="color_select">
								<label>詳細文字色</label>
								<input
									type="color"
									value={inputData.detail_style.color}
									onChange={(e) => { onSetColor('detail', e.target.value); }}
								/>
								<div className="default_colors">
									<label>
										<input
											type="radio"
											name="detail_color"
											checked={inputData.detail_style.color == "#0d4c6d"}
											onChange={() => { onSetColor('detail', "#0d4c6d"); }}
										/>
										<div className="color_core" />
									</label>
									<label>
										<input
											type="radio"
											name="detail_color"
											checked={inputData.detail_style.color == "#f9060f"}
											onChange={() => { onSetColor('detail', "#f9060f"); }}
										/>
										<div className="color_core" />
									</label>
									<label>
										<input
											type="radio"
											name="detail_color"
											checked={inputData.detail_style.color == "#12ae5f"}
											onChange={() => { onSetColor('detail', "#12ae5f"); }}
										/>
										<div className="color_core" />
									</label>
								</div>
							</div>
							<div className="boldness_select">
								<label className="checkbox-container">
									<input
										className="custom-checkbox"
										type="checkbox"
										checked={inputData.detail_style.bold}
										onChange={() => { onChengeBoldness('detail'); }}
									/>
									<span className="checkmark"></span>
									詳細を太字にする
								</label>
							</div>
						</div>
					</div>
					<div className="input_form">
						<label>バッヂ</label>
						<div className="badge_radio_wrapper">
							<label>
								なし
								<input
									type="radio"
									name="add_badge"
									checked={!inputData.add_badge}
									onChange={() => { setInputData({ ...inputData, add_badge: false }); }}
								/>
							</label>
							<label>
								あり
								<input
									type="radio"
									name="add_badge"
									checked={inputData.add_badge}
									onChange={() => { setInputData({ ...inputData, add_badge: true }); }}
								/>
							</label>
						</div>
					</div>
					{inputData.add_badge ?
						<div className="input_form">
							<label>バッヂのスタイル設定</label>
							<div className="badge_style_change">
								<div className="name_select">
									<div className="name_radio_wrapper">
										<label>
											重要
											<input
												type="radio"
												name="badge_name"
												checked={inputData.badge_type == 1}
												onChange={() => { setInputData({ ...inputData, badge_type: 1, }); }}
											/>
										</label>
										<label>
											外出
											<input
												type="radio"
												name="badge_name"
												checked={inputData.badge_type == 2}
												onChange={() => { setInputData({ ...inputData, badge_type: 2, }); }}
											/>
										</label>
										<label>
											NEW
											<input
												type="radio"
												name="badge_name"
												checked={inputData.badge_type == 3}
												onChange={() => { setInputData({ ...inputData, badge_type: 3, }); }}
											/>
										</label>
										<label>
											自作
											<input
												type="radio"
												name="badge_name"
												checked={inputData.badge_type == 0}
												onChange={() => { setInputData({ ...inputData, badge_type: 0, }); }}
											/>
										</label>
									</div>
								</div>
								{inputData.badge_type == 0 ?
									<div className="free_badge_input">
										<input
											type="text"
											placeholder="タグ名自由入力"
											value={inputData.badge_free_style.name}
											onChange={(e) => { onSetName(e.target.value); }}
										/>
									</div>
									:
									<></>
								}
								{inputData.badge_type == 0 ?
									<div className="color_wrapper">
										<div className="color_select">
											<label>背景色</label>
											<input
												type="color"
												value={inputData.badge_free_style.back_ground}
												onChange={(e) => { onSetColor('badge_back', e.target.value); }}
											/>
										</div>
										<div className="color_select">
											<label>文字色</label>
											<input
												type="color"
												value={inputData.badge_free_style.color}
												onChange={(e) => { onSetColor('badge_color', e.target.value); }}
											/>
										</div>
									</div>
									:
									<></>
								}
							</div>
						</div>
						:
						<></>
					}
				</div>
				<button className="submit_btn" onClick={createTODO}>作成</button>
			</div>
		</div>
	);
};

export default MobileTodoForm;