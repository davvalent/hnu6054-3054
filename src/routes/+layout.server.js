/**
 * +layout.server.js
 * gestion des URL
 */

import { base } from '$app/paths';

export const load = async ({ url }) => { // voir https://kit.svelte.dev/docs/load#universal-vs-server-input

  console.log("\x1b[33m%s\x1b[0m", "/* LOADING */")
  console.log("PATHNAME: ", url.pathname);

  let metaData, siteMetaData;

  let pathName = url.pathname;
  const wontMatch = "wontMatch";

  const reRoot = new RegExp(`^${base}\/([a-z0-9-]+)\/$`);
  const reSeances = new RegExp(`^${base}\/s\/(.+)\/$`);

  const root = (reRoot.test(pathName))
    ? pathName
    : wontMatch;
  console.log("ROOT: ", root)

  const seances = (reSeances.test(pathName))
    ? pathName
    : wontMatch;
  console.log("SÉANCE: ", seances)

  console.log("FINALLY: ", pathName)

  try {
    switch (pathName) {
      case root:
        pathName = pathName.match(reRoot)[1];
        metaData = await import(`$lib/content/pages/${pathName}.md`);
        break;
      case seances:
        pathName = pathName.match(reSeances)[1];
        metaData = await import(`$lib/content/seances/${pathName}.md`);
        break;
      case base:
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
  };
};