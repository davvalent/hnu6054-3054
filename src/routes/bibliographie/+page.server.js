export const load = async () => {

/**
 * @todo voir si citeproc.js serait possible, pour éviter les requêtes sur le réseau
 */

/**
https://api.zotero.org/groups/3868811/collections/I3ZERLVA/items/top?format=bib&linkwrap=1&style=https://ntnlv.ca/csl/enseignement-df-auteur-date-simple-web.csl&locale=fr-CA
*/

// fetching collections
const response = await fetch(
  "https://api.zotero.org/groups/3868811/collections/", {
    method: "GET"
  }
),

collections = await response.json(),

collectionsPlusFormattedReferences = await (async () => {

  return Promise.all(collections.map(async (collection) => {

    return fetch(`https://api.zotero.org/groups/3868811/collections/${collection.key}/items/top?format=bib&linkwrap=1&style=https://www.zotero.org/styles/universite-du-quebec-a-montreal?source=1&locale=fr-CA`, {
      method: "GET",
      headers: new Headers({
        "content-type": "application/xhtml+xml"
       })
    })
    .then(response => response.text())
    .then(html => {
      html = html.replace('line-height: 1.35; ', "");
      html = html.replace("1em", "2em");
      html = html.replace("-1em", "-2em");
      collection.formattedData = html.replace('<?xml version="1.0"?>\n', "");
      return collection;
    }).catch(e => console.log(e));
  }));
})();

return {
    collections: collectionsPlusFormattedReferences
  };

}