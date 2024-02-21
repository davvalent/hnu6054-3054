# HNU 6054-3054

Dépôt des sources du site web.

Pour installation :

- git clone
- npm install
- npm run dev -- --open

Pour build :

- git checkout deploy
- git rebase dev
- npm run build

# Notes techniques

Voir NOTES.md

Site statique basé sur Svelte, routing avec Svelte Kit et build avec Vite.

Extensions : voir `svelte.config.js`

## Versionnement

Les contenus sont intégrés au site par le biais d'un sous-dépôt.

### Branches

- deploy : build seulement sur la branche deploy, car je ne veux pas commiter les builds sur les flows qui se retrouvent dans la branche main; push sur deploy déclenche le déploiement sur GH et sur ntnlv.ca

# Tree
