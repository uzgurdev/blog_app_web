import post from './post.module.scss';

export default function ArticlePost() {
	return (
		<div className={post.ArticlePost}>
			<div className={post.category}>
				<p className={post.category_p}>Technology</p>
			</div>
			<h3 className={post.h3}>
				The Impact of Technology on the Workplace: How Technology is Changing
			</h3>
			<div className={post.author_data}>
				<p>Tracey Wilson</p>
				<p>August 20, 2022</p>
			</div>
			<p>
				Traveling is an enriching experience that opens up new horizons, exposes us to different
				cultures, and creates memories that last a lifetime. However, traveling can also be
				stressful and overwhelming, especially if you don't plan and prepare adequately. In this
				blog article, we'll explore tips and tricks for a memorable journey and how to make the most
				of your travels. One of the most rewarding aspects of traveling is immersing yourself in the
				local culture and customs. This includes trying local cuisine, attending cultural events and
				festivals, and interacting with locals. Learning a few phrases in the local language can
				also go a long way in making connections and showing respect.
			</p>
		</div>
	);
}
