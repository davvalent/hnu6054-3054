---
title: |
  Exercice 1 : explorer un entrepôt de données SPARQL avec un outil graphique
author:
  - David Valentine
  - Emmanuel Château-Dutier
description: |
  Exploration d’un entrepôt de données SPARQL avec un outil graphique : données muséales avec DBpedia et Sparnatural.
date: "2024-06-12"
tags: [triple store, GUI]
presentation: null
seance: 2
order: 2
print: true
---
[DBpedia](https://www.dbpedia.org) est une plateforme de données liées offrant un accès à de larges jeux de données produits à partir des informations de l’encyclopédie libre *Wikipédia*.
Cette plateforme propose plusieurs modes d’accès à ses données, dont un point d’accès SPARQL auquel il est possible de brancher des interfaces de requêtes.

Dans le cadre de cet exercice, nous utiliserons l’interface [Sparnatural](https://sparnatural.eu/) pour accéder aux données de DBpedia.
Cet outil graphique présente l’avantage de permettre, sans aucune connaissance informatique particulière, une approche intuitive de la formulation des requêtes et de l’obtention des listes de résultats.

L’objectif de cet exercice est de construire des requêtes avec ce service afin de télécharger un jeu de données et de vous familiariser avec l’utilisation des jeux de données liées.

1. Prendre connaissance de la [documentation](https://www.dbpedia.org/resources/sparql/) et du [schéma de données](https://mappings.dbpedia.org/index.php/Exploring_the_Ontology/).
1. Accédez à l’interface Sparnatural pour l’entrepôt de DBpedia : [http://sparnatural.eu/demos/demo-dbpedia-v2/index.html?lang=fr](http://sparnatural.eu/demos/demo-dbpedia-v2/index.html?lang=fr).
2. Au besoin, et au fur et à mesure de votre travail, vous pourrez avoir recours :
    - à la documentation mentionnée ci-dessus
    - aux exemples de requêtes, accessibles depuis la liste déroulante en haut à gauche dans l’interface (remarque : nécessite de recharger la page après visualisation des exemples dans l’outil graphique)
    - au guide d’utilisation, situé sous la liste déroulante des exemples de requêtes
3. Construire les requêtes suivantes et observer les résultats :
   - toutes les œuvres qui ont pour auteur `Dalí`, listées par année de création décroissante
   - ajouter à cette liste les musées qui exposent ces œuvres
   - inclure les œuvres pour lesquelles on ne dispose pas d’information sur le lieu d’exposition
   - chercher les artistes exposés dans les mêmes musées que Dalí
   - dresser une liste des œuvres par musées
   - dresser la liste des musées et trier par nombre décroissant d’œuvres
   - inventer une requête de votre choix
4. Pour chacune des requêtes, visualisez à chaque fois sa version SPARQL (cliquez sur **Afficher/Masquer éditeur SPARQL**) et essayez de comprendre à quoi celle-ci correspond
5. *Question bonus*. Essayez de modifier la première requête en SPARQL pour n’afficher que les sculptures; dans ce cas, utilisez le bouton de partage du lien accessible directement dans l’éditeur SPARQL, juste à gauche du bouton d’exécution de la requête (à gauche de l’icône *play*).

**Envoi de votre travail** : les résultats du travail sont à déposer sur StudiUM avant vendredi matin.
Pour chacune des requêtes à effectuer, vous devez fournir son permalien en cliquant sur le bouton **Partager** puis en copiant le lien qui s’affiche.
Assurez-vous que le lien est fonctionnel.

Nous reviendrons sur ces exercices en classe pour identifier les difficultés que vous avez rencontrées.

## Ressources

- https://lod-cloud.net/dataset/dbpedia