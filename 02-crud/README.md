## CRUD TS

Le but de cet exercice est de créer un court CRUD permettant d'ajouter des classes dans une BDD.
Dans le cadre de cet exercice, aucune base de données ne sera créée. Les opérations seront directement
stockés en RAM dans une classe `TaskRepository` afin de suivre la pattern MVC.

### [1] Mise en place de l'environnement
- Créer un nouveau projet NodeJS
- Installez les librairies:
  - de dev et de prod: `express`, `uuid4`
  - de dev uniquement: `@types/express`, `@types/node`, `nodemon`
- Créez un fichier index.ts à la racine de votre dossier dans un dossier `src/`
- Configurez un script `build` afin de pouvoir compiler votre projet dans un dossier `dist/`
- À l'aide de nodemon, créez un script `dev` afin de pouvoir lancer votre projet en mode développement. Ce script devra compiler votre projet et lancer le fichier `dist/index.js` à chaque modification.

### [2] Description d'une tâche
Une tâche doit comporter les propriétés suivantes
- Un id unique sous forme de uuid.
- Un contenu sous forme de chaine de caractère
- Une date de publication
- Un statut qui sera soit `done` ou `todo`.

### [3] Pattern MVC
Vous prendrez soin de créer un TaskRepository permettant de gérer la mise en cache des tâches et l'état du registre.
Vous créerez également un TaskController permettant de gérer les routes et de faire le lien entre le repository et la route API.
Enfin, directement dans le fichier index.js de votre app, vous associerez les méthodes du controller aux routes CRUD.

### [4] Routes
- `GET /tasks` : Récupère toutes les tâches
- `POST /tasks` : Crée une nouvelle tâche
- `GET /tasks/:id` : Récupère une tâche par son id
- `PUT /tasks/:id` : Met à jour une tâche par son id
- `DELETE /tasks/:id` : Supprime une tâche par son id
