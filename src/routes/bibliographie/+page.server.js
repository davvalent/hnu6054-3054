import {
  ZOTERO_API,
  ZOTERO_GROUP,
  ZOTERO_STYLE_URL
} from '$env/static/private';

import {
  processReferences
} from '$lib/processReferences.js';

export const load = async () => {

/**
 * @todo voir si citeproc.js serait possible, pour éviter les requêtes sur le réseau
 */

const zoteroApi = ZOTERO_API + ZOTERO_GROUP + "/collections/",
  response = await fetch( zoteroApi, { method: "GET" }),
  collections = await response.json();

const collectionsPlusFormattedReferences = await processReferences(
  zoteroApi,
  collections,
  ZOTERO_STYLE_URL
);

return {
    collections: collectionsPlusFormattedReferences
  };

}