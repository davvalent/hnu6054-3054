---
title: Plan de cours
author: David Valentine
tags: [hnu6054, hnu3054]
description: |
  Humanités numériques : Web sémantique et données. Atelier sur les principes du Web sémantique et des données ouvertes liées.
date: "2024-06-10"
print: true
---

<script>
  import Abbr from '$lib/components/abbreviations.svelte';
</script>

## Informations

- Enseignant : David Valentine
- Disponibilités : sur rendez-vous
- Courriel : david.valentine@umontreal.ca

## Présentation

Depuis plusieurs années, les institutions patrimoniales et culturelles ont largement investi les technologies du web sémantique.
Les grandes masses de données désormais disponibles sous forme de données liées ouvrent la voie à de nombreuses applications dans les humanités, la culture et l’édition numérique.

Cet atelier est consacré aux applications du web sémantique dans ces domaines.
Il propose une introduction aux principes et aux technologies du web sémantique et du web de données (données liées).
En s’appuyant sur des projets réels, une attention particulière sera accordée à la pratique.
L’atelier s’intéressera aux fondements de la modélisation sémantique pour les données liées afin de se familiariser avec la lecture des modèles de données <Abbr abbr='rdf'/> (Resource Description Framework) et avec l’écriture de requêtes utilisant le protocole et le langage <Abbr abbr='sparql'/> (SPARQL Protocol and RDF Query Language).

Ce cours ne nécessite aucun prérequis technique et s’adresse à des étudiantes ou des étudiants sans formation informatique préalable.
Toutes les notions seront introduites et expliquées en cours.

### Objectifs

- Objectif général : initier les étudiantes et les étudiants aux principes du web sémantique et des données ouvertes et liées (Linked Open Data)
- Objectifs spécifiques : au terme du cours, l’étudiante sera en mesure
  - d’expliquer les principes du web sémantique et des données ouvertes liées
  - de décrire des informations en ayant recours au cadre de description <Abbr abbr='rdf'/> et ses notations
  - de réaliser des requêtes <Abbr abbr='sparql'/> simples
  - d’identifier des applications du web sémantique pertinentes dans le domaine des humanités numériques, de l’édition et de la culture

### Démarche pédagogique

Le programme des séances est conçu selon un parcours progressif.
Partant d’une présentation générale de l’architecture du web et des enjeux relatifs à la production de données ouvertes et liées, on envisage leur application au domaine culturel.
Pour en saisir les implications dans ce contexte, nous aborderons les enjeux de modélisation nécessaires à la compréhension de l’articulation entre les divers modèles du web sémantique.
Ces enjeux nous permettront de comprendre comment manipuler des données sur le web grâce au langage de requête <Abbr abbr='sparql'/>.

Le cours se déroule en trois séances intensives qui associent étroitement la théorie et son application à la pratique.
Les exposés magistraux seront ponctués de petits exercices pratiques qui visent à mettre en action les notions abordées.

## Évaluation

### Travaux

<!-- Option séances thématiques :

- Travail pratique (chez soi) : exploration d’un graphe avec une interface graphique (Sparnatural) (30%)
- Travail pratique (chez soi) : travail de modélisation (30%)
- Travail pratique (chez soi) sur des requêtes SPARQL (40%)

Original : -->

- Travail pratique (chez soi) d’exploration d’un entrepôt <Abbr abbr='rdf'/> avec l’application Sparnatural (40%)
- Travail pratique (chez soi) sur l’analyse d’un projet du web sémantique et sur la production de requêtes <Abbr abbr='sparql'/> (50%)
- Participation et présence en classe (10%)

Comme l’atelier s’adresse à des novices, c’est la participation aux exercices qui est principalement évaluée, plus que les résultats.

Remarque : les exigences propres aux sigles HNU6054 et HNU3054 seront décrites en classe.

### Participation

La participation au cours est requise et votre présence sera vérifiée à chaque séance.
Dans l’éventualité où vous deviez rencontrer des difficultés pour remplir ces obligations, prière de bien vouloir immédiatement prendre contact avec l’enseignant.

### Lectures et travail personnel 

Outre une bibliographie sommaire, des lectures sont proposées.
Ces références sont indiquées dans le plan de cours.
Merci d’avoir lu et étudié ces publications avant les sessions afin de pouvoir en discuter.
À cet effet, il est recommandé de prendre des notes pendant vos lectures, et de les apporter en cours.

## Intégrité, fraude et plagiat

Ce cours observe la politique de l’Université de Montréal sur l’intégrité dans les études qui est consultable à cette adresse : [https://integrite.umontreal.ca](https://integrite.umontreal.ca).
Il est de votre devoir de la connaître et de vous y conformer.

### Intelligence artificielle générative

Si vous prévoyez de faire usage des outils de l’intelligence artificielle générative (ChatGPT, etc.) pour la réalisation de vos travaux, veuillez observer les modalités suivantes :

- consultez l’enseignant **avant** de commencer votre travail
- assurez-vous de bien comprendre les modalités d’utilisation de ces outils qui vous seront transmises dans le cadre de cet atelier

Ces modalités seront clairement explicitées et précisées sur avis d’intention de votre part.

## Accommodements

En accord avec la Politique-cadre sur l’intégration des personnes en situation de handicap à l’Université de Montréal, des mesures d’accommodement peuvent être mises en place pour les cours et les examens.
Pour pouvoir en bénéficier, vous devez tout d’abord vous inscrire au service de soutien aux étudiants en situation de handicap ([SESH](https://vieetudiante.umontreal.ca/a-propos/service/soutien-etudiants-situation-handicap)) qui évaluera vos besoins.
Indépendamment de cette démarche, n’hésitez pas à faire part à l’enseignant de difficultés éventuelles dont il faudrait tenir compte.

N’hésitez pas à consulter la page du Centre étudiant de soutien à la réussite (Cesar) : [http://cesar.umontreal.ca](http://cesar.umontreal.ca)

## Calendrier

### Séance 1 : lundi 10 juin 2024

- Architecture du web
- Principes du web sémantique et du Linked Open Data
- Applications du web sémantique au domaine culturel
- Le cadre de description <Abbr abbr='rdf'/> (si le temps le permet)

#### Lectures

- Tim Berners Lee, James Hendler, et Ora Lassila. « The Semantic Web. » *The Scientific American,* 17 May 2001. http://www.scientificamerican.com/article.cfm?id=the-semantic-web [traduction française par Elisabeth Lacombe et Jo Link-Pezet, voir fichier]
- Jonathan Blaney. Introduction to the Principles of Linked Open Data. The Programming Historian. 2017. https://doi.org/10.46430/phen0068
- *The next web*. Réalisé par Tim Berners-Lee. 2019. https://www.ted.com/talks/tim_berners_lee_the_next_web/

### Séance 2 : mercredi 12 juin 2024

- Le cadre de description <Abbr abbr='rdf'/>
- Présentation des exercices
- Ontologies et vocabulaires structurés
- TP RDF Schema

#### Lectures

- RDF 1.1 Primer, W3C Working Group Note, 24 June 2014, http://www.w3.org/TR/rdf11-primer/

### Séance 3 : vendredi 14 juin 2024

- Ontologies et vocabulaires structurés (suite)
- Le protocole et le langage de requête <Abbr abbr='sparql'/>
- TP Écriture de requêtes <Abbr abbr='sparql'/>
- Florilège d’applications du Linked Open Data
- Discussion

#### Lectures

- Bob Ducharme. « Jumping Right In: Some Data and Some Queries. » Learning SPARQL. Querying and Updating with SPARQL 1.1. 2e édition. O’Reilly, 2013
- Matthew Lincoln. Using SPARQL to access Linked Open Data. The Programming Historian. 2015. https://doi.org/10.46430/phen0047 **(retiré)**

<div class="pagebreak"></div>