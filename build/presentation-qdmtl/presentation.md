HNU6054 – Humanités numériques : Web sémantique et données

# Le projet QDMTL : données ouvertes et liées pour les quartiers disparus de Montréal

*La reconstitution sémantique des liaisons documentaires du Faubourg à m’lasse*

**David Valentine** - david.valentine@umontreal.ca

26 mai 2023

===vvvvvv===

# Plan de la présentation

1. Introduction
1. Le projet QDMTL
1. Méthodologie
1. Modèle
1. Applications

===>>>>>>===

# Introduction : contexte et objectifs

/** Notes **/

===vvvvvv===

## Les grandes expropriations à Montréal

- Décennies 1950-1960
- Pour faire place aux grands chantiers d’infrastructures
- Pour revitaliser des quartiers considérés vétustes
- Rencension des propriétés

(Charlebois et Linteau, 2014 ; Drouin, 2012 ; Teaford, 1990)<!-- .element: style="font-size: 1.75rem;" -->

/** Notes **/

- Alors dans les décennies 1950-1960, plusieurs milliers de personnes ont dû être expropriées par la ville pour faire place aux grands chantiers d’infrastructures.
- On pense par exemple la construction de la Maison de Radio-Canada, de l’autoroute Ville-Marie, échangeur Turcot, de la Place des arts, et j’en passe tout un paquet.
- On parle de plusieurs milliers de propriétés, pour vous donner un ordre de grandeur, réparti dans plusieurs processus d'expropriation
- Ce qui n’était pas exceptionnel; la plupart des grandes villes nord-américaines ont eu ce genre de pratique, la plus souvent pour faire passer des autoroutes.
- Cela dit, à Montréal, au moment de préparer ces expropriations, la ville procédait à une recension exhaustive des propriétés
- Donc c'est une mémoire qui relève d’une production documentaire administrative qui servait d’abord et avant tout à évaluer la valeur des propriétés
- Et c’est dans cette production documentaire que s’enracine le projet dont je veux vous parler.

===vvvvvv===

<!-- .slide: data-background-image="./fam.png" -->

## Faubourg à m’lasse

Secteur de la Maison de Radio-Canada

/** Notes **/

- Je m’intéresse à un secteur en particulier qui est celui de la maison de Radio-Canada, à l’époque c’t’un secteur qui était communément appelé le FÀM, enfin c’était une partie du FAM.
- Pour vous situer, vous voyez ce secteur, c’est la zone ombragée sur la carte ici de Montréal.
- L’ensemble documentaire lié à cette expropriation est constitué de deux grandes composantes, qui à l’origine, formaient un **tout**.

===vvvvvv===

<!-- .slide: data-background-image="./45-VM94C196-0206.jpg" -->

/** Notes **/

- La première de ces composantes, c’est d’abord une recension photographique, dont je vous montre un exemple de photographie
- On aperçoit le travail administratif sur cette photo, on voit en plein centre le fonctionnaire, qui tient le no d’inventaire 45.
- À côté du travail administratif, on voit également des enfants curieux de ce qui était en train de se passer.

===vvvvvv===

<!-- .slide: data-background-image="./45-VM94C196-0207.jpg" -->

/** Notes **/

- Sur la suivante, on se déplace quelques mètrse vcers l’est, et les enfants curieux ont suivi monsieur le fonctionnaire.
- Et dès lors que l’on s’intéresse à ces photographies, on comprend rapidement qu’elles sont le dépositaire du témoignage de la vie dans ces quartiers à cette époque là, valeur historique qui déborde largement du processus administratif, qui est un dispositif de production documentaire, dans notre perspective.
- C’est un exemple parmi des dizaines et des dizaines d’exemple de vie de quartier (référence aux enfants), dans ce secteur qui s’apprête, à l’époque de ces prises de vues, à être complètement rasé de la carte.

===vvvvvv===

<!-- .slide: data-background-image="./AP22293_M-61_ME_3765b.jpg" class="stack" -->

## Plan d’expropriation (détail)<!-- .element: style="background-color: rgba(217, 222, 222, 0.75); font-size: inherit;" -->

Archives de Montréal, CC BY-NC-SA 2.5 CA<!-- .element: style="background-color: rgba(217, 222, 222, 0.85); font-size: 2rem;" -->

/** Notes **/

- La seconde composante de cet ensemble documentaire, et ben c’est un plan, un plan d’arpentage très détaillé, à grande échelle, sur lequel apparaissent de très nombreuses informations.
- Parmi celles-ci, celle qui nous intéresse, c’est l’information qui permet de faire le lien entre la recension photographique et ce plan
- On observe en particulier sur ce plan une numérotation; donc ce sont les numéros encerclés qui nous intéressent
- Parce que chacun de ces numéros identifie un ensemble de photographies
- Donc en principe, toutes les photos peuvent être repérées sur ce plan
- Donc c’est une mémoire principalement matérialisée sous forme de photographies archivées

===vvvvvv===

<!-- .slide: data-background-image="./45-photo-plan.jpg"  -->

/** Notes **/

- Si l’on revient aux deux photos qu’on vient de voir, le fonctionnaire montre le numéro 45, c’est ce numéro qui nous permet de repérer cette photo sur le plan; en fait le numéro correspond à un ensemble de photographies.
- Or, si l’on consulte un plan comme celui qu'on voit (accessibles en ligne), dans le but de repérer des photos sur la base des numéros d’inventaire, et ben on se retrouve tout simplement devant une liste de plus de 1500 photos, dans laquelle vous allez devoir fouiller.
- Ce qui n’est pas très pratique ni très intéressant au fond, parce que vous aurez besoin d’énormément de temps et éventuellement de passion pour retrouver ces photos-là.
- Alors on se retrouve, d’une part, avec un plan très détaillé qui réfère, d’autre part, à des ensembles photographiques.
- Ce sont donc les deux composantes d'une forme de la mémoire montréalaise qui ne se parlent pas malgré le fait que tous ces docs là sont numérisés.
- Ou à tout le moins deux composantes qui ne se parlent pas dans les termes d’un lien formel qui nous permettraient d’utiliser ce fameux numéro d’inventaire, dont vous voyez un exemple dans les petits carrés verts.
- Donc malgré la mise à disposition de ces documents, l’absence de lien formel entre les photographies et les plans rend difficile, par exemple, la recherche au sein de ces ensembles documentaires

===>>>>>>===

# Le projet QDMTL

/** Notes **/

- Alors pour aborder ce problème, j’ai conçu un projet de modélisation sémantique
- Intitulé simplement le projet QDMTL dont le but est... SLIDE


===vvvvvv===

## Le projet QDMTL : objectifs

*Données ouvertes et liées pour les quartiers disparus de Montréal*

- **But** : représenter les quartiers disparus de Montréal
- Première étape : formaliser le lien entre plan d’expropriation <span>**→**</span> photographies

/** Notes **/

- ...de représenter les quartiers disparus de Montréal à l’aide des outils de modélisation du Web sémantique
- On part des documents que je vous ai montrés, donc on veut créer un lien formel, qui nous permette de chercher parmi des numéros
- Dans la première phase de ce projet, ce qui était au cœur des préoccupations, c’était la formalisation du lien entre le plan d’expropriation du Faubourg à m’lasse et les photos
- Et c’est pour ça que j'aime parler souvent de la reconstitution sémantique des liaisons documentaires.
- L'autre préoccupation c'est la représentation des bâtiments disparus, donc détruits.
- Tout ça, par une modélisation basée sur le cadre de descrition RDF dont on a parlé.

Spécifiquement les objectifs sont de :

- procéder à la modélisation sémantique du contexte archivistique en lien avec les objets du patrimoine disparu de Montréal
- constituer un jeu de données sous la forme d’un ensemble de triplets à partir d’informations extraites des fonds d’archives
- publier le jeu de données au moyen d’un entrepôt RDF de manière à  faciliter l’accès, la consultation et l’utilisation des informations

===vvvvvv===

## Dépouillement des documents d'archives

Échantillon :

- secteur : Maison de Radio-Canada (Faubourg à m'lasse)
- taille : 1500 photographies
- extraction manuelle des numéros d'inventaire

Compléments : régistres municipaux et plan d'assurance incendie

/** Notes **/

- Mais avant tout : dépouillement des photographies, pour extraire le fameux no d’inventaire
- par Yannic Rozon
- le projet repose en grande partie sur ce dépouillement qui a été effectué bien en amont du projet
- données préexistantes, une des principales motivations
- gentillesse de nous fournir tout cela.

===vvvvvv===

## Modèle QDMTL

<div style="display: flex">
    <div style="flex: 1">
        <h3>Axe archivistique</h3>
         <p><a href="https://www.ica.org/standards/RiC/RiC-O_v0-2.html">RiCO</a></p>
        <ul>
            <li>Document</li>
            <li>Contexte de conservation</li>
        </ul>
    </div>
    <div style="flex: 1">
        <h3>Axe patrimonial</h3>
        <p><a href="https://cidoc-crm.org/sites/default/files/cidoc_crm_v.7.1.1_0.pdf">CIDOC CRM</a></p>
        <ul>
            <li>Bâtiment</li>
            <li>Voie</li>
        </ul>
    </div>
</div>

(Bekiari et al., 2021 ; Clavaud et International Council on Archives Expert Group on Archival Description, 2021)<!-- .element: style="font-size: 1.75rem;" -->

/** Notes **/

- Alors ce modèle c’est une ontologie de domaine construite spécialement pour le projet, et qui emprunte des définitions de termes à plusieurs autres autres modèles;
- en, c’est comme ça que çâ fonctionne dans le monde du Web sem.
- Mais, enfin, il se déploie principalement en vertu de deux axes descriptifs, basés d’une part sur la RiCO, qui est développée par le conseil international des archives, pour formaliser le lien entre le plan et les photos sur la base des numéros d’inventaire
- Donc on va représenter des documents, le contexte de conservation, et des éléments de contenu liés à ces documents, par exemple les numéros d’inventaire.
- Et d’autre part il utilise le modèle conceptuel du CIDOC, avec une petite extension pour répondre à nos besoins, cette fois-ci pour formaliser le lien entre les objets du patrimoine disparu et les documents.
- Donc on va représenter des choses comme des bâtiments, ou des voies de circulation, par exemple.

===vvvvvv===

## Méthodologie

- Extraction manuelle des numéros d'inventaire : formalisé dans une structure tabulaire
- Extraction automatisé de métadonnées
- Analyse croisée des photographique, de différents plans et des rôles d’évaluation foncière

/** Notes **/

- images photographiques, de différents plans et des rôles d’évaluation foncière des années précédant la démolition

===vvvvvv===

## Méthodologie

Hypothèse de graphe fonctionnel

```txt
:Photo :identifiantSystématique :Identifiant ;
    :url :URL ;
    :numéroDinventaire :Numéro ;
    :montre :Bâtiment .

:Bâtiment :identifiant :Identifiant ;
    :appellation :Appellation ;
    :emplacement :Voie .
```

/** Notes **/

- Sur cette base avec ces infos, hypothèse
- C’est à partir de cette hypothèse que nous avons pu effectuer les choix qui allaient orienter la modélisation vers deux axes descriptifs
- soit l’utilisation des modèles ontologiques de la RiC-O (l’axe archivistique) et du CIDOC-CRM (l’axe patrimonial). Elle agit également comme un guide dans les premiers pas de la modélisation. De cette esquisse, il se dégage donc deux domaines de connaissance à articuler dans le cadre de ce projet.

===vvvvvv===

## Méthodologie

Une construction itérative de l'ontologie

Simplified Agile Methodology for Ontology Development (SAMOD)

- https://essepuntato.it/samod/
- https://github.com/qdmtl/qdmtl-tests (voir tc-004)

/** Notes **/

Une fonctionnalité à la fois

- test case
- modelet avec données
- cycle de développement

===vvvvvv===

## Modèle

URI

- <http://data.qdmtl.ca/>
- <http://onto.qdmtl.ca/>
- <http://vocab.qdmtl.ca/>

/** Notes **/

- identifier les ressources qui relèvent de l’ABox, soit les données décrivant les objets du monde réel (constituant l’essentiel du jeu de données)
- identifier les entités de la TBox, soit les données décrivant les termes du modèle, c’est-à-dire les classes et les propriétés
- définir un ensemble de termes alignés sur l’AAT grâce au modèle Simple Knowledge Organisation System (SKOS), termes qui sont utilisés pour le typage de certaines ressources, pour tirer partie de la mise en commun de connaissances externes largement utilisées dans le monde patrimonial.
===vvvvvv===
## Modèle

URI significatives

- <http://data.qdmtl.ca/Batiment/1476-1478-Dorchester>

/** Notes **/

- L’identification des ressources du jeu de données (ABox) s’effectue à l’aide d’URI significatives au lieu d’utiliser des identifiants génériques opaques. Ainsi, la partie locale de l’URI, c’est-à-dire le chemin qui suit le domaine <http://data.qdmtl.ca/> fournit une indication assez claire du type de ressource à laquelle elle donne accès. Par exemple, l’URI <http://data.qdmtl.ca/Batiment/1476-1478-Dorchester> représente un bâtiment (comme l’indique le premier segment du chemin) dont l’identifiant est constitué d’une plage de numéros civiques suivie de l’appellation d’une voie de communication.
===vvvvvv===

## L’axe archivistique

Représentation minimale d’une pièce d’archives et d’un fichier numérique

```txt
data:Record/VM094-C196-0370 a rico:Record ;
    rico:hasInstantiation data:Record/VM094-C196-0370/i/01 ,
        data:Record/VM094-C196-0370/i/02 ;
    rico:hasContentOfType vocab:photographicImage ;
    rico:hasOrHadIdentifier [ a rico:Identifier ;
            rdf:value 93 ;
            rico:hasIdentifierType vocab:inventoryNumber ] ,
        [ a rico:Identifier ;
            rico:hasIdentifierType vocab:archivalReferenceCode ;
            rico:textualValue “VM094-C196-0370” ] ;
    rdfs:label “VM094-C196-0370” .
data:Record/VM094-C196-0370/i/02 a rico:Instantiation ;
    rico:hasCarrierType vocab:digitalFile ;
    dcterms:format vocab:jpeg ;
    rdfs:label “VM94C196-0370.jpg” ;
    schema:image <https://archivesdemontreal.ica-atom.org/uploads/r/ville-de-montreal-section-des-archives/1/7/179601/VM94C196-0370.jpg> .
```

===vvvvvv===

## L’axe patrimonial

Une extension de CIDOC-CRM

<!-- .slide: data-background-image="./figure-2.png" class="stack" data-background-size="contain" -->

/** Notes **/

- mais d'autrse classes et propriétés sont utilisées.

===vvvvvv===
exemple minimal de description d’un bâtiment

```txt
data:Building/1065-1105-Maisonneuve a qdmtl:E24_Building ;
    ecrm:P101_had_as_general_use vocab:healthCare ;
    ecrm:P1_is_identified_by [ a ecrm:E42_Identifier ;
            rdf:value “1065-1105-Maisonneuve”^^xsd:string ],
        [ a ecrm:E41_Appellation ;
            rdfs:label “Hospice Sainte-Brigide”@fr ] ;
    ecrm:P53_has_former_or_current_location [ a ecrm:E53_Place ;
            ecrm:P168_place_is_defined_by [ a geo:Geometry ;
                    geo:asGeoJSON “{\”type\”: \”Point\”, \”coordinates\”: [-73.55034738779067,45.51998112444604]}”^^geo:geoJSONLiteral ] ] ;
    rdfs:label “1065-1105 rue Maisonneuve”@fr .
```

===vvvvvv===

## Lien formel

Hyper simple :

```txt
data:Record/VM094-C196-0370 rico:hasOrHadMainSubject
    data:Building/1065-1105-Maisonneuve .
```

/** Notes **/

- obtenir la liste des photographies d’archives numérisées liées à un numéro d’inventaire apparaissant sur un plan d’expropriation
- obtenir la liste des bâtiments représentés par une photographie d’archives
- vers SPARQL

===vvvvvv===

<!-- .slide: data-background-iframe="http://127.0.0.1/~david/dev-web/qdmtl-triple-store/" data-background-interactive -->

/** Notes **/

- Le jeu de données propose actuellement un accès à toutes les photographies liées au secteur disparu de la maison de Radio-Canada qui sont disponibles sur le site Web des archives de Montréal, avec les numéros d’inventaire permettant de les localiser sur le plan d’expropriation.
- Il rassemble également des informations sur les principaux bâtiments institutionnels du secteur, comme leurs appellations ou leurs emplacements.
- Alors voici ce que ça donne comme première forme d’application
- Point d’accès SPARQL, accessible ici à travers une une interface de requêtage.
- Évidemment j’ai une petite requête préparée, que je vais utiliser pour vous montrer à quel point c’est facile donc de repérer les photographies associées à un no d’inventaire, une fois que vous avez rédigé votre requête
- Donc je propose le no 45, que l’on regardait y quelques minutes sur les photos que je vous ai montrées
- C’est la première retombée intéressante de tout cet exercice, donc qui est le repérage de ces photos à partir d’un numéro d’inventaire qu’on va, lui, récupérer sur le plan
- bilingue

===>>>>>>===

# Plan interactif du Faubourg à m’lasse

===vvvvvv===

<!-- .slide: data-background-iframe="http://127.0.0.1/~david/dev-web/plan-interactif-faubourg/dist/" data-background-interactive class="stack" -->

/** Notes **/

- mentionner : géoréférencement, tuile
- Explorer : punaise représentent les coordonnées d’un bâtiment
- Ce qui intéressant de cette app, c’est qu’elle envoie des requêtes au point d’accès, tout comme l’interface de requêtage envoie des requêtes au point d’accès
- évidemment les requêtes sont différentes et les applications traitent les informations de façon très différente également
- Pas de différence entre les interfaces au fond : les deux utilisent les résultats des requêtes SPARQL
- dans un processus de négociation de contenu http à travers le protoocole http
- l’une pour créer un tableau, l’autre pour afficher des punaises sur un plan;
- seconde option simplement le traitement réservé aux données est plus complexe, mais il vient concrétiser et renforcer la formalisation du lien au sein duquel j’ai enraciné l’idée de la reconstitution sémantique des liaisons documentaires.
- MONTRER comment ça se fait, code

===>>>>>>===

# Publication et documentation

- Valentine, D. et Forest, D. (2023). *Le projet QDMTL&nbsp;: modéliser les quartiers disparus de Montréal avec des données ouvertes et liées*. Humanités numériques, (7). https://doi.org/10.4000/revuehn.3336
- https://qdmtl.ca



/** Notes **/

- Finalement, le modèle derrière, le jeu de données, en formalisant le lien entre le plan et les photos, montre un excellent potentiel pour résoudre les obstacles à la consultation qui demeure, malgré la numérisation des documents.
- N'hésitez pas à me contacter
- qdmtl.ca
- PIFM en ligne sous peu
- Humanités numériques

===vvvvvv===

## Pour en savoir plus
david.valentine@umontreal.ca

- https://qdmtl.ca
- https://github.com/qdmtl

===>>>>>>===

# HNU6054 : Conclusion

/** Notes **/

Ce cours consistait seulement en une rapide introduction aux technologies du web sémantique et du Linked Open Data. Bien sûr, en 4 demi-journée, il n’était pas question de faire de vous des spécialistes. Toutefois, vous devriez normalement maintenant être en mieux en mesure de comprendre de quoi il retourne.

Le web sémantique et le web de données ouvertes et liées offrent un prolongement du web pour mettre à disposition des données dans des formats structurés compréhensibles par les machines. Autrement dit, il s’agit d’une autre manière d’utiliser le web, ou d’une extension du web. Avec le web sémantique, on passe d’un web de documents à un web de données et il devient possible de construire toutes sortes de services qui consomment ces données.

Nombreuses applications possibles :

- agrégation de données hétérogènes
- publication de données ourtes dans des formats sémantiques très expressifs
- enrichissements et alignement de données

Au cours des dernières séances nous nous sommes également attardés sur l’écriture de requêtes SPARQL. SPARQL est à la fois un protocole et un langage de requête et de manipulation de données RDF. C’est un langage très puissant qui permet de construire toute sorte d’applications qui consomment des données sémantiques ou des données liées.

Qui doit faire les requêtes ? 

- Comme pour tout langage informatique, il y a bien sûr une difficulté technique qui tient à la maîtrise de la syntaxe du langage et la compréhension du modèle de données en graphe.
- Cependant, vous aurez également pu constater qu’une part importante de la difficulté est relative à la compréhension des ontologies et du modèle métier mobiliser pour décrire les données.
- C’est ce qui explique notamment qu’il ne soit pas toujours facile de trouver des développeurs compétents dans ce domaine.
- La difficulté du web sémantique tient au fait qu’il ne s’agit pas seulement d’informatique mais de représentation des connaissances, ce qui exige une bonne compréhension du domaine.

Peut-être vous ?

Le domaine du web sémantique et des données ouvertes et liées est un domaine particulièrement actif actuellement dans le secteur culturel au Canada et au Québec. On n’y a pas seulement besoin de techniciens mais de personnes qui comprennent le domaine d’application pour imaginer des utilisations possible.

Nous espérons donc que ce premier aperçu vous aura donné envie d’aller plus loins. Vous avez maintenant les fondamentaux, sachez quil est possible de se former aux technologies du web sémantique par des lectures ou en suivant des cours en ligne gratuit comme celui offert chaque année sur la plateforme d’enseignement en ligne francophone Fun ou OpenHPI.

===>>>>>>===
# Références

<div style="font-size: 1.5rem">

- Bekiari, C., Bruseker, G., Doerr, M., Ore, C.-E., Stead, S. et Velios, A. (dir.). Definition of the CIDOC Conceptual Reference Model Version 7.1.1. CIDOC CRM Special Interest Group. https://cidoc-crm.org/sites/default/files/cidoc_crm_v.7.1.1_0.pdf avril 2021.
- Charlebois, C. et Linteau, P.-A. (2014). Quartiers disparus : Red Light, Faubourg à M’lasse, Goose Village. Éditions Cardinal.
- Clavaud, F. et International Council on Archives Expert Group on Archival Description. (2021, 12 février). International Council on Archives Records in Contexts Ontology (ICA RiC-O) version 0.2. International Council on Archives. https://www.ica.org/standards/RiC/RiC-O_v0-2.html
- Drouin, M. (2012). De la démolition des taudis à la sauvegarde du patrimoine bâti (Montréal, 1954-1973). Urban History Review, 41(1), 22‑36. https://doi.org/10.7202/1013762ar
- Hawkins, A. (2021). Archives, linked data and the digital humanities: Increasing access to digitised and born-digital archives via the semantic web. Archival Science, 22, 319‑344. https://doi.org/10.1007/s10502-021-09381-0
- Moss, M., Thomas, D. et Gollins, T. (2018). The reconfiguration of the archive as data to be mined. Archivaria, 86(November), 118‑151.

</div>

===vvvvvv===

# Références (suite)

<div style="font-size: 1.5rem">

- Peroni, S. (2017). A Simplified Agile Methodology for Ontology Development. Dans M. Dragoni, M. Poveda-Villalón et E. Jimenez-Ruiz (dir.), OWL: Experiences and directions – Reasoner evaluation. 13th international workshop, OWLED 2016, and 5th international workshop, ORE 2016 (p. 55‑69). Springer International Publishing. https://doi.org/10.1007/978-3-319-54627-8_5
- Quadrilatère rue Amherst , rue Papineau, rue Craig et rue Dorchester (Radio-Canada). (1963). Fonds du service des affaires institutionnelles (VM094, SY, SS1, SSS3, C196), Archives de la Ville de Montréal, Montréal, Québec. https://archivesdemontreal.ica-atom.org/c196-quartier-demoli-radio-canada
- Robert, M. (2014). Photographes et archives photographiques des quartiers disparus. Dans C. Charlebois et P.-A. Linteau (dir.), Quartiers disparus : Red Light, Faubourg à M’lasse, Goose Village. Éditions Cardinal.
- Teaford, J. C. (1990). The rough road to renaissance: Urban revitalization in America, 1940-1985. Johns Hopkins University Press.
- Valentine, D. et Forest, D. (à paraître). Le projet QDMTL : décrire les quartiers disparus de Montréal par la modélisation et l’implémentation d’un réseau de données ouvertes. Humanités numériques, (7).

</div>