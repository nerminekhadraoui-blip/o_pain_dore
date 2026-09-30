/* ============================================================
   GRANDS GÂTEAUX — sur commande
   ------------------------------------------------------------
   Pour ajouter un gâteau : copier un bloc { ... }, le coller,
   changer les textes. Les prix sont en dinars (48 = 48.000 DT).

   collection : "fetes"      → apparaît dans la Collection des Fêtes
                "classiques" → toute l'année
   photo      : chemin vers assets/img/gateaux/... (vide = visuel d'attente)
   disponible : false = le gâteau est masqué du site

   ⚠ PRIX ET TAILLES = VALEURS D'EXEMPLE À CONFIRMER
   ============================================================ */

window.OPD_GATEAUX = [

  // ─────────────── COLLECTION DES FÊTES ───────────────
  {
    nom: "Bûche Praliné Noisette",
    description: "Biscuit noisette, croustillant feuilletine, mousse praliné",
    collection: "fetes",
    badge: "Nouveauté",
    photo: "",
    tailles: [
      { label: "6 parts",  prix: 55 },
      { label: "8 parts",  prix: 72 },
      { label: "10 parts", prix: 88 }
    ],
    disponible: true
  },
  {
    nom: "Bûche Trois Chocolats",
    description: "Mousses chocolat noir, lait et blanc sur biscuit cacao",
    collection: "fetes",
    badge: "Signature",
    photo: "",
    tailles: [
      { label: "6 parts",  prix: 55 },
      { label: "8 parts",  prix: 72 },
      { label: "10 parts", prix: 88 }
    ],
    disponible: true
  },
  {
    nom: "Bûche Vanille Fruits Rouges",
    description: "Crème légère vanille, cœur fruits rouges, dacquoise amande",
    collection: "fetes",
    badge: "",
    photo: "",
    tailles: [
      { label: "6 parts",  prix: 50 },
      { label: "8 parts",  prix: 66 },
      { label: "10 parts", prix: 80 }
    ],
    disponible: true
  },
  {
    nom: "Entremets Étoile Dorée",
    description: "Entremets du Nouvel An : mangue-passion, coco, feuille d'or",
    collection: "fetes",
    badge: "Édition limitée",
    photo: "",
    tailles: [
      { label: "6 parts",  prix: 60 },
      { label: "10 parts", prix: 95 }
    ],
    disponible: true
  },

  // ─────────────── NOS CLASSIQUES ───────────────
  {
    nom: "Forêt Noire",
    description: "Génoise chocolat, chantilly, cerises griottes",
    collection: "classiques",
    badge: "",
    photo: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&q=80",
    tailles: [
      { label: "4-6 pers.",   prix: 45 },
      { label: "8-10 pers.",  prix: 65 },
      { label: "12-15 pers.", prix: 85 }
    ],
    disponible: true
  },
  {
    nom: "Fraisier",
    description: "Génoise amande, mousseline, fraises fraîches",
    collection: "classiques",
    badge: "",
    photo: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=700&q=80",
    tailles: [
      { label: "4-6 pers.",   prix: 55 },
      { label: "8-10 pers.",  prix: 75 },
      { label: "12-15 pers.", prix: 95 }
    ],
    disponible: true
  },
  {
    nom: "Opéra",
    description: "Biscuit Joconde, ganache café, glaçage chocolat",
    collection: "classiques",
    badge: "",
    photo: "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=700&q=80",
    tailles: [
      { label: "4-6 pers.",   prix: 50 },
      { label: "8-10 pers.",  prix: 70 },
      { label: "12-15 pers.", prix: 90 }
    ],
    disponible: true
  },
  {
    nom: "Tarte Citron Meringuée",
    description: "Pâte sucrée, crème citron, meringue italienne",
    collection: "classiques",
    badge: "",
    photo: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=700&q=80",
    tailles: [
      { label: "4-6 pers.",   prix: 40 },
      { label: "8-10 pers.",  prix: 60 },
      { label: "12-15 pers.", prix: 80 }
    ],
    disponible: true
  },
  {
    nom: "Cheesecake Basque",
    description: "Cream cheese, vanille, caramélisé au four",
    collection: "classiques",
    badge: "",
    photo: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=700&q=80",
    tailles: [
      { label: "4-6 pers.",   prix: 40 },
      { label: "8-10 pers.",  prix: 60 },
      { label: "12-15 pers.", prix: 75 }
    ],
    disponible: true
  },
  {
    nom: "Tiramisu",
    description: "Mascarpone, biscuits imbibés café, cacao",
    collection: "classiques",
    badge: "",
    photo: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=700&q=80",
    tailles: [
      { label: "4-6 pers.",   prix: 42 },
      { label: "8-10 pers.",  prix: 62 },
      { label: "12-15 pers.", prix: 82 }
    ],
    disponible: true
  }
];
