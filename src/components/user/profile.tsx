import user from './user.module.scss';
import { UserIcon } from '../assets';
export default function UserInfo() {
	return (
		<div className={user.userInfo}>
			<div className={user.user}>
				<UserIcon />
				<div className={user.userName}>
					<h3 className={user.h3}>Jonathan Doe</h3>
					<h4 className={user.h4}>Collaborator & Editor</h4>
				</div>
			</div>
			<div className={user.userDescription}>
				<p className={user.p}>
					Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel.
					Jonathan holds a degree in Computer Science and has spent years working in the tech
					industry, gaining a deep understanding of the impact technology has on our lives.
				</p>
			</div>
		</div>
	);
}
