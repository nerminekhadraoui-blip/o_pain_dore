/* ============================================================
   Ô PAIN DORÉ — CONFIGURATION GÉNÉRALE
   ------------------------------------------------------------
   C'est ICI qu'on modifie les infos pratiques du site :
   téléphone, email, horaires, liens, formulaire d'avis,
   et l'activation de la « Collection des Fêtes ».
   ============================================================ */

window.OPD_CONFIG = {

  nom: "Ô Pain Doré",

  // ── Contact ──────────────────────────────────────────────
  telephone: "+21621128626",          // format international, sans espaces
  telephoneAffiche: "+216 21 128 626", // format affiché sur le site
  whatsapp: "21621128626",            // mettre "" pour masquer les boutons WhatsApp
  email: "",                          // ex. "contact@opaindore.tn" — vide = masqué

  adresse: "35 rue Garibaldi, Tunis",
  lienGoogleMaps: "https://share.google/j6yktT2wS4CkN2mq3",
  lienAvisGoogle: "https://share.google/JnN5GpYdDebJEFek0",
  noteGoogle: "4,2",        // note affichée en haut des avis (vide = masquée)
  nombreAvisGoogle: 216,    // à mettre à jour de temps en temps

  // ── Réseaux sociaux (vide = masqué) ──────────────────────
  instagram: "https://www.instagram.com/o_pain_dore1/",
  facebook: "",
  tiktok: "",

  // ── Horaires ─────────────────────────────────────────────
  horaires: [
    { jours: "Lundi — Samedi", heures: "06:30 — 19:30" },
    { jours: "Dimanche",       heures: "Fermé" }
  ],

  // ── Avis laissés sur le site ─────────────────────────────
  // Adresse de l'application Google Apps Script liée au Google Sheet
  // « Avis Ô Pain Doré » (se termine par /exec). Voir outils/avis-google-sheet.gs
  // Vide = le formulaire utilise Web3Forms, l'email ou WhatsApp.
  avisSheetUrl: "",

  // ── Formulaire « Laisser un avis » ───────────────────────
  // Créer une clé gratuite sur https://web3forms.com avec l'email
  // de la boulangerie, puis la coller ci-dessous.
  // Tant que la clé est vide, le formulaire ouvre un email pré-rempli
  // (si "email" est renseigné) ou un message WhatsApp.
  web3formsKey: "",

  // ── Collection des Fêtes ─────────────────────────────────
  fetes: {
    active: true,                         // false = on repasse aux classiques
    titre: "Collection des Fêtes",
    annee: "2026",
    message: "Bûches et entremets de fin d'année — commandes ouvertes",
    dateLimite: ""                        // ex. "Commandes jusqu'au 20 décembre" — vide = masqué
  },

  delaiCommandeParDefaut: "48h à l'avance"
};
