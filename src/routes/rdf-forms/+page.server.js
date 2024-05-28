import { DEFAULT_TTL_CODE } from "$env/static/private";

import {
  graph,
  parse,
  serialize
} from "rdflib";

export const load = async () => {
  return { code: DEFAULT_TTL_CODE };
}


export const actions = { // récupère automatiquement les données du formulaire
  default: async ({ request }) => { // request interface

    // données du formulaire
    const submitedData = await request.formData();
    const rdfString = submitedData.get("content");

    // initialise l'objet qui contient la représentation
    // ça s'appelle le "store"
    let store = graph();

    // parsing
    const baseURI = 'https://ouvroir.umontreal.ca/data/display#';
    let rdfGraph = await parse(rdfString, store, baseURI);

    // doc dit premier argument c'est un graph à sérialiser
    // mais avec null change rien
    const serialized = await serialize(null, store, baseURI, 'application/ld+json');
    console.log("=================================\n", serialized);

  }
};