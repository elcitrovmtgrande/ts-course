# Création de la partie Frontend en React
En conclusion de notre cours, l'idée est de créer une application permettant de gérer une liste de tâches. Pour cela, nous allons utiliser React et Typescript.

## Process
1. Dans le App.tsx, codez la reception des taches une fois la page chargée.
2. Il doit être possible en fin de liste de rajouter une tâche en cliquant sur un bouton `Ajouter une tâche`.
3. Ce bouton doit charger tant que l'aciton coté backend n'est pas terminée.
4. Chaque tache doit etre supprimable à l'aide d'un clic de l'utilisateur en fin de ligne.
5. En debut de ligne d'une tache, une case doit etre cochable. Si cette case est cochée, l'état de la tache doit être modifié en `done` et si elle est décochée, l'état de la tache doit être modifié en `todo`.
6. Bonus : La tache ne doit pas etre clicable si celle-ci subit deja une modification d'etat.
