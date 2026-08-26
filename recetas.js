/* =========================================================
   DATOS DE RECETAS
   categorías: desayuno | comida | cena | ensalada | sopa
========================================================= */

const IMG = {
  // ---- desayunos ----
  "VeganCrunch": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZxPEpnY61yO3ofGg_PaBrqstKSCJ-W0x6aUkO9FKSw&s=10",
  "PanelaAdobada": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXmJiMLTnERLKdyKGxqOu_cZM556NeOfRpSBTI1Yh4VA&s=10",
  "RequesónCilantro": "https://www.vvsupremo.com/wp-content/uploads/2015/11/Requeson-Appetizer-IC-900x470.jpg",
  "Omelette": "https://gourmet.iprospect.cl/wp-content/uploads/2016/09/iStock-1138257410-1.jpg",
  "Ejotes": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUodKfk-e-uzb0h8X_Cu8cz7Uy45KG4jrNipYHX0TSOA&s=10",
  "Chilaquiles": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinp2vElJo9q6Cacf3HBiTV7QhiYnIvng_GxRJ7GPAMg&s=10",

  // ---- comidas ----
  "Tacos": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1200&auto=format&fit=crop",
  "TilapiaAdobado": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo4ZO2kDvNyS4yW2qTXGJCV47pS6vQHyNIH27bvPB6RA&s=10",
  "Aguachile": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQkyfdPp_IlgkkQr12ZbPEZLB0hzLrJL_twVAf0c1q3Q&s=10",
  "Pozolillo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUjVV2zFiDcVxaLxpw5RYcuCQa1RELhCi0GUdvi5nEJg&s=10",
  "Caldillo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw4IVuC80EyJYTzVysKZSJk8F9GT6cAcO3tCsRtfOqSQ&s=10",
  "Camarones": "https://mandolina.co/wp-content/uploads/2024/03/fetuccini-alfredo-1200x720.jpg",

  // ---- cenas ----
  "TacosPollo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfveNxg2MJeSWqnLZGJ0dgIZb0ncQDk9r8pXatQKhgQ&s=10",
  "HamburguesaFit": "https://images.cookforyourlife.org/wp-content/uploads/2018/08/Turkey-Burger-e1643749998982.jpg",
  "NopalesRellenos": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSW7JuzOGp1G_x2H3H3HLEwDgVy1goHPlfduj1cub57Q&s=10",
  "JitomateRelleno": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBYfjj-KEABZ5Sg_7Wsl2ErGsgUt2zTDghapWL-_AgCA&s=10",

  // ---- ensaladas ----
  "EnsaladaNevada": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuwmX9LfukPzb2O4-Fjb_kbSH_enVMdzNwbmhL_FJxKcBnn4l-5lugYfI&s=10",
  "EnsaladaVerde": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTnTeme3BKRwe_oRebgOCGIiJnMrDPCu2d4tXOjK98Q&s=10",
  "Mediterránea": "https://www.cocinadelirante.com/688x459/filters:format(webp):quality(75)/sites/default/files/styles/gallerie/public/como-hacer-ensalada-de-espinacas-con-yogur.jpg",
  "MediterráneaLigera": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwc3hMLYyb-05n0kXp7dmkZUPhTS27DH428FuxZ98dcg&s=10",
  "Mediterránea Plus": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuQQQQ9LqErldhMkTxUVatwjIhY1Cm78UFKyEds6yzcqsoOf2RSD7FjtE&s=10",
  "EnsaladaHigo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCFpxu6aQfy7Uo5lbTKR0TQUzeFluCJBwoUDNuD0SHKYI7h1Hxl0PgmCA&s=10",
  "EnsaladaBrócoli": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAFYgU2-W6Q01t3luioMrJ9pT37-CFoxdqLemtV-QhPySYfe5BqTn7-6g&s=10",
  "EnsaladaLentejas": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3Kv44Bs9yiCmeFO71o7muWhK4VWVAer9R4B_2nH8Ef_kLm7n7pGEV5I&s=10",
  "FrijolNegro": "https://laopinion.com/wp-content/uploads/sites/3/2017/02/ensalada-frijoles-shutterstock_301035140.jpg?w=4096",

  // ---- sopas ----
  "SopaTortilla": "https://media.cocinavital.mx/2024/10/sopa-de-tortilla.jpg",
  "SopaEspinacas": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBumcEdCfhAfCFQid4Nq-lc5Dpp5u85yXCLPB_x7CJQA&s=10",
  "SopaPanela": "https://cdn7.kiwilimon.com/recetaimagen/37346/640x640/47066.jpg.webp"
};

const CATEGORY_LABELS = {
  desayuno: "Desayuno",
  comida: "Comida",
  cena: "Cena",
  ensalada: "Ensalada",
  sopa: "Sopa"
};

const recipes = [

  // ---------------- DESAYUNOS ----------------
  {
    id: "vegan-crunch",
    category: "desayuno",
    title: "Vegan Crunch",
    tagline: "Tostada de masa madre con piña asada y aguacate",
    image: IMG.VeganCrunch,
    ingredients: [
      "2 rebanadas de pan de masa madre",
      "1 rebanada de piña de 2 cm de grosor",
      "½ cdita de aceite de oliva extra virgen",
      "1/3 taza de germinado de frijol de soya",
      "½ cdita de mayonesa baja en grasa",
      "2 rebanadas de aguacate",
      "Sal y pimienta al gusto"
    ],
    preparation: [
      "Precalienta la sartén o grill y coloca la piña con sal y pimienta hasta dorar por ambos lados.",
      "Agrega el germinado de frijol y tapa por 3 minutos.",
      "Dora el pan con la mayonesa; coloca la rodaja de piña junto con el germinado y agrega las rebanadas de aguacate."
    ],
    acompanamiento: ["Ensalada mediterránea"]
  },
  {
    id: "panela-adobada",
    category: "desayuno",
    title: "Tapas de Panela Adobada",
    tagline: "Panela dorada con salsa macha",
    image: IMG.PanelaAdobada,
    ingredients: [
      "150 g de panela",
      "½ cdita de salsa macha LuLa",
      "Sal y pimienta"
    ],
    preparation: [
      "Precalienta la sartén, coloca la panela y dora por ambos lados durante 1 minuto.",
      "Agrega la salsa macha y dora por ambos lados; retira de la sartén."
    ],
    acompanamiento: ["Verduras salteadas con aceite de ajo"]
  },
  {
    id: "sabanas-requeson",
    category: "desayuno",
    title: "Sábanas de Requesón al Cilantro",
    tagline: "Requesón guisado sobre salmas con aceite de cilantro",
    image: IMG.RequesónCilantro,
    ingredients: [
      "½ taza de requesón",
      "½ cdita de aceite aromático de cilantro",
      "Sal y pimienta",
      "Salmas"
    ],
    preparation: [
      "Precalienta la sartén, coloca el aceite y el requesón y guisa por 1 minuto.",
      "Tapa y conserva. Coloca sobre las salmas."
    ],
    acompanamiento: ["Salmas", "Ensalada de brócoli"]
  },
  {
    id: "omelette-champinon",
    category: "desayuno",
    title: "Omelette de Champiñón",
    tagline: "Clásico matutino con queso adobera",
    image: IMG.Omelette,
    ingredients: [
      "2 piezas de huevo",
      "1 cdita de aceite de ajo",
      "5 piezas de champiñón rebanadas",
      "1 rebanada de .5 cm de queso adobera",
      "Sal y pimienta"
    ],
    preparation: [
      "Mezcla los huevos con los champiñones, sal y pimienta.",
      "Precalienta la sartén, agrega el aceite de oliva y la mezcla; cocina a fuego medio.",
      "Una vez cocido por ambos lados, coloca el queso al centro, dobla en forma de cilindro y tapa a fuego bajo.",
      "Retira y sirve."
    ],
    acompanamiento: ["Tortilla de maíz", "Salsa mexicana"]
  },
  {
    id: "ejotes-pollo",
    category: "desayuno",
    title: "Ejotes con Pollo",
    tagline: "Clásico mexicano con pechuga desmenuzada",
    image: IMG.Ejotes,
    ingredients: [
      "¾ taza de ejotes cocidos y picados",
      "Cebolla en julianas",
      "120 g de pechuga de pollo cocida y desmenuzada",
      "1 cdita de aceite de romero",
      "Sal y pimienta"
    ],
    preparation: [
      "Precalienta la sartén y agrega el aceite; saltea la cebolla y los ejotes por 1 minuto a fuego alto.",
      "Baja a fuego medio, agrega el pollo desmenuzado, rectifica sabores y sirve."
    ],
    acompanamiento: ["Tortilla de maíz", "Salsa mexicana"]
  },
  {
    id: "chilaquiles-bistec",
    category: "desayuno",
    title: "Chilaquiles con Bistec",
    tagline: "Clásico ranchero con totopos horneados en freidora de aire",
    image: IMG.Chilaquiles,
    ingredients: [
      "120 g de falda de res",
      "2 cditas de aceite de oliva",
      "3 tortillas cortadas en totopos",
      "Salsa de chiles para chilaquiles",
      "Sal y pimienta"
    ],
    preparation: [
      "Precalienta el sartén y cocina el bistec con sal y pimienta a temperatura alta por ambos lados, 2 minutos.",
      "Precalienta la freidora de aire a 180°C por 5 minutos, agrega los totopos y dora por 10 minutos moviendo ocasionalmente.",
      "Guisa la salsa de adobo a fuego medio con la cdita de aceite, agrega los totopos dorados y mezcla.",
      "Tapa 3 minutos a fuego bajo y deja reposar 5 minutos más sin fuego."
    ],
    acompanamiento: ["Queso fresco", "Cebolla finamente picada", "Crema ácida", "Salsa mexicana con lechuga"]
  },

  // ---------------- COMIDAS ----------------
  {
    id: "tacos-arrachera",
    category: "comida",
    title: "Tacos de Arrachera",
    tagline: "Delicioso atardecer con guacamole y hortalizas cristalizadas",
    image: IMG.Tacos,
    ingredients: [
      "150 g de arrachera de res en cubos",
      "3 tortillas de maíz",
      "Sal y pimienta"
    ],
    preparation: [
      "Precalienta la sartén y sella la arrachera con sal y pimienta a temperatura alta.",
      "Cocina por ambos lados 2 minutos a fuego medio.",
      "Calienta las tortillas, agrega una cama de guacamole, coloca la arrachera y las hortalizas cristalizadas; emplata."
    ],
    acompanamiento: ["Hortalizas cristalizadas", "Ensalada verde", "Guacamole"]
  },
  {
    id: "tilapia-empapelada",
    category: "comida",
    title: "Filete de Tilapia Adobado y Empapelado",
    tagline: "Clásico del mar cocido en su propio papel",
    image: IMG.TilapiaAdobado,
    ingredients: [
      "150 g de filete de tilapia",
      ".5 cm de mantequilla",
      "2 cdas de salsa macha LuLa",
      "Sal y pimienta"
    ],
    preparation: [
      "Coloca sobre papel encerado la mantequilla, unas ramas de cilantro y el filete con sal y pimienta.",
      "Tapa y forra con papel encerado y papel aluminio; cocina en comal, sartén o cacerola por 7 minutos.",
      "Abre, agrega 2 cdas de salsa macha para adobar y cocina 1 minuto más."
    ],
    acompanamiento: ["Ensalada nevada", "Salmas"]
  },
  {
    id: "aguachile-atun",
    category: "comida",
    title: "Aguachile Verde de Atún",
    tagline: "El delicioso confiable, fresco y picante",
    image: IMG.Aguachile,
    ingredients: [
      "1 medallón grande de atún",
      "1/3 taza de cebolla en julianas",
      "1 pieza de pepino sin semillas y en julianas",
      "½ taza de salsa verde (5 tomates verdes, 2 chiles serranos, cilantro con tallo, 1 ajo grande, sal y pimienta, 1/3 taza de jugo de limón)",
      "Sal y pimienta"
    ],
    preparation: [
      "Rebana el atún en julianas de 1 cm de grosor; agrega la cebolla, el pepino y la salsa verde.",
      "Refrigera 30 minutos en un recipiente cubierto, rectifica condimentos y consume.",
      "Para la salsa verde: licúa los tomates verdes, chiles serranos, cilantro con tallo, ajo, sal, pimienta y jugo de limón por 1 minuto."
    ],
    acompanamiento: ["Guacamole", "Salmas"]
  },
  {
    id: "pozolillo-verde",
    category: "comida",
    title: "Pozolillo Verde Vegetariano",
    tagline: "Vegan food reconfortante con elote y champiñón",
    image: IMG.Pozolillo,
    ingredients: [
      "1 taza de grano de elote cocido",
      "10 champiñones picados en cuartos",
      "1 taza de salsa verde (5 tomates verdes, 2 chiles serranos, cilantro con tallo, 1 ajo grande, sal y pimienta, 1/3 taza de agua)",
      "Sal, pimienta y mejorana"
    ],
    preparation: [
      "Sofríe la salsa verde en una olla a temperatura media hasta hervir; rectifica sabores.",
      "Agrega los granos de elote y el agua necesaria; reduce a fuego mínimo.",
      "Agrega los champiñones y los condimentos; deja hervir, apaga y reserva.",
      "Para la salsa verde: licúa los tomates verdes, chiles serranos, cilantro con tallo, ajo, sal y jugo de limón por 1 minuto."
    ],
    acompanamiento: ["Lechuga", "Rábanos", "Aguacate en cubos"]
  },
  {
    id: "caldillo-calabaza",
    category: "comida",
    title: "Caldillo de Calabaza con Garbanzo",
    tagline: "Guiso reconfortante de verduras",
    image: IMG.Caldillo,
    ingredients: [
      "½ taza de garbanzo cocido",
      "1 calabaza grande en cubos",
      "1/3 taza de cebolla en julianas",
      "1 taza de salsa verde (5 tomates verdes, 2 chiles serranos, cilantro con tallo, 1 ajo grande, sal y pimienta, ½ taza de agua)",
      "1 cdita de aceite de oliva extra virgen",
      "Sal, pimienta y mejorana"
    ],
    preparation: [
      "Aclara la cebolla en aceite de oliva; agrega la salsa verde y sofríe a temperatura media hasta hervir.",
      "Agrega la calabaza, reduce la temperatura y tapa hasta que esté cocida.",
      "Agrega los garbanzos y los condimentos; deja hervir, apaga y reserva."
    ],
    acompanamiento: ["Aguacate en cubos", "Tortilla de maíz"]
  },
  {
    id: "camarones-fetuccini",
    category: "comida",
    title: "Camarones Adobados en Fetuccini",
    tagline: "Especial de Italia con salsa macha",
    image: IMG.Camarones,
    ingredients: [
      "15 camarones número 15 (marinados 30 min con sal, pimienta y 5 cdas de jugo de limón)",
      "1 taza de pasta fetuccini al dente",
      "2 cm de mantequilla",
      "4 cdas de salsa macha LuLa",
      "2 ajos finamente picados",
      "2 cdas de cebolla finamente picada",
      "Sal y pimienta"
    ],
    preparation: [
      "En una sartén, sofríe la cebolla y el ajo en mantequilla a fuego alto por 1 minuto.",
      "Agrega los camarones y mueve constantemente por 5 minutos; reduce la temperatura, agrega la salsa macha y sofríe 2 minutos más.",
      "En otra sartén, saltea ajo y cebolla en mantequilla, agrega la pasta, mezcla y rectifica sabores.",
      "Agrega cilantro picado y tapa; sirve con queso parmesano."
    ],
    acompanamiento: ["Queso parmesano", "Tapitas con ajo"]
  },

  // ---------------- CENAS ----------------
  {
    id: "tacos-pollo",
    category: "cena",
    title: "Tacos de Pollo",
    tagline: "Pollo marinado en salsa macha",
    image: IMG.TacosPollo,
    ingredients: [
      "120 g de fajitas de pechuga de pollo",
      "½ cdita de manteca de cerdo",
      "Marinado: 2 cdas de salsa macha LuLa, sal, pimienta, paprika, salsa inglesa y jugo de chiles adobados (30 min en refrigeración)",
      "Tortillas de maíz"
    ],
    preparation: [
      "Precalienta a fuego alto una sartén con la manteca; agrega el pollo y mueve constantemente 5 minutos hasta sellar.",
      "Reduce la temperatura hasta cocer; agrega 1 cda extra de salsa macha y sofríe 1 minuto.",
      "Calienta las tortillas en el comal, coloca el pollo y emplata."
    ],
    acompanamiento: ["Hortalizas cristalizadas", "Ensalada mediterránea plus"]
  },
  {
    id: "hamburguesa-fit",
    category: "cena",
    title: "Hamburguesa Fit",
    tagline: "Envuelta en hojas de lechuga",
    image: IMG.HamburguesaFit,
    ingredients: [
      "120 g de carne de hamburguesa",
      "1 cdita de aceite de ajo",
      "2 hojas de lechuga",
      "2 rodajas de jitomate",
      "2 rodajas de cebolla"
    ],
    preparation: [
      "Precalienta a fuego alto una sartén con el aceite; agrega la carne.",
      "Coloca sobre las hojas de lechuga una cama de guacamole, la carne, el jitomate y la cebolla.",
      "Cierra con las hojas de lechuga."
    ],
    acompanamiento: ["Guacamole", "Chiles y cebollas toreados"]
  },
  {
    id: "nopales-panela",
    category: "cena",
    title: "Nopales Rellenos de Panela",
    tagline: "Con tocino dorado y mejorana",
    image: IMG.NopalesRellenos,
    ingredients: [
      "2 nopales pequeños",
      "1 rebanada de 1 cm de panela condimentada con mejorana",
      "3 tiras de tocino dorado y escurrido"
    ],
    preparation: [
      "Precalienta a fuego alto una sartén o comal; cuece los nopales con un ligero toque de sal.",
      "En un nopal coloca la panela y el tocino; cierra con el otro nopal.",
      "Envuelve en papel encerado y reserva."
    ],
    acompanamiento: ["Salmas"]
  },
  {
    id: "jitomate-atun",
    category: "cena",
    title: "Jitomate Relleno de Atún",
    tagline: "Fresco, ligero y listo en minutos",
    image: IMG.JitomateRelleno,
    ingredients: [
      "2 latas de atún en agua, escurridas",
      "1 jitomate bola grande",
      "Cilantro, cebolla y apio finamente picados",
      "1 cda de mayonesa",
      "Sal y pimienta"
    ],
    preparation: [
      "Mezcla el atún con el cilantro, apio y mayonesa; rectifica sabores.",
      "Rellena los jitomates y refrigera 30 minutos antes de consumir."
    ],
    acompanamiento: ["Salmas"]
  },

  // ---------------- ENSALADAS ----------------
  {
    id: "ensalada-nevada",
    category: "ensalada",
    title: "Ensalada Nevada",
    tagline: "Col y zanahoria con ajonjolí negro",
    image: IMG.EnsaladaNevada,
    ingredients: [
      "½ taza de col picada finamente",
      "½ taza de zanahoria rallada",
      "2 cdas de cilantro y apio finamente picado",
      "2 cdas de mayonesa",
      "1 cda de ajonjolí negro",
      "Sal y pimienta"
    ],
    preparation: [
      "Mezcla las verduras con sal y pimienta; agrega la mayonesa y mezcla uniformemente.",
      "Coloca el ajonjolí y refrigera."
    ],
    acompanamiento: []
  },
  {
    id: "ensalada-verde",
    category: "ensalada",
    title: "Ensalada Verde",
    tagline: "Fresca, ligera y clásica",
    image: IMG.EnsaladaVerde,
    ingredients: [
      "1 taza de lechuga en trozos medianos",
      "½ pepino en medias lunas sin semilla",
      "½ jitomate en medias lunas sin semillas",
      "Cebolla en julianas",
      "Jugo de limón",
      "Sal y pimienta"
    ],
    preparation: [
      "Mezcla las verduras con sal, pimienta y jugo de limón de manera uniforme.",
      "Refrigera antes de servir."
    ],
    acompanamiento: []
  },
  {
    id: "mediterranea-ligera",
    category: "ensalada",
    title: "Mediterránea Ligera",
    tagline: "Acelga y espinaca con aderezo de yogurt",
    image: IMG.MediterráneaLigera,
    ingredients: [
      "½ taza de acelga en trozos medianos",
      "½ taza de espinaca en trozos medianos",
      "7 jitomates cherry en mitades",
      "Cebolla en rodajas",
      "3 champiñones rebanados",
      "Aderezo de yogurt",
      "Sal y pimienta"
    ],
    preparation: [
      "Mezcla todas las verduras con el aderezo de manera uniforme y refrigera."
    ],
    acompanamiento: []
  },
  {
    id: "mediterranea-especial",
    category: "ensalada",
    title: "Mediterránea Especial",
    tagline: "Con arándanos, aguacate y vinagreta de hierbabuena",
    image: IMG.Mediterránea,
    ingredients: [
      "½ taza de acelga en trozos medianos",
      "½ taza de espinaca en trozos medianos",
      "Arúgula al gusto",
      "7 jitomates cherry en mitades",
      "Cebolla en rodajas",
      "3 champiñones rebanados",
      "1/3 de aguacate en cubos",
      "1 cda de arándanos deshidratados",
      "1 cdita de ajonjolí blanco",
      "Vinagreta de hierbabuena",
      "Sal y pimienta"
    ],
    preparation: [
      "Mezcla todas las verduras con los demás ingredientes de manera uniforme y refrigera."
    ],
    acompanamiento: []
  },
  {
    id: "mediterranea-plus",
    category: "ensalada",
    title: "Ensalada Mediterránea Plus",
    tagline: "Con aceitunas negras, parmesano y vinagreta de chiles secos con miel",
    image: IMG["Mediterránea Plus"],
    ingredients: [
      "1/3 taza de jitomate cherry en mitades",
      "Arúgula al gusto",
      "3 cdas de germinado de alfalfa",
      "Cebolla en julianas",
      "1/3 taza de aceitunas negras partidas",
      "1/3 de aguacate en cubos",
      "1 cdita de ajonjolí blanco",
      "1 cda de queso parmesano",
      "Jugo de limón",
      "Vinagreta de chiles secos con miel",
      "Sal y pimienta"
    ],
    preparation: [
      "Mezcla todas las verduras con los demás ingredientes de manera uniforme y refrigera."
    ],
    acompanamiento: []
  },
  {
    id: "ensalada-higo",
    category: "ensalada",
    title: "Ensalada de Higo",
    tagline: "Espinaca con higos frescos y aderezo de mostaza",
    image: IMG.EnsaladaHigo,
    ingredients: [
      "1 taza de espinaca en trozos medianos",
      "Cebolla en rodajas",
      "5 champiñones rebanados",
      "5 higos partidos en cuartos",
      "Aderezo de mostaza",
      "Sal y pimienta"
    ],
    preparation: [
      "Mezcla las verduras con los demás ingredientes de manera uniforme y refrigera."
    ],
    acompanamiento: []
  },
  {
    id: "ensalada-brocoli",
    category: "ensalada",
    title: "Ensalada de Brócoli",
    tagline: "Sencilla, rápida y fresca",
    image: IMG.EnsaladaBrócoli,
    ingredients: [
      "1 taza de brócoli picado",
      "½ taza de pico de gallo",
      "Jugo de limón",
      "Sal y pimienta"
    ],
    preparation: [
      "Mezcla el brócoli con los demás ingredientes de manera uniforme y refrigera."
    ],
    acompanamiento: []
  },
  {
    id: "ensalada-lentejas",
    category: "ensalada",
    title: "Ensalada de Lentejas",
    tagline: "Alta en fibra y proteína vegetal",
    image: IMG.EnsaladaLentejas,
    ingredients: [
      "1 taza de lentejas cocidas y escurridas",
      "½ taza de pico de gallo",
      "Jugo de limón",
      "Sal y pimienta"
    ],
    preparation: [
      "Mezcla las lentejas con las verduras y los demás ingredientes de manera uniforme y refrigera."
    ],
    acompanamiento: []
  },
  {
    id: "ensalada-frijol-negro",
    category: "ensalada",
    title: "Ensalada de Frijol Negro",
    tagline: "Sencilla y llena de fibra",
    image: IMG.FrijolNegro,
    ingredients: [
      "1 taza de frijol cocido y escurrido",
      "½ taza de pico de gallo",
      "Jugo de limón",
      "Sal y pimienta"
    ],
    preparation: [
      "Mezcla el frijol con las verduras y los demás ingredientes de manera uniforme y refrigera."
    ],
    acompanamiento: []
  },

  // ---------------- SOPAS ----------------
  {
    id: "sopa-tortilla",
    category: "sopa",
    title: "Sopa de Tortilla",
    tagline: "Con totopos horneados en freidora de aire",
    image: IMG.SopaTortilla,
    ingredients: [
      "3 tortillas en julianas",
      "2 jitomates",
      "¼ de cebolla blanca",
      "1 ajo chico",
      "2 cdas de crema ácida",
      "Caldo de pollo, el necesario",
      "1 cdita de aceite de oliva extra",
      "Sal y pimienta"
    ],
    preparation: [
      "Dora las tortillas en la freidora de aire (180°C por 10 minutos).",
      "Licúa el jitomate, la cebolla, el ajo, agua, sal y pimienta por 1 minuto.",
      "Precalienta una sartén con el aceite, agrega la mezcla y deja hervir.",
      "Agrega las julianas de tortilla y la crema ácida; rectifica sabores y el espesor con caldo de pollo."
    ],
    acompanamiento: []
  },
  {
    id: "sopa-espinacas",
    category: "sopa",
    title: "Sopa de Espinacas",
    tagline: "Ligera y llena de verdor",
    image: IMG.SopaEspinacas,
    ingredients: [
      "2 tazas de espinacas con tallo en trozos medianos",
      "2 jitomates",
      "¼ de cebolla blanca",
      "¼ de cebolla en julianas",
      "1 ajo chico",
      "Caldo de pollo, el necesario",
      "1 cdita de aceite de oliva extra",
      "Sal y pimienta"
    ],
    preparation: [
      "Licúa el jitomate, la cebolla, el ajo, agua, sal y pimienta por 1 minuto.",
      "Precalienta una sartén con aceite y aclara las julianas de cebolla.",
      "Agrega la mezcla y deja hervir; agrega las espinacas y rectifica sabores.",
      "Ajusta el espesor con caldo de pollo."
    ],
    acompanamiento: []
  },
  {
    id: "sopa-panela",
    category: "sopa",
    title: "Sopa de Panela",
    tagline: "Con zanahoria, papa y mejorana",
    image: IMG.SopaPanela,
    ingredients: [
      "120 g de panela en cubos",
      "½ taza de zanahoria y papa en cubos, cocidas y escurridas",
      "2 jitomates",
      "¼ de cebolla blanca",
      "1 ajo chico",
      "Caldo de pollo, el necesario",
      "1 cdita de aceite de oliva extra",
      "Sal y pimienta"
    ],
    preparation: [
      "Licúa el jitomate, la cebolla, el ajo, agua, sal y pimienta por 1 minuto.",
      "Precalienta una sartén con aceite, agrega las verduras y la mezcla licuada; hierve hasta cocer las verduras.",
      "Rectifica sabores y el espesor con caldo de pollo.",
      "Al servir, agrega la panela en cubos con mejorana."
    ],
    acompanamiento: []
  }

];

/* =========================================================
   RENDER DE TARJETAS
========================================================= */

const grid = document.getElementById("recipesGrid");
const noResults = document.getElementById("noResults");

function cardTemplate(recipe) {
  return `
    <div class="recipe-card" data-category="${recipe.category}" data-id="${recipe.id}" tabindex="0" role="button" aria-label="Ver receta: ${recipe.title}">
        <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
        <div class="recipe-category">
            <span>${CATEGORY_LABELS[recipe.category]}</span>
        </div>
        <div class="recipe-content">
            <h3>${recipe.title}</h3>
            <p>${recipe.tagline}</p>
            <span class="recipe-view-more">Ver receta completa <i class="fa-solid fa-arrow-right"></i></span>
        </div>
    </div>
  `;
}

function renderRecipes(list) {
  grid.innerHTML = list.map(cardTemplate).join("");
  noResults.style.display = list.length ? "none" : "block";

  grid.querySelectorAll(".recipe-card").forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.id));
    card.addEventListener("keypress", e => {
      if (e.key === "Enter") openModal(card.dataset.id);
    });
  });
}

renderRecipes(recipes);

/* =========================================================
   FILTROS
========================================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const searchBox = document.getElementById("searchBox");

let currentFilter = "all";

function applyFilters() {
  const term = searchBox.value.trim().toLowerCase();

  const filtered = recipes.filter(r => {
    const matchesCategory = currentFilter === "all" || r.category === currentFilter;
    const matchesSearch =
      r.title.toLowerCase().includes(term) ||
      r.tagline.toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  });

  renderRecipes(filtered);
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.getAttribute("data-filter");
    applyFilters();
  });
});

searchBox.addEventListener("keyup", applyFilters);

/* =========================================================
   MODAL DE RECETA
========================================================= */

const modal = document.getElementById("recipeModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalCategoryBadge = document.getElementById("modalCategoryBadge");
const modalTitle = document.getElementById("modalTitle");
const modalTagline = document.getElementById("modalTagline");
const modalIngredients = document.getElementById("modalIngredients");
const modalPreparation = document.getElementById("modalPreparation");
const modalAcompanamiento = document.getElementById("modalAcompanamiento");
const modalAcompanamientoWrap = document.getElementById("modalAcompanamientoWrap");

function openModal(id) {
  const recipe = recipes.find(r => r.id === id);
  if (!recipe) return;

  modalImage.src = recipe.image;
  modalImage.alt = recipe.title;
  modalCategoryBadge.textContent = CATEGORY_LABELS[recipe.category];
  modalTitle.textContent = recipe.title;
  modalTagline.textContent = recipe.tagline;

  modalIngredients.innerHTML = recipe.ingredients
    .map(ing => `<li>${ing}</li>`)
    .join("");

  modalPreparation.innerHTML = recipe.preparation
    .map(step => `<li>${step}</li>`)
    .join("");

  if (recipe.acompanamiento && recipe.acompanamiento.length) {
    modalAcompanamiento.innerHTML = recipe.acompanamiento
      .map(a => `<li>${a}</li>`)
      .join("");
    modalAcompanamientoWrap.style.display = "block";
  } else {
    modalAcompanamientoWrap.style.display = "none";
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});