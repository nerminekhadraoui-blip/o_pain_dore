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
  { categorie: "viennoiseries", nom: "Croissant Chocolat Noisette", description: "Pâte feuilletée, chocolat fondant et éclats de noisette", prix: 2.7, badge: "Incontournable", photo: "assets/img/produits/croissant-chocolat-noisette.jpg" },
  { categorie: "viennoiseries", nom: "Croissant", description: "Pur beurre, feuilletage croustillant", prix: 2, photo: U("1555507036-ab1f4038024a") },
  { categorie: "viennoiseries", nom: "Pain au Chocolat", description: "Pâte feuilletée pur beurre, chocolat", prix: 2.4, photo: U("1623334044303-241021148842") },
  { categorie: "viennoiseries", nom: "Pain aux Raisins", description: "Crème pâtissière et raisins secs", prix: 2.4, photo: U("1608198093002-ad4e005484ec") },
  { categorie: "viennoiseries", nom: "Pain Suisse", description: "Crème pâtissière et pépites de chocolat", prix: 4.5, photo: "" },
  { categorie: "viennoiseries", nom: "Croissant Pistache", description: "Croissant pur beurre à la pistache", prix: 4, photo: "" },
  { categorie: "viennoiseries", nom: "New York Pistache", description: "Le fameux rouleau new-yorkais, version pistache", prix: 9.5, photo: "" },

  // Pâtisseries individuelles
  { categorie: "patisseries", nom: "O Pistacho Gourmand", description: "Notre gourmandise signature à la pistache", prix: 10.5, badge: "Signature", photo: "assets/img/produits/o-pistacho-gourmand.jpg" },
  { categorie: "patisseries", nom: "Fraisier", description: "Crème légère et fraises fraîches", prix: 9, photo: "assets/img/produits/fraisier.jpg" },
  { categorie: "patisseries", nom: "Tout Chocolat", description: "Biscuit et crémeux au chocolat", prix: 8, photo: "assets/img/produits/tout-chocolat.jpg" },
  { categorie: "patisseries", nom: "Chocolat Noisette", description: "Couches croustillantes, crème noisette, glaçage chocolat", prix: 9.5, photo: "assets/img/produits/chocolat-noisette.jpg" },
  { categorie: "patisseries", nom: "O Framboise", description: "Biscuit, confit de framboise, macaron", prix: 9.5, photo: "assets/img/produits/o-framboise.jpg" },
  { categorie: "patisseries", nom: "Tarte Pistache", description: "Pâte sablée, crème pistache, pistaches concassées", prix: 8, photo: "assets/img/produits/tarte-pistache.jpg" },
  { categorie: "patisseries", nom: "Mille-feuille Vanille", description: "Feuilletage caramélisé, crème vanille", prix: 3.5, photo: U("1587668178277-295251f900ce") },
  { categorie: "patisseries", nom: "Tarte Citron", description: "Crème citron et meringue légère", prix: 7.5, photo: "" },
  { categorie: "patisseries", nom: "Éclair Chocolat", description: "Pâte à choux, crème chocolat", prix: 6, photo: U("1571115177098-24ec42ed204d") },
  { categorie: "patisseries", nom: "Tarte aux Fruits", description: "Pâte sablée, fruits frais de saison", prix: 6.5, photo: U("1519915028121-7d3463d20b13") },

  // Pains & cakes — farines spéciales
  { categorie: "pains", nom: "Baguette Tradition", description: "Croûte craquante, mie alvéolée", prix: 0, badge: "Incontournable", photo: "assets/img/produits/baguette-tradition.jpg" },
  { categorie: "pains", nom: "Baguette Française", description: "La classique, dorée et croustillante", prix: 0, photo: "assets/img/produits/baguette-francaise.jpg" },
  { categorie: "pains", nom: "Banette", description: "Pointes effilées, croûte fine et croustillante", prix: 0, photo: "assets/img/produits/banette.jpg" },
  { categorie: "pains", nom: "Pain Semoule", description: "Pain à la semoule, croûte dorée", prix: 0, photo: "assets/img/produits/pain-semoule.jpg" },
  { categorie: "pains", nom: "Jackot", description: "Le pain tunisien à la mie moelleuse", prix: 0, photo: "assets/img/produits/jackot.jpg" },
  { categorie: "pains", nom: "Pain au Quinoa", description: "Riche en fibres et plein d'énergie", prix: 0, badge: "Farine spéciale", photo: "assets/img/produits/pain-quinoa.jpg" },
  { categorie: "pains", nom: "Pain aux Céréales", description: "Farine multicéréales et graines", prix: 0, badge: "Farine spéciale", photo: U("1549931319-a545753467c8") },
  { categorie: "pains", nom: "Pain au Chia", description: "Farine spéciale et graines de chia", prix: 0, badge: "Farine spéciale", photo: U("1509440159596-0249088772ff") },
  { categorie: "pains", nom: "Pain de Maïs", description: "Farine de maïs, en forme de brioche", prix: 0, badge: "Farine spéciale", photo: U("1585478259715-876acc5be8eb") },
  { categorie: "pains", nom: "Cake Citron Chia", description: "Cake entier au citron et graines de chia", prix: 19, photo: "" },

  // Snacks & salés
  { categorie: "snacks", nom: "Salade Boulgour Poulet Pesto", description: "Boulgour au pesto, poulet grillé, maïs, tomates, parmesan", prix: 15.5, photo: "assets/img/produits/salade-boulgour-poulet-pesto.jpg" },
  { categorie: "snacks", nom: "Salade Italienne", description: "Pommes de terre, courgettes grillées, thon, œuf, olives, roquette", prix: 15, photo: "assets/img/produits/salade-italienne.jpg" },
  { categorie: "snacks", nom: "Salade Quinoa Saumon", description: "Quinoa, saumon, légumes frais et citron", prix: 22, photo: "assets/img/produits/salade-quinoa-saumon.jpg" },
  { categorie: "snacks", nom: "Sandwich au Saumon", description: "Pain aux graines, saumon, crudités et aneth", prix: 14.5, photo: "assets/img/produits/sandwich-saumon.jpg" },
  { categorie: "snacks", nom: "Sandwich à la Bresaola", description: "Pain aux graines, bresaola, fromage et salade", prix: 0, photo: "assets/img/produits/sandwich-bresaola.jpg" },
  { categorie: "snacks", nom: "Mini Tunisien", description: "Pain semoule, thon, œuf, piment et légumes", prix: 0, photo: "assets/img/produits/mini-tunisien.jpg" },
  { categorie: "snacks", nom: "Mini Omelette", description: "Omelette maison, tomate et courgette", prix: 5, photo: "assets/img/produits/mini-omelette.jpg" },
  { categorie: "snacks", nom: "Mini Jambon", description: "Jambon, fromage et crudités", prix: 5.5, photo: "assets/img/produits/mini-jambon.jpg" },

  // Café & boissons
  { categorie: "boissons", nom: "Café Glacé", description: "Espresso, lait frais et glaçons", prix: 9, badge: "Coup de cœur", photo: "assets/img/produits/cafe-glace.jpg" },
  { categorie: "boissons", nom: "Café Spécial", description: "La recette maison", prix: 5, photo: "assets/img/produits/cafe-special.jpg" },
  { categorie: "boissons", nom: "Café Crème", description: "Espresso allongé au lait", prix: 4.5, photo: "assets/img/produits/cafe-creme.jpg" },
  { categorie: "boissons", nom: "Mojito Spécial", description: "Sans alcool, fruits rouges, citron vert et menthe", prix: 12, photo: "assets/img/produits/mojito-special.jpg" },
  { categorie: "boissons", nom: "Espresso", description: "Serré et intense", prix: 3.5, photo: "" },
  { categorie: "boissons", nom: "Capucin", description: "Espresso et mousse de lait", prix: 4, photo: U("1495774856032-8b90bbb32b32") },
  { categorie: "boissons", nom: "Chocolat Chaud", description: "Onctueux et réconfortant", prix: 7.5, photo: U("1544145945-f90425340c7e") },
  { categorie: "boissons", nom: "Jus d'Orange", description: "Pressé minute", prix: 6.5, photo: U("1556679343-c7306c1976bc") }
];
