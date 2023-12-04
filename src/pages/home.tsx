import home from './home.module.scss';

import { Outlet } from 'react-router-dom';
import { Header, UserInfo, ArticleCard, ArticlePost } from '../components';

export default function Home() {
	return (
		<div className={home.container}>
			<Header />
			<main>
				{/* Home */}
				<Outlet />
				<UserInfo />
				 <ArticleCard />
				{/* <ArticlePost /> */}
			</main>
		</div>
	);
}
