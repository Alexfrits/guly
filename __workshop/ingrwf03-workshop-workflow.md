# INGRWF03 - WorkFlow

## Planning / Roadmap / Backlog

1. Phases (analyses, recherches, dev, debug, présentation)
2. Tâches
3. Responsable
4. Priorité

### Méthode MoSCoW (priorités)

+ __M__ust, __S__hould, __C__ould, __W__on't
+ Vital, Essentiel, Confort, Luxe

> Attention à inclure votre veille (lecture, recherche, comparaison, test, …)

## Main tools

### MAMP

Changer le chemin du dossier ROOT pour que `http://localhost:8888` corresponde au __dossier DEV__ de votre projet.
Objectif : éciter tous problèmes d'URL liés au domaine.
Un redémarrage de l'ordinateur est nécessaire.


### Dropbox / Google Drive

Pour la gestion des fichiers “non-texte” et/ou qui ne sont pas directement au fonctionnement au site : scans de sketches, photoshop, illustrator, données du client, etc…


### Podio

Pour la gestion des tâches, suivi de bugs, messagerie, …
A la demande pour les curieux / intéressés.


### GIT

__Git__ sera utilisé comme gestionnaire de version.

Il permet d'identifier les différentes modifications apportée à l'arborescence du projet ainsi que leurs auteurs.

Il est donc possible de “tracer” l'évolution du projet et de revenir à des versions précédentes.

Pour que l'ensemble soit efficace, il convient d'ajouter régulièrement à des petits ensembles de modifications fonctionnelles. Il s'agit du __commit__.
Chaque commit contient un message de __log__ qui permet de décrire les changements correspondants.

Il ne s'agit donc pas de faire des sauvegardes quotidiennes…

Le schéma classique est le suivant :

1. Chaque membre de l'équipe __clone__ le dépôt distant sur sa machine
2. Pour chaque ensemble de modifications, il réalise un __commit__ avec un __message__. Si nécessaire, il ajoute les nouveaux fichiers à l'__index__
3. Il __push__ ensuite ses différents commits. C'est à dire qu'il les fusionne avec le dépôt central.
4. Si un autre membre de l'équipe a modifié le dépôt central entre-temps, il devra au préalable récupérer ces changement et les fusionner localement via un __pull__ (= fetch + merge). En effet, il est obligatoire d'avoir une version locale à jour avant d'ajouter des modifications.
5. Dans certains cas, il peut y avoir différentes versions d'un même fichier. Il faut alors règler le conflit, on parle de __merge conflict__.

> Afin d'éviter des conflits inutiles, on tentera de ne garder que les fichiers de développement dans le dépôt. Cela permet de travail sur des partials ou des imports sans générer de conflits pour les fichiers de production (compilés, concaténés, minifiés, …). On utilise le fichier `.gitignore`
> Git ne vous dispense pas de répartir les tâches inteligemment et de communiquer un minimum ! :)

Une autre fonctionnalité intéressante est le principe de __branch__.
Une branche s'avère utile pour créer une version provisoire du projet associée à une fonctionnalité. On développe et teste avant de fusionner la branche de la fonctionnalité avec la branche principale (__master__).

1. Un membre de l'équipe crée une nouvelle branche liée à une fonctionnalité : `$ git branch feature`
2. Il switche ensuite sur cette branche pour démarrer son développement : `$ git checkout feature`
3. Il “commite et pousse” proprement ses changement sur la branche de fonctionnalité : `$ git commit -a -m 'nouvelle fonctionnalité'` et `$ git push origin feature`
4. Lorsqu'il a terminé, il repasse sur la branche principale et fusionne avec la branche de fonctionnalité : `git checkout master` et `git merge feature`

-----

> git status
> git add [file] + git commit -m 'log' / git commit -a -m 'log'
> git rm [file] / git rm --cached [file] 

-----

[Centralized Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/centralized-workflow)

Afin de pouvoir déployer une version “build” en production, nous allons utiliser deux dépôts distants !

Un dépôt central de développement, distant, chez Github.
Il sera associé à la branche __master__ et aux banches __<features>__
Pour le déploiement, nous utiliserons une tâche spécifique via Gulp et passerons par un dépôt distant chez Gandi.
Il sera associé à la branche __public__

#### Architecture

```
root/
|- dev/
|   |- styles/
|   |- scripts/
|   |- images/
|   |- index.html
|   |- …
|
|- htdocs/
|
|- .gitignore
|- node_modules
|- packge.json
|- gulpfile.js
|- README.md
|- …
```
