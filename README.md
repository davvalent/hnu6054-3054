# HNU 6054-3054

Dépôt des sources du site web de l'atelier HNU 6054-3054.

Pour installation :

- git clone
- npm install
- npm run dev -- --open

http://localhost:5173

Pour build :

- git checkout deploy
- git merge dev
- npm run build

# Notes techniques

Voir /notes/NOTES.md

## Branches

- `deploy` :
  - build seulement sur la branche `deploy`, car on ne veut pas commiter les builds sur les flows qui se retrouvent dans `main`
  - push sur `deploy` déclenche le déploiement sur GH