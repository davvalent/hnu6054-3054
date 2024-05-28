/**
 * +layout.server.js
 * gestion des URL
 */

export const load = async ({ url }) => { // voir https://kit.svelte.dev/docs/load#universal-vs-server-input

  console.log("\x1b[33m%s\x1b[0m", "/* LOADING */")
  console.log("PATHNAME: ", url.pathname);

  console.log(url.searchParams.has("print"));

  let metaData, siteMetaData;

  let pathName = url.pathname.slice(1);
  const wontMatch = "wontMatch";

  const root = (/^[a-z0-9-]+$/.test(pathName))
    ? pathName
    : wontMatch;
  console.log("ROOT: ", root)

  const seances = (/^s\/.+$/.test(pathName))
    ? pathName
    : wontMatch;
  console.log("SÉANCE: ", seances)

  console.log("FINALLY: ", pathName)

  try {
    switch (pathName) {
      case root:
        metaData = await import(`$lib/content/pages/${pathName}.md`);
        break;
      case seances:
        pathName = pathName.match(/s\/(.+)/)[1];
        metaData = await import(`$lib/content/seances/${pathName}.md`);
        break;
      case "":
      default:  
        metaData = await import(`$lib/content/metadata.md`);
    }
  } catch (error) {
    // handling errors here leads to 404 which is what we want
    console.error(error);
    metaData = await import(`$lib/content/metadata.md`);
  }

  siteMetaData = await import(`$lib/content/site-metadata.md`);

  const { title, date, author, description, print } = metaData.metadata;
  const { siteTitle } = siteMetaData.metadata;
  
  return {
    title,
    siteTitle,
    author,
    date,
    description,
    print,
    path: url.pathname,
    layout: (url.searchParams.has("print")) ? "print" : "web"
  };
};