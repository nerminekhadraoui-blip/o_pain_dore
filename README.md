# Ô Pain Doré — site vitrine

Site de la boulangerie · pâtisserie · café **Ô Pain Doré**, 35 rue Garibaldi, Tunis.
Fait maison, farines spéciales (céréales, chia, maïs), viennoiseries pur beurre, grands gâteaux sur commande.

📞 Commandes : **+216 21 128 626** · 📸 [Instagram](https://www.instagram.com/o_pain_dore1/)

---

## Ce que contient le site

| Section | Contenu | Se modifie dans |
|---|---|---|
| Accueil | Grande image, bandeau « Collection des Fêtes » | `index.html`, `assets/js/config.js` |
| Notre histoire | Présentation de la famille et du lieu | `index.html` |
| La carte | Produits par catégorie, avec prix | `data/produits.js` |
| Grands gâteaux | Collection des fêtes + classiques, prix par taille, boutons Appeler / WhatsApp | `data/gateaux.js` |
| L'espace | Galerie photos du lieu | `index.html` + `assets/img/espace/` |
| Avis | Avis clients + formulaire « Laisser un avis » envoyé par email | `data/avis.js`, `assets/js/config.js` |
| Contact | Horaires, adresse, carte, réseaux | `assets/js/config.js` |

## Organisation des fichiers

```
o_pain_dore/
├── index.html              ← la page du site
├── 404.html                ← page « introuvable »
├── assets/
│   ├── css/style.css       ← le design (couleurs, polices…)
│   ├── js/config.js        ← ✏️ téléphone, email, horaires, fêtes, formulaire
│   ├── js/render.js        ← affiche les données (ne pas toucher)
│   ├── js/main.js          ← animations, filtres, formulaire (ne pas toucher)
│   └── img/
│       ├── espace/         ← 📷 photos du lieu
│       ├── gateaux/        ← 📷 photos des grands gâteaux
│       ├── produits/       ← 📷 photos de la carte
│       └── marque/         ← logo, favicon, visuel d'attente
├── data/
│   ├── produits.js         ← ✏️ la carte
│   ├── gateaux.js          ← ✏️ les grands gâteaux (tailles + prix)
│   └── avis.js             ← ✏️ les avis affichés
├── robots.txt, sitemap.xml ← référencement Google
└── README.md
```

## Voir le site sur son ordinateur

**Le plus simple :** télécharger le projet (bouton vert *Code → Download ZIP*), le décompresser, puis **double-cliquer sur `index.html`**. Le site s'ouvre dans le navigateur.

**Avec VS Code (recommandé pour travailler dessus) :** installer l'extension *Live Server*, ouvrir le dossier, clic droit sur `index.html` → *Open with Live Server*. La page se recharge à chaque modification.

**En ligne de commande** (si Node.js est installé) : `npm start` puis ouvrir http://localhost:3000

## Technique

HTML, CSS et JavaScript sans framework ni étape de compilation : le dossier est publié tel quel.
Hébergement prévu : GitHub Pages (gratuit, HTTPS inclus).

> Après une modification des fichiers `.js` ou `.css`, changer le numéro `?v=…` dans `index.html` pour que les navigateurs rechargent la nouvelle version.
