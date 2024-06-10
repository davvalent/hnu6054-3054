import {
  ZOTERO_API,
  ZOTERO_GROUP,
  ZOTERO_STYLE_URL
} from '$env/static/private';

export const load = async () => {

/**
 * @todo voir si citeproc.js serait possible, pour éviter les requêtes sur le réseau
 */

const zoteroApi = ZOTERO_API + ZOTERO_GROUP + "/collections/",
  response = await fetch( zoteroApi, { method: "GET" }),
  collections = await response.json();

const collectionsPlusFormattedReferences = await (async () => {

  return Promise.all(collections.map(async (collection) => {

    return fetch(zoteroApi + collection.key + "/items/top?format=bib&linkwrap=1&style=" + ZOTERO_STYLE_URL, {
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
      html = html.replaceAll(' style="margin-bottom: 1em;"', "");
      collection.formattedData = html.replace('<?xml version="1.0"?>\n', "");
      return collection;
    }).catch(e => console.log(e));
  }));
})();

collectionsPlusFormattedReferences.sort((a, b) => {
  if (a.data.name < b.data.name) {
    return -1;
  }
  if (a.data.name > b.data.name) {
    return 1;
  }
  return 0;
});

collectionsPlusFormattedReferences.forEach((coll => {
  coll.data.name = coll.data.name.match(/[0-9]{2}-(.+)/)[1];
}))

return {
    collections: collectionsPlusFormattedReferences
  };

}