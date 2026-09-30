/* ============================================================
   LA CARTE — produits du quotidien
   ------------------------------------------------------------
   categorie : "viennoiseries" | "patisseries" | "boulangerie"
               | "snacks" | "boissons"
   prix      : en dinars (3.5 = 3.500 DT)
   photo     : chemin vers assets/img/produits/... (vide = visuel d'attente)
   badge     : petit bandeau optionnel ("Best-seller", "Nouveau"…)

   ⚠ PRIX = VALEURS D'EXEMPLE À CONFIRMER
   ============================================================ */

window.OPD_CATEGORIES = [
  { id: "viennoiseries", nom: "Viennoiseries" },
  { id: "patisseries",   nom: "Pâtisseries" },
  { id: "boulangerie",   nom: "Boulangerie" },
  { id: "snacks",        nom: "Snacks & Salés" },
  { id: "boissons",      nom: "Café & Boissons" }
];

const U = (id) => `https://images.unsplash.com/photo-${id}?w=500&q=80`;

window.OPD_PRODUITS = [
  // Viennoiseries
  { categorie: "viennoiseries", nom: "Croissant Pur Beurre", description: "Feuilletage croustillant, cœur moelleux", prix: 3.5, badge: "Best-seller", photo: U("1555507036-ab1f4038024a") },
  { categorie: "viennoiseries", nom: "Pain au Chocolat", description: "Chocolat noir fondant, pâte feuilletée pur beurre", prix: 4, photo: U("1623334044303-241021148842") },
  { categorie: "viennoiseries", nom: "Pain aux Raisins", description: "Crème pâtissière, raisins secs dorés", prix: 4, photo: U("1608198093002-ad4e005484ec") },
  { categorie: "viennoiseries", nom: "Chausson aux Pommes", description: "Compotée de pommes maison, feuilletage doré", prix: 4.5, photo: U("1612240498936-65f5101365d2") },

  // Pâtisseries
  { categorie: "patisseries", nom: "Éclair au Chocolat", description: "Crème au chocolat noir, glaçage miroir", prix: 6, badge: "Signature", photo: U("1571115177098-24ec42ed204d") },
  { categorie: "patisseries", nom: "Tarte aux Fruits", description: "Pâte sablée, crème pâtissière, fruits frais de saison", prix: 7, photo: U("1519915028121-7d3463d20b13") },
  { categorie: "patisseries", nom: "Paris-Brest", description: "Pâte à choux, crème pralinée noisette", prix: 7.5, photo: U("1614707267537-b85aaf00c4b7") },
  { categorie: "patisseries", nom: "Millefeuille Vanille", description: "Trois feuilletages, crème vanille de Madagascar", prix: 7, photo: U("1587668178277-295251f900ce") },

  // Boulangerie — farines spéciales
  { categorie: "boulangerie", nom: "Pain aux Céréales", description: "Farine multicéréales, graines de lin & tournesol", prix: 4.5, badge: "Farine spéciale", photo: U("1549931319-a545753467c8") },
  { categorie: "boulangerie", nom: "Pain au Chia", description: "Farine spéciale, graines de chia, croûte dorée", prix: 5, badge: "Farine spéciale", photo: U("1509440159596-0249088772ff") },
  { categorie: "boulangerie", nom: "Pain de Maïs", description: "Farine de maïs artisanale, texture fondante", prix: 4, badge: "Farine spéciale", photo: U("1585478259715-876acc5be8eb") },
  { categorie: "boulangerie", nom: "Baguette Tradition", description: "Croûte craquante, mie alvéolée, fermentation lente", prix: 2.5, photo: U("1574085733277-851d9d856a3a") },

  // Snacks & salés
  { categorie: "snacks", nom: "Sandwich Poulet Grillé", description: "Pain céréales, poulet mariné, crudités, sauce maison", prix: 9, photo: U("1528735602780-2552fd46c7af") },
  { categorie: "snacks", nom: "Salade César", description: "Poulet grillé, croûtons maison, parmesan, sauce César", prix: 12, photo: U("1512621776951-a57141f2eefd") },
  { categorie: "snacks", nom: "Quiche Maison", description: "Pâte brisée maison, crème, emmental, garniture du jour", prix: 7.5, photo: U("1600891964599-f61ba0e24092") },
  { categorie: "snacks", nom: "Croque Monsieur", description: "Pain de mie maison, jambon de dinde, béchamel, gruyère", prix: 8.5, photo: U("1481070555726-e2fe8357725c") },

  // Café & boissons
  { categorie: "boissons", nom: "Cappuccino", description: "Espresso, mousse de lait onctueuse", prix: 6, photo: U("1495774856032-8b90bbb32b32") },
  { categorie: "boissons", nom: "Café Latte", description: "Double espresso, lait chaud, choix de sirop", prix: 7, photo: U("1461023058943-07fcbe16d735") },
  { categorie: "boissons", nom: "Chocolat Chaud", description: "Chocolat noir fondu, lait entier, chantilly maison", prix: 7.5, photo: U("1544145945-f90425340c7e") },
  { categorie: "boissons", nom: "Jus Frais du Jour", description: "Orange pressée, fruits de saison", prix: 6.5, photo: U("1556679343-c7306c1976bc") }
];
