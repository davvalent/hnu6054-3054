export const load = async () => {

  let files = import.meta.glob('../lib/content/seances/*.md');
  files = Object.entries(files);

  const seances = await Promise.all(

    files.map(async ([path, resolver]) => {

      const { metadata } = await resolver();
      let slug = path.split('/');
      slug = slug[slug.length - 1].replace('.md', '');

      return {
        meta: metadata,
        slug: slug
      };
    })
  );

  // home page metedata (hpMetadata)
  const siteMetaData = await import(`../lib/content/metadata.md`);
	const { title, date, description } = siteMetaData.metadata;

  return {
    title,
    date,
    description,
    seances
  };
}