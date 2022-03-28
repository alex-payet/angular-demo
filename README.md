# ANGULAR DEMO

## Prérequis

- ### Installation de [node.js](https://nodejs.org/fr/)

> Environnement permettant l’exécution de JavaScript côté serveur.

- ### Intégration de npm

Gestionnaire de paquets par défaut.

> Client de lignes de commande

> Dépôt distant de paquets publics et privés.

- ### Installation d'[Angular CLI](https://github.com/angular/angular-cli)

```console
npm install -g @angular/cli
```

## Création du projet

```console
ng new project-name
```

## Configuration du projet

- ### **package.json** et **package-lock.json**

Fichier de gestion des versions des librairies (dépendances) et d’exécution de scripts.

```json
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
},
"dependencies": {
    ...
},
"devDependencies": {
    ...
}
```

Seul le fichier package.json doit être édité. Le fichier package-lock.json est généré automatiquement par npm lors de l'installation ou de la mise à jour des paquets. Il doit être committé sur le gestionnaire de versions.

- ### **tsconfig.json**

Fichier de configuration pour [TypeScript](https://www.typescriptlang.org/).

- ### **angular.json**

Fichier de configuration pour [Angular](https://angular.io/).

- ### **karma.conf.js**

Fichier de configuration pour les tests [Karma](https://angular.io/guide/testing).

## Structure du projet

- ### node_modules

- ### main.ts

- ### src\assets

- ### src\environements

- ### src\app\

## **APP**

- ### *Module*

- ### *Route*

- ### *Component*

1. #### *.ts* **(Controleur)**

2. #### *.html* **(Vue)**

3. #### *.css* **(Styles)**

4. #### *.spec.ts* **(Tests)**

