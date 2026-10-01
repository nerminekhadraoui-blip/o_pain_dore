/* ============================================================
   LA CARTE — une sélection de nos incontournables
   ------------------------------------------------------------
   Ce n'est pas la carte complète : seulement les produits
   les plus connus, pour donner une idée de la gamme et des prix.

   categorie : "viennoiseries" | "patisseries" | "pains" | "cakes"
               | "snacks" | "boissons"
   prix      : en dinars (3.5 = 3.500 DT) — vide ou 0 = « Prix en boutique »
   photo     : chemin vers assets/img/produits/... (vide = visuel d'attente)
   badge     : petit bandeau optionnel ("Incontournable", "Nouveau"…)
   ============================================================ */

window.OPD_CATEGORIES = [
  { id: "viennoiseries", nom: "Viennoiseries" },
  { id: "patisseries",   nom: "Pâtisseries" },
  { id: "pains",         nom: "Pains" },
  { id: "cakes",         nom: "Cakes" },
  { id: "snacks",        nom: "Snacks & Salés" },
  { id: "boissons",      nom: "Café & Boissons" }
];

window.OPD_PRODUITS = [
  // Viennoiseries
  { categorie: "viennoiseries", nom: "Croissant Chocolat Noisette", description: "Pâte feuilletée, chocolat fondant et éclats de noisette", prix: 2.7, badge: "Incontournable", photo: "assets/img/produits/croissant-chocolat-noisette.jpg" },
  { categorie: "viennoiseries", nom: "New York Pistache", description: "Roulé feuilleté, crème pistache et pistaches concassées", prix: 9.5, badge: "Signature", photo: "assets/img/produits/new-york-pistache.jpg" },
  { categorie: "viennoiseries", nom: "Croissant aux Amandes", description: "Crème d'amande et amandes effilées", prix: 2.5, photo: "assets/img/produits/croissant-amandes.jpg" },
  { categorie: "viennoiseries", nom: "Croissant Chocolat Pistache", description: "Glaçage chocolat et éclats de pistache", prix: 0, photo: "assets/img/produits/viennoiserie-1.jpg" },
  { categorie: "viennoiseries", nom: "Roulé Pistache Chocolat", description: "Feuilletage roulé, crème pistache et pépites de chocolat", prix: 0, photo: "assets/img/produits/viennoiserie-2.jpg" },
  { categorie: "viennoiseries", nom: "Viennoiserie Crème & Pépites", description: "Fourrée crème et pépites de chocolat, éclats de pistache", prix: 0, photo: "assets/img/produits/viennoiserie-3.jpg" },
  { categorie: "viennoiseries", nom: "Pain au Chocolat Pistache", description: "Glaçage chocolat et éclats de pistache", prix: 0, photo: "assets/img/produits/viennoiserie-4.jpg" },
  { categorie: "viennoiseries", nom: "New York Roll Caramel", description: "Feuilletage croustillant, crème vanille, chocolat et caramel fondant", prix: 0, photo: "assets/img/produits/new-york-roll-caramel.jpg" },
  { categorie: "viennoiseries", nom: "Croissant Bicolore", description: "Feuilletage cacao et pur beurre, éclats de noisette", prix: 5.5, photo: "assets/img/produits/croissant-bicolore.jpg" },
  { categorie: "viennoiseries", nom: "Pain aux Raisins", description: "Crème pâtissière et raisins secs", prix: 2.4, photo: "assets/img/produits/pain-aux-raisins.jpg" },

  // Pâtisseries individuelles
  { categorie: "patisseries", nom: "O Pistacho Gourmand", description: "Notre gourmandise signature à la pistache", prix: 10.5, badge: "Signature", photo: "assets/img/produits/o-pistacho-gourmand.jpg" },
  { categorie: "patisseries", nom: "Fraisier", description: "Crème légère et fraises fraîches", prix: 9, photo: "assets/img/produits/fraisier.jpg" },
  { categorie: "patisseries", nom: "Tout Chocolat", description: "Biscuit et crémeux au chocolat", prix: 8, photo: "assets/img/produits/tout-chocolat.jpg" },
  { categorie: "patisseries", nom: "Chocolat Noisette", description: "Couches croustillantes, crème noisette, glaçage chocolat", prix: 9.5, photo: "assets/img/produits/chocolat-noisette.jpg" },
  { categorie: "patisseries", nom: "O Framboise", description: "Biscuit, confit de framboise, macaron", prix: 9.5, photo: "assets/img/produits/o-framboise.jpg" },
  { categorie: "patisseries", nom: "Tarte Pistache", description: "Pâte sablée, crème pistache, pistaches concassées", prix: 8, photo: "assets/img/produits/tarte-pistache.jpg" },
  { categorie: "patisseries", nom: "Éclair aux Fruits", description: "Pâte à choux, crème pâtissière et fruits frais", prix: 6, photo: "assets/img/produits/eclair-aux-fruits.jpg" },
  { categorie: "patisseries", nom: "Cheesecake Pistache Citron", description: "Crème pistache, citron et meringue flambée", prix: 12, badge: "Nouveau", photo: "assets/img/produits/cheesecake-pistache-citron.jpg" },
  { categorie: "patisseries", nom: "Cheesecake Fruits Rouges", description: "Fromage frais, cœur et nappage fruits rouges", prix: 0, photo: "assets/img/produits/cheesecake-fruits-rouges.jpg" },
  { categorie: "patisseries", nom: "Tarte aux Framboises", description: "Biscuit red velvet, crème légère, framboises et feuille d'or", prix: 9.5, badge: "Nouveau", photo: "assets/img/produits/tarte-framboises.jpg" },
  { categorie: "patisseries", nom: "Tarte Chocolat Praliné", description: "Fond chocolat, praliné noisette, mousse chocolat au lait", prix: 8.5, photo: "assets/img/produits/tarte-chocolat-praline.jpg" },
  { categorie: "patisseries", nom: "Rocher", description: "Enrobage chocolat croustillant, crème praliné et caramel", prix: 10.5, photo: "assets/img/produits/rocher.jpg" },

  // Pains & cakes — farines spéciales
  { categorie: "pains", nom: "Baguette Tradition", description: "Croûte craquante, mie alvéolée", prix: 0, badge: "Incontournable", photo: "assets/img/produits/baguette-tradition.jpg" },
  { categorie: "pains", nom: "Baguette Française", description: "La classique, dorée et croustillante", prix: 0, photo: "assets/img/produits/baguette-francaise.jpg" },
  { categorie: "pains", nom: "Banette", description: "Pointes effilées, croûte fine et croustillante", prix: 0, photo: "assets/img/produits/banette.jpg" },
  { categorie: "pains", nom: "Pain Semoule", description: "Pain à la semoule, croûte dorée", prix: 0, photo: "assets/img/produits/pain-semoule.jpg" },
  { categorie: "pains", nom: "Jackot", description: "Le pain tunisien à la mie moelleuse", prix: 0, photo: "assets/img/produits/jackot.jpg" },
  { categorie: "pains", nom: "Pain au Quinoa", description: "Riche en fibres et plein d'énergie", prix: 0, badge: "Farine spéciale", photo: "assets/img/produits/pain-quinoa.jpg" },
  { categorie: "pains", nom: "Pain aux Céréales", description: "Farine multicéréales, graines de tournesol et de lin", prix: 0, badge: "Farine spéciale", photo: "assets/img/produits/pain-cereales.jpg" },
  { categorie: "pains", nom: "Pain Turc", description: "Frais et moelleux, parfait pour tous vos repas", prix: 0, photo: "assets/img/produits/pain-turc.jpg" },
  { categorie: "pains", nom: "Pain au Fromage", description: "Fromage gratiné et romarin", prix: 0, photo: "assets/img/produits/pain-fromage.jpg" },
  { categorie: "pains", nom: "Pain aux Graines", description: "Croûte dorée aux graines de sésame et de nigelle", prix: 0, photo: "assets/img/produits/pain-graines.jpg" },

  // Cakes (entiers)
  { categorie: "cakes", nom: "Cake Chocolat", description: "Moelleux au chocolat, pépites de chocolat", prix: 14.5, photo: "assets/img/produits/cake-chocolat.jpg" },
  { categorie: "cakes", nom: "Cake Marbré", description: "Vanille et chocolat", prix: 16, photo: "assets/img/produits/cake-marbre.jpg" },
  { categorie: "cakes", nom: "Cake Orange", description: "Imbibé à l'orange, rondelles d'orange confite", prix: 14, photo: "assets/img/produits/cake-orange.jpg" },
  { categorie: "cakes", nom: "Cake Orange Chocolat", description: "Cake à l'orange, glaçage chocolat croquant", prix: 15.5, photo: "assets/img/produits/cake-orange-chocolat.jpg" },
  { categorie: "cakes", nom: "Cake Chocolat Glacé", description: "Cœur fondant, glaçage chocolat et éclats de noisette", prix: 0, photo: "assets/img/produits/cake-chocolat-glace.jpg" },
  { categorie: "cakes", nom: "Cake Dattes Noix", description: "Dattes, noix et pépites de chocolat", prix: 0, photo: "assets/img/produits/cake-dattes-noix.jpg" },

  // Snacks & salés
  { categorie: "snacks", nom: "Salade Boulgour Poulet Pesto", description: "Boulgour au pesto, poulet grillé, maïs, tomates, parmesan", prix: 15.5, photo: "assets/img/produits/salade-boulgour-poulet-pesto.jpg" },
  { categorie: "snacks", nom: "Salade Italienne", description: "Pommes de terre, courgettes grillées, thon, œuf, olives, roquette", prix: 15, photo: "assets/img/produits/salade-italienne.jpg" },
  { categorie: "snacks", nom: "Salade Quinoa Saumon", description: "Quinoa, saumon, légumes frais et citron", prix: 22, photo: "assets/img/produits/salade-quinoa-saumon.jpg" },
  { categorie: "snacks", nom: "Sandwich au Saumon", description: "Pain aux graines, saumon, crudités et aneth", prix: 14.5, photo: "assets/img/produits/sandwich-saumon.jpg" },
  { categorie: "snacks", nom: "Sandwich à la Bresaola", description: "Pain aux graines, bresaola, fromage et salade", prix: 0, photo: "assets/img/produits/sandwich-bresaola.jpg" },
  { categorie: "snacks", nom: "Mini Tunisien", description: "Pain semoule, thon, œuf, piment et légumes", prix: 0, photo: "assets/img/produits/mini-tunisien.jpg" },
  { categorie: "snacks", nom: "Mini Omelette", description: "Omelette maison, tomate et courgette", prix: 5, photo: "assets/img/produits/mini-omelette.jpg" },
  { categorie: "snacks", nom: "Mini Jambon", description: "Jambon, fromage et crudités", prix: 5.5, photo: "assets/img/produits/mini-jambon.jpg" },
  { categorie: "snacks", nom: "Salade César", description: "Poulet grillé, croûtons maison, parmesan, sauce César", prix: 15, badge: "Best-seller", photo: "assets/img/produits/salade-cesar.jpg" },
  { categorie: "snacks", nom: "Salade de Riz aux Crevettes", description: "Riz, crevettes grillées, maïs, olives et légumes", prix: 18, photo: "assets/img/produits/salade-riz-crevettes.jpg" },
  { categorie: "snacks", nom: "Sandwich Poulet Champignons", description: "Pain aux graines, poulet et champignons à la crème", prix: 12, photo: "assets/img/produits/sandwich-poulet-champignons.jpg" },
  { categorie: "snacks", nom: "Petit-déjeuner Ô Pain Doré", description: "Omelette, salade, charcuterie, fromage, viennoiserie et boisson", prix: 0, photo: "assets/img/produits/petit-dejeuner.jpg" },
  { categorie: "snacks", nom: "Salade de Betteraves", description: "Betteraves, thon, maïs, carottes, chou rouge et fromage frais", prix: 14.5, photo: "assets/img/produits/salade-betteraves.jpg" },
  { categorie: "snacks", nom: "Focaccias", description: "Deux recettes : poulet fondant ou pesto, tomate et roquette", prix: 7.8, photo: "assets/img/produits/focaccias.jpg" },
  { categorie: "snacks", nom: "Quiche Thon Gouda", description: "Pâte brisée maison, thon et gouda", prix: 0, photo: "assets/img/produits/quiche-thon-gouda.jpg" },
  { categorie: "snacks", nom: "Lasagne Bolognaise", description: "Gratinée au four, servie bien chaude", prix: 0, photo: "assets/img/produits/lasagne-bolognaise.jpg" },

  // Café & boissons
  { categorie: "boissons", nom: "Café Glacé", description: "Espresso, lait frais et glaçons", prix: 9, badge: "Coup de cœur", photo: "assets/img/produits/cafe-glace.jpg" },
  { categorie: "boissons", nom: "Café Spécial", description: "La recette maison", prix: 5, photo: "assets/img/produits/cafe-special.jpg" },
  { categorie: "boissons", nom: "Café Crème", description: "Espresso allongé au lait", prix: 4.5, photo: "assets/img/produits/cafe-creme.jpg" },
  { categorie: "boissons", nom: "Mojito Spécial", description: "Sans alcool, fruits rouges, citron vert et menthe", prix: 12, photo: "assets/img/produits/mojito-special.jpg" },
  { categorie: "boissons", nom: "Cappuccino Crémeux", description: "Chantilly et filet de chocolat", prix: 0, photo: "assets/img/produits/cappuccino-opera.jpg" },
  { categorie: "boissons", nom: "Jus Kiwi Banane", description: "Pressé minute", prix: 10, photo: "assets/img/produits/jus-kiwi-banane.jpg" },
  { categorie: "boissons", nom: "Jus d'Ananas", description: "Ananas frais", prix: 0, photo: "assets/img/produits/jus-ananas.jpg" }
];
