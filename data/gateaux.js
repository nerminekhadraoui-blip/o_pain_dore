/* ============================================================
   GRANDS GÂTEAUX — sur commande
   ------------------------------------------------------------
   Pour ajouter un gâteau : copier un bloc { ... }, le coller,
   changer les textes. Les prix sont en dinars (48 = 48.000 DT).

   collection : "fetes"      → apparaît dans la Collection des Fêtes
                "classiques" → toute l'année
   photo      : chemin vers assets/img/gateaux/... (vide = visuel d'attente)
   disponible : false = le gâteau est masqué du site

   ⚠ NOMS, DESCRIPTIONS ET PRIX À CONFIRMER
     prix: 0  →  s'affiche « Sur devis » tant que le vrai prix
     n'est pas renseigné.
   ============================================================ */

window.OPD_GATEAUX = [

  // ─────────────── COLLECTION DES FÊTES ───────────────
  {
    nom: "Bûche Praliné Noisette",
    description: "Biscuit roulé chocolat, crème praliné, éclats de noisettes caramélisées",
    collection: "fetes",
    badge: "Fêtes 2026",
    photo: "assets/img/gateaux/buche-praline-noisette.jpg",
    tailles: [
      { label: "6 parts",  prix: 0 },
      { label: "8 parts",  prix: 0 },
      { label: "10 parts", prix: 0 }
    ],
    disponible: true
  },

  {
    nom: "Bûche Fraises Chantilly",
    description: "Chantilly légère, fraises fraîches et menthe",
    collection: "fetes",
    badge: "Fêtes 2026",
    photo: "assets/img/gateaux/buche-fraises.jpg",
    tailles: [
      { label: "6 parts",  prix: 0 },
      { label: "8 parts",  prix: 0 },
      { label: "10 parts", prix: 0 }
    ],
    disponible: true
  },

  // Modèles prêts à remplir (masqués tant que disponible: false)
  {
    nom: "Bûche Trois Chocolats",
    description: "Mousses chocolat noir, lait et blanc sur biscuit cacao",
    collection: "fetes",
    badge: "",
    photo: "",
    tailles: [
      { label: "6 parts",  prix: 0 },
      { label: "8 parts",  prix: 0 },
      { label: "10 parts", prix: 0 }
    ],
    disponible: false
  },
  {
    nom: "Entremets du Nouvel An",
    description: "Entremets de fin d'année",
    collection: "fetes",
    badge: "Édition limitée",
    photo: "",
    tailles: [
      { label: "6 parts",  prix: 0 },
      { label: "8 parts",  prix: 0 },
      { label: "10 parts", prix: 0 }
    ],
    disponible: false
  },

  // ─────────────── NOS CLASSIQUES ───────────────
  {
    nom: "Entremets Pistache Framboise",
    description: "Biscuit pistache, cœur framboise, mousse vanille et feuille d'or",
    collection: "classiques",
    badge: "Signature",
    photo: "assets/img/gateaux/entremets-pistache-framboise.jpg",
    tailles: [
      { label: "6 parts",  prix: 0 },
      { label: "8 parts",  prix: 0 },
      { label: "10 parts", prix: 0 }
    ],
    disponible: true
  },
  {
    nom: "Plaisir Chocolat Praliné",
    description: "Fond chocolat, chocolat fondant et praliné noisette",
    collection: "classiques",
    badge: "",
    photo: "assets/img/gateaux/plaisir-chocolat-praline.jpg",
    tailles: [
      { label: "6 parts",  prix: 0 },
      { label: "8 parts",  prix: 0 },
      { label: "10 parts", prix: 0 }
    ],
    disponible: true
  },
  {
    nom: "Chocolat Intense",
    description: "Génoise chocolat, ganache montée au chocolat noir, feuilles d'or",
    collection: "classiques",
    badge: "Signature",
    photo: "assets/img/gateaux/chocolat-intense.jpg",
    tailles: [
      { label: "6 parts",  prix: 0 },
      { label: "8 parts",  prix: 0 },
      { label: "10 parts", prix: 0 }
    ],
    disponible: true
  },
  {
    nom: "Duo Chocolat Pistache",
    description: "Couches chocolat, crème chocolat, pistaches concassées",
    collection: "classiques",
    badge: "",
    photo: "assets/img/gateaux/duo-chocolat-pistache.jpg",
    tailles: [
      { label: "6 parts",  prix: 0 },
      { label: "8 parts",  prix: 0 },
      { label: "10 parts", prix: 0 }
    ],
    disponible: true
  },
  {
    nom: "Chocolat Noisette",
    description: "Glaçage miroir chocolat, tuiles chocolat aux éclats de noisettes",
    collection: "classiques",
    badge: "",
    photo: "assets/img/gateaux/chocolat-noisette.jpg",
    tailles: [
      { label: "6 parts",  prix: 0 },
      { label: "8 parts",  prix: 0 },
      { label: "10 parts", prix: 0 }
    ],
    disponible: true
  },
  {
    nom: "Rocher Chocolat",
    description: "Enrobage chocolat croustillant, glaçage brillant, noisettes",
    collection: "classiques",
    badge: "",
    photo: "assets/img/gateaux/rocher-chocolat.jpg",
    tailles: [
      { label: "6 parts",  prix: 0 },
      { label: "8 parts",  prix: 0 },
      { label: "10 parts", prix: 0 }
    ],
    disponible: true
  },
  {
    nom: "Caramel Noisette",
    description: "Couches croustillantes, crème caramel, noisettes caramélisées",
    collection: "classiques",
    badge: "",
    photo: "assets/img/gateaux/caramel-noisette.jpg",
    tailles: [
      { label: "6 parts",  prix: 0 },
      { label: "8 parts",  prix: 0 },
      { label: "10 parts", prix: 0 }
    ],
    disponible: true
  },
  {
    nom: "Pistache Noisette",
    description: "Couches crème pistache et praliné, croustillant noisette",
    collection: "classiques",
    badge: "",
    photo: "assets/img/gateaux/pistache-noisette.jpg",
    tailles: [
      { label: "6 parts",  prix: 0 },
      { label: "8 parts",  prix: 0 },
      { label: "10 parts", prix: 0 }
    ],
    disponible: true
  },
  {
    nom: "Pistache Chantilly",
    description: "Crème pistache, chantilly légère, pistaches concassées",
    collection: "classiques",
    badge: "",
    photo: "assets/img/gateaux/pistache-chantilly.jpg",
    tailles: [
      { label: "6 parts",  prix: 0 },
      { label: "8 parts",  prix: 0 },
      { label: "10 parts", prix: 0 }
    ],
    disponible: true
  },
  {
    nom: "Vanille Framboise",
    description: "Mousse légère à la vanille, framboises fraîches, pistaches",
    collection: "classiques",
    badge: "",
    photo: "assets/img/gateaux/vanille-framboise.jpg",
    tailles: [
      { label: "6 parts",  prix: 0 },
      { label: "8 parts",  prix: 0 },
      { label: "10 parts", prix: 0 }
    ],
    disponible: true
  },
  {
    nom: "Framboise Rose",
    description: "Biscuit amande, confit de framboise, macarons et dentelle dorée",
    collection: "classiques",
    badge: "",
    photo: "assets/img/gateaux/framboise-rose.jpg",
    tailles: [
      { label: "6 parts",  prix: 0 },
      { label: "8 parts",  prix: 0 },
      { label: "10 parts", prix: 0 }
    ],
    disponible: true
  }
];

/* ============================================================
   GÂTEAUX PERSONNALISÉS — galerie de réalisations
   photo : assets/img/personnalises/...   legende : texte court
   ============================================================ */
window.OPD_PERSONNALISES = [
  { photo: "assets/img/personnalises/joyeux-anniversaire.jpg", legende: "Joyeux anniversaire fleuri" },
  { photo: "assets/img/personnalises/she-he.jpg",              legende: "Gender reveal" },
  { photo: "assets/img/personnalises/hello-28.jpg",            legende: "Hello 28" },
  { photo: "assets/img/personnalises/bye-bye-single-life.jpg", legende: "Enterrement de vie de jeune fille" },
  { photo: "assets/img/personnalises/season-20.jpg",           legende: "Season 20, final episode" }
];
