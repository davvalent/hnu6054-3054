export async function load({ params }) {

	console.log("[slug]:", params.slug);

  const post = await import(`../../../lib/content/seances/${params.slug}.md`);
	const { title, presentation } = post.metadata;
	const content = post.default.render().html;

	return {
		content,
		title,
		presentation
	};
}