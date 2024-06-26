---
title: TP RDFS
author:
  - Emmanuel
  - David Valentine
date: "2024-06-12"
tags: [RDF, RDFs]
description: |
  Découverte de RDF et de la manipulation de ses fichiers
presentation: null
print: true
seance: 2
order: 2
deactivated: false
---

<script>
import { base } from '$app/paths';
</script>

Téléchargez (clic droit puis "Enregistrer la cible du lien sous" ou équivalent) le fichier suivant [exercices/CBWC-RDF-S.ttl]({base}/exercices/CBWC-RDF-S.ttl).

Modifier le fichier localement avec un éditeur de texte pour y ajouter les informations du tableau suivant associées à des vins qui sont déjà dans le fichier, mais sans autre information.

- Il faut indiquer que le `rdf:type` de ces éléments est `cb:Wine`.
- Il faut instancier les propriétés nom, prix et année avec le domaine et la portée pour chacune d’elles.
- Il faut aussi indiquer les types pour les prix (`xsd:decimal`) et les années (`xsd:gYear`).

| uri          | nom                      | prix  | année |
| ------------ | ------------------------ | ----- | ----- |
| wc:C00871996 | Château Montguérêt       | 14.65 | 2011  |
| wc:C00042101 | Riesling Hüge            | 7.95  | 2002  |
| wc:C00043125 | Domaine de l’Île Margaux | 22.80 | 2004  |

Analyse détaillée par Guy Lapalme : https://www.iro.umontreal.ca/~lapalme/ForestInsteadOfTheTrees/HTML/ch07s01.html