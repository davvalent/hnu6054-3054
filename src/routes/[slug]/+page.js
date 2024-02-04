// src/routes/[slug]/+page.js
export async function load({ params }) {

  const post = await import(`../../lib/content/seances/${params.slug}.md`);
	const { title, published_date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		published_date
	};
}