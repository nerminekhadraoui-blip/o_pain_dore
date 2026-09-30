/* ============================================================
   LA CARTE — une sélection de nos incontournables
   ------------------------------------------------------------
   Ce n'est pas la carte complète : seulement les produits
   les plus connus, pour donner une idée de la gamme et des prix.

   categorie : "viennoiseries" | "patisseries" | "pains"
               | "snacks" | "boissons"
   prix      : en dinars (3.5 = 3.500 DT) — vide ou 0 = « Prix en boutique »
   photo     : chemin vers assets/img/produits/... (vide = visuel d'attente)
   badge     : petit bandeau optionnel ("Incontournable", "Nouveau"…)
   ============================================================ */

window.OPD_CATEGORIES = [
  { id: "viennoiseries", nom: "Viennoiseries" },
  { id: "patisseries",   nom: "Pâtisseries" },
  { id: "pains",         nom: "Pains & Cakes" },
  { id: "snacks",        nom: "Snacks & Salés" },
  { id: "boissons",      nom: "Café & Boissons" }
];

const U = (id) => `https://images.unsplash.com/photo-${id}?w=500&q=80`;

window.OPD_PRODUITS = [
  // Viennoiseries
  { categorie: "viennoiseries", nom: "Croissant", description: "Pur beurre, feuilletage croustillant", prix: 2, photo: U("1555507036-ab1f4038024a") },
  { categorie: "viennoiseries", nom: "Pain au Chocolat", description: "Pâte feuilletée pur beurre, chocolat", prix: 2.4, photo: U("1623334044303-241021148842") },
  { categorie: "viennoiseries", nom: "Pain aux Raisins", description: "Crème pâtissière et raisins secs", prix: 2.4, photo: U("1608198093002-ad4e005484ec") },
  { categorie: "viennoiseries", nom: "Pain Suisse", description: "Crème pâtissière et pépites de chocolat", prix: 4.5, photo: "" },
  { categorie: "viennoiseries", nom: "Croissant Pistache", description: "Croissant pur beurre à la pistache", prix: 4, photo: "" },
  { categorie: "viennoiseries", nom: "New York Pistache", description: "Le fameux rouleau new-yorkais, version pistache", prix: 9.5, badge: "Incontournable", photo: "" },

  // Pâtisseries individuelles
  { categorie: "patisseries", nom: "Mille-feuille Vanille", description: "Feuilletage caramélisé, crème vanille", prix: 3.5, photo: U("1587668178277-295251f900ce") },
  { categorie: "patisseries", nom: "Éclair Chocolat", description: "Pâte à choux, crème chocolat", prix: 6, photo: U("1571115177098-24ec42ed204d") },
  { categorie: "patisseries", nom: "Éclair Pistache", description: "Pâte à choux, crème pistache", prix: 7, photo: "" },
  { categorie: "patisseries", nom: "Tarte Citron", description: "Crème citron et meringue légère", prix: 7.5, photo: "" },
  { categorie: "patisseries", nom: "Tarte aux Fruits", description: "Pâte sablée, fruits frais de saison", prix: 6.5, photo: U("1519915028121-7d3463d20b13") },
  { categorie: "patisseries", nom: "Opéra", description: "L'entremets classique café-chocolat", prix: 8, photo: "" },
  { categorie: "patisseries", nom: "O Pistacho Gourmand", description: "Notre gourmandise signature à la pistache", prix: 10.5, badge: "Signature", photo: "" },
  { categorie: "patisseries", nom: "Tiramisu", description: "En verrine, mascarpone et café", prix: 9, photo: "" },

  // Pains & cakes — farines spéciales
  { categorie: "pains", nom: "Baguette Tradition", description: "Croûte craquante, mie alvéolée", prix: 0, photo: U("1574085733277-851d9d856a3a") },
  { categorie: "pains", nom: "Pain aux Céréales", description: "Farine multicéréales et graines", prix: 0, badge: "Farine spéciale", photo: U("1549931319-a545753467c8") },
  { categorie: "pains", nom: "Pain au Chia", description: "Farine spéciale et graines de chia", prix: 0, badge: "Farine spéciale", photo: U("1509440159596-0249088772ff") },
  { categorie: "pains", nom: "Pain de Maïs", description: "Farine de maïs, en forme de brioche", prix: 0, badge: "Farine spéciale", photo: U("1585478259715-876acc5be8eb") },
  { categorie: "pains", nom: "Cake Citron Chia", description: "Cake entier au citron et graines de chia", prix: 19, photo: "" },
  { categorie: "pains", nom: "Cake Céréales", description: "Cake entier aux céréales", prix: 24, photo: "" },

  // Snacks & salés
  { categorie: "snacks", nom: "Sandwich Jambon Fromage", description: "Baguette fraîche, jambon, fromage et crudités", prix: 9, photo: U("1528735602780-2552fd46c7af") },
  { categorie: "snacks", nom: "Le Tunisien", description: "Le sandwich de la maison", prix: 7.5, photo: "" },
  { categorie: "snacks", nom: "Croissant Saumon", description: "Croissant garni au saumon", prix: 8.5, photo: "" },
  { categorie: "snacks", nom: "Quiche Poulet", description: "Pâte maison, garniture au poulet", prix: 6.5, photo: U("1600891964599-f61ba0e24092") },
  { categorie: "snacks", nom: "Salade César", description: "Poulet, croûtons, parmesan, sauce César", prix: 15, photo: U("1512621776951-a57141f2eefd") },
  { categorie: "snacks", nom: "Salade Niçoise", description: "La grande classique", prix: 14.5, photo: "" },

  // Café & boissons
  { categorie: "boissons", nom: "Espresso", description: "Serré et intense", prix: 3.5, photo: "" },
  { categorie: "boissons", nom: "Capucin", description: "Espresso et mousse de lait", prix: 4, photo: U("1495774856032-8b90bbb32b32") },
  { categorie: "boissons", nom: "Café Crème", description: "Espresso allongé au lait chaud", prix: 4.5, photo: U("1461023058943-07fcbe16d735") },
  { categorie: "boissons", nom: "Chocolat Chaud", description: "Onctueux et réconfortant", prix: 7.5, photo: U("1544145945-f90425340c7e") },
  { categorie: "boissons", nom: "Citronnade", description: "Maison, bien fraîche", prix: 6, photo: "" },
  { categorie: "boissons", nom: "Jus d'Orange", description: "Pressé minute", prix: 6.5, photo: U("1556679343-c7306c1976bc") }
];
