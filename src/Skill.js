import "./scss/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";

const Skill = () => {
	return (
		<div className="content_4">
			<div className="title">SKILL</div>
			<div className="skill_wrapper">
				<div className="top_wrapper">
					<div className="card">
						<div className="card_title">FRONT END</div>
						<div className="card_content_wrapper">
							<div className="level_wrapper">
								<div>javascript</div>
								<div className="level">
									<FontAwesomeIcon icon={faGem} className="valid_icon" />
									<FontAwesomeIcon icon={faGem} className="valid_icon" />
									<FontAwesomeIcon icon={faGem} className="valid_icon" />
									<FontAwesomeIcon icon={faGem} className="valid_icon" />
									<FontAwesomeIcon icon={faGem} className="valid_icon" />
								</div>
							</div>
							<div className="level_wrapper">
								<div>React.js</div>
								<div className="level">
									<FontAwesomeIcon icon={faGem} className="valid_icon" />
									<FontAwesomeIcon icon={faGem} className="valid_icon" />
									<FontAwesomeIcon icon={faGem} className="valid_icon" />
									<FontAwesomeIcon icon={faGem} className="valid_icon" />
									<FontAwesomeIcon icon={faGem} className="valid_icon" />
								</div>
							</div>
							<div className="level_wrapper">
								<div>TypeScript</div>
								<div className="level">
									<FontAwesomeIcon icon={faGem} className="valid_icon" />
									<FontAwesomeIcon icon={faGem} className="valid_icon" />
									<FontAwesomeIcon icon={faGem} className="valid_icon" />
									<FontAwesomeIcon icon={faGem} className="valid_icon" />
									<FontAwesomeIcon icon={faGem} className="valid_icon" />
								</div>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card_title">BACK END</div>
						<div className="card_double_content_wrapper">
							<div className="card_content_wrapper">
								<div className="level_wrapper">
									<div>Node.js</div>
									<div className="level">
										<FontAwesomeIcon icon={faGem} className="valid_icon" />
										<FontAwesomeIcon icon={faGem} className="valid_icon" />
										<FontAwesomeIcon icon={faGem} className="valid_icon" />
										<FontAwesomeIcon icon={faGem} className="valid_icon" />
										<FontAwesomeIcon icon={faGem} className="valid_icon" />
									</div>
								</div>
								<div className="level_wrapper">
									<div>PHP（Laravel）</div>
									<div className="level">
										<FontAwesomeIcon icon={faGem} className="valid_icon" />
										<FontAwesomeIcon icon={faGem} className="valid_icon" />
										<FontAwesomeIcon icon={faGem} className="valid_icon" />
										<FontAwesomeIcon icon={faGem} className="valid_icon" />
										<FontAwesomeIcon icon={faGem} className="valid_icon" />
									</div>
								</div>
							</div>
							<div className="extra_skill">
								<div className="extra_title">DB</div>
								<div className="level_wrapper">
									<div>MySQL</div>
									<div className="level">
										<FontAwesomeIcon icon={faGem} className="valid_icon" />
										<FontAwesomeIcon icon={faGem} className="valid_icon" />
										<FontAwesomeIcon icon={faGem} className="valid_icon" />
										<FontAwesomeIcon icon={faGem} className="valid_icon" />
										<FontAwesomeIcon icon={faGem} className="valid_icon" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bottom_wrapper">
					<div className="card">
						<div className="card_title">ADOBE</div>
						<div className="card_content_wrapper">
							<div className="item">・Adobe XD</div>
							<div className="item">・Illustrator</div>
							<div className="item">・Photoshop</div>
							<div className="item">・After Effects</div>
							<div className="item">・Premiere</div>
						</div>
					</div>
					<div className="card">
						<div className="card_title">AWS</div>
						<div className="card_content_wrapper">
							<div className="item">・Lambda</div>
							<div className="item">・API Gateway</div>
							<div className="item">・EC2</div>
							<div className="item">・Cognito</div>
							<div className="item">・CloudWatch</div>
							<div className="item">・Code Pipeline</div>
							<div className="item">・S3</div>
							<div className="item">・Route53</div>
						</div>
					</div>
					<div className="card">
						<div className="card_title">OTHER</div>
						<div className="card_content_wrapper">
							<div className="item">・Git hub</div>
							<div className="item">・Slack</div>
							<div className="item">・Chatwork</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skill;