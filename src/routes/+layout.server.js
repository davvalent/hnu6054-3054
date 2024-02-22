export const load = async ({ url }) => { // voir https://kit.svelte.dev/docs/load#universal-vs-server-input

  console.log(url.pathname);

  let metaData;

  let pathName = url.pathname.slice(1);
  const wontMatch = "wontMatch";

  const root = (/^[a-z0-9-]+$/.test(pathName))
    ? pathName
    : wontMatch;
  console.log("1 : ", root)

  const seances = (/^s\/.+$/.test(pathName))
    ? pathName
    : wontMatch;
  console.log("2 : ", seances)

  console.log("3 : ", pathName)

// pour l'instant, 500 (404) si la route ne matche pas avec un fichier md dans content 
switch (pathName) {
     case root:
       metaData = await import(`$lib/content/pages/${pathName}.md`);
       break;
    case seances:
      pathName = pathName.match(/s\/(.+)/)[1];
      metaData = await import(`$lib/content/seances/${pathName}.md`);
      break;
    default:
      metaData = await import(`$lib/content/metadata.md`);
  }
    
  const { title, date, author, description } = metaData.metadata;
  
  return {
    title,
    author,
    date,
    description,
    path: url.pathname
  };
};