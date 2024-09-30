/**
* Module de traitement des références bibliographiques
*/

async function formatReferences(zapi, collections, style) {

  return Promise.all(collections.map(async (collection) => {

    return fetch(zapi + collection.key + "/items/top?format=bib&linkwrap=1&style=" + style, {
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
}

export async function processReferences(zapi, collections, style) {
  const formatedReferences = await formatReferences(zapi, collections, style);

  formatedReferences.sort((a, b) => {
    if (a.data.name < b.data.name) {
      return -1;
    }
    if (a.data.name > b.data.name) {
      return 1;
    }
    return 0;
  });

  formatedReferences.forEach((coll => {
    coll.data.name = coll.data.name.match(/[0-9]{2}-(.+)/)[1];
  }))

  return formatedReferences
}