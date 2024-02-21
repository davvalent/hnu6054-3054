export async function load({ params }) {

	console.log("[slug]/+page.js	");
	console.log(params.slug);

  const post = await import(`../../../lib/content/seances/${params.slug}.md`);
	const { title, published_date } = post.metadata;
	const content = post.default.render().html;

	return {
		content,
		title,
		published_date
	};
}