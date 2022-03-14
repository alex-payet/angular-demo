# ANGULAR DEMO

## Prérequis

- ### Installation de [node.js](https://nodejs.org/fr/)

> Environnement permettant l’exécution de JavaScript côté serveur.

- ### Intégration de npm

Gestionnaire de paquets par défaut.

> Client en ligne de commande

> Base de données en ligne de paquets publics et privés.

- ### Installation d'[Angular CLI](https://github.com/angular/angular-cli)

```console
npm install -g @angular/cli
```

## Création du projet

```console
ng new project-name
```

## La configuration

- ### **package.json** et **package-lock.json**

Fichier de gestion des version des librairie et d’exécution de script.

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

- ### **tsconfig.json**

Fichier de configuration pour [TypeScript](https://www.typescriptlang.org/).

- ### **angular.json**

Fichier de configuration pour [Angular](https://angular.io/).

- ### **karma.conf.js**

Fichier de configuration pour les test [Karma](https://angular.io/guide/testing).

## La structure du projet

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

3. #### *.css* **(Style)**

4. #### *.spec.ts* **(Test)**

## Exécuter avec docker

## Build
```
docker build -t angular-demo-image .
```
