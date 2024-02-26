module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 1,
          name: "Razr 40 Ultra",
          description:
            "Diseño exclusivo con pantalla flexible de 6.9” y bisagra “gota” sin espacios entre sus lados",
          price: 268000.0,
          stock_quantity: 2,
          brand_id: 2,
          category_id: 1,
          color_id: 10,
        },
        {
          id: 2,
          name: "Buds 250",
          description:
            "True wireless headphones con estuche de carga inalámbrica · Bluetooth® 5.0 technology · Resistente al agua · Botón tactil inteligente",
          price: 80200.0,
          stock_quantity: 10,
          brand_id: 2,
          category_id: 2,
          color_id: 1,
        },
        {
          id: 3,
          name: "iPhone 14",
          description:
            "Frente de Ceramic Shield · Diseño de aluminio con parte posterior de vidrio · Chip A15 Bionic · Reconocimiento facial por medio de la cámara TrueDepth · Resistente al agua y salpicaduras",
          price: 237200.0,
          stock_quantity: 10,
          brand_id: 3,
          category_id: 1,
          color_id: 3,
        },
        {
          id: 4,
          name: "Galaxy Z Flip5",
          description:
            "Flex Window de 3,4 pulgadas que admite una mejor experiencia · Panel Flex Mode · Camara frontal de 14MP y camara trasera de 50MP",
          price: 252600.0,
          stock_quantity: 10,
          brand_id: 1,
          category_id: 1,
          color_id: 9,
        },
        {
          id: 5,
          name: "Razr 40",
          description:
            "Te presentamos el motorola razr 40, un teléfono sofisticado con un diseño plegable y compacto. Rediseñado para brindarte una experiencia superior, presenta un acabado de cuero vegano con colores originales y atractivos. Descubrí nuevas posibilidades con el motorola razr 40.",
          price: 236200.0,
          stock_quantity: 10,
          brand_id: 2,
          category_id: 1,
          color_id: 2,
        },
        {
          id: 6,
          name: "Razr 40 Ultra",
          description:
            "Diseño exclusivo con pantalla flexible de 6.9 pulgadas · Bateria carga rapida de 3800mAh  · Bluetooth 5.3 · Memoria RAM de 12GB",
          price: 268000.0,
          stock_quantity: 10,
          brand_id: 2,
          category_id: 1,
          color_id: 1,
        },
        {
          id: 7,
          name: "iPhone 15",
          description:
            "La Dynamic Island te muestra alertas y actividades en vivo · Nueva cámara de 48MP · Ceramic Shield frontal más resistente · Resistente a salpicadura, agua y polvo",
          price: 255400.0,
          stock_quantity: 10,
          brand_id: 3,
          category_id: 1,
          color_id: 1,
        },
        {
          id: 8,
          name: "Apple Watch Series 9",
          description:
            "Una forma nueva y mágica de interactuar con tu Apple Watch sin siquiera tocarlo · Una pantalla con el doble de brillo · Combinaciones de cajas y correas neutras en carbono · esistente al agua hasta 50 metros",
          price: 138600.0,
          stock_quantity: 10,
          brand_id: 3,
          category_id: 2,
          color_id: 9,
        },
        {
          id: 9,
          name: "Airpods Pro",
          description:
            "El Audio Espacial lleva la experiencia del sonido inmersivo a un nivel mucho más personal · Hasta 6 horas de audio con una sola carga · Resistente al agua y al sudor · Cancelación Activa de Ruido y modo Ambiente",
          price: 118440.0,
          stock_quantity: 10,
          brand_id: 3,
          category_id: 2,
          color_id: 2,
        },
        {
          id: 10,
          name: "Watch Fit Special Edition",
          description:
            "Pantalla AMOLED HD de 1.64 pulgadas · GPS integrado · Gestión profesional de la salud · Compatible con Android e iOS9 · Detección automática de entrenamiento",
          price: 106400.0,
          stock_quantity: 10,
          brand_id: 5,
          category_id: 2,
          color_id: 8,
        },
        {
          id: 11,
          name: "Smart Band 2 GL Watch",
          description:
            "Pantalla TFT dinámica de 1,47 pulgadas · Compatible con más de 30 modos de entrenamiento · Resistencia al agua de 5 ATM · Carga magnética en menos de 120 minutos",
          price: 107100.0,
          stock_quantity: 9,
          brand_id: 4,
          category_id: 2,
          color_id: 1,
        },
        {
          id: 12,
          name: "Galaxy Buds FE Graphite",
          description:
            "Desconéctate del mundo con la potente función ANC · Comodidad ergonómica · Batería de 30 horas de duración · Bluetooth v5.2 ",
          price: 124460.0,
          stock_quantity: 10,
          brand_id: 1,
          category_id: 2,
          color_id: 9,
        },
        {
          id: 13,
          name: "iPad Pro",
          description:
            "Un rendimiento extremo con pantalla avanzada · Neutral Engine de 16 nucleos · Pantalla Liquid Retina CDR de 12.9 pulgadas · Compatible con teclados bluetooth y Apple Pencil",
          price:4152600.0,
          stock_quantity: 18,
          brand_id: 3,
          category_id: 3,
          color_id: 9,
        },
        {
          id: 14,
          name: "MatePad T10s",
          description:
            "Diseño con una Pantalla táctil  10.1 pulgadas Full HD con protección ocular · RAM de GB y ROM 64/128 GB · Bateria de 5.100 mAh · Bluetooth 4.2 ",
          price: 338180.0,
          stock_quantity: 10,
          brand_id: 5,
          category_id: 3,
          color_id: 9,
        },
        {
          id: 15,
          name: "Galaxy Tab S9",
          description:
            "Vistas amplias y luminosas incluso al aire libre con Vision Booster · Equipado con chipset Exynos 1380 de alto rendimiento · Resistencia al agua y al polvo · Conectividad con Physical SIM y un eSIM adicional",
          price: 339020.0,
          stock_quantity: 15,
          brand_id: 1,
          category_id: 3,
          color_id: 9,
        },
        {
          id: 16,
          name: "Galaxy Tab S9 Ultra",
          description:
            "Con Book cover Keyboard y S Pen · Bateria de 11200 mAh · Dynamic AMOLED 2X con Brillo uniforme · Tres tamaños a elección y dos colores inspirados en la naturaleza",
          price: 454700.0,
          stock_quantity: 20,
          brand_id: 1,
          category_id: 3,
          color_id: 2,
        },
        {
          id: 17,
          name: "MacBook Pro",
          description:
            "Los chips mas avanzados y hasta 22 horas de batería · Tecnología de 3 naómetros y nueva arquitectura GPU · Magic Keyboard con Touch ID integrado · Pantalla Liquid Retina XDR de 14.9 pulgadas",
          price: 662400.0,
          stock_quantity: 16,
          brand_id: 3,
          category_id: 4,
          color_id: 7,
        },
        {
          id: 18,
          name: "MateBook D14 2024",
          description:
            "Pantalla HUAWEI FullView con confort ocular · Procesador Intel Core de 12Gen · Resolución 1920 x 1200 · Bluetooth 5.1",
          price: 653720.0,
          stock_quantity: 11,
          brand_id: 5,
          category_id: 4,
          color_id: 1,
        },
        {
          id: 19,
          name: "Galaxy Book3 Pro 360",
          description:
            "Diseño ligero y fino con Bateria duradera · Rendimiento de siguiente nivel con 13th Gen Intel Core · Procesador Intel Core i7-1360P · Sistema Operativo Windows 11 Home",
          price: 768000.0,
          stock_quantity: 16,
          brand_id: 1,
          category_id: 4,
          color_id: 9,
        },
        {
          id: 20,
          name: "Galaxy Book3",
          description:
            "Pantalla TFT dinámica de 1,47 pulgadas · Compatible con más de 30 modos de entrenamiento · Procesador Intel Core i7-1355U · Sistema Operativo Windows 11 Home",
          price: 855260.0,
          stock_quantity: 8,
          brand_id: 1,
          category_id: 4,
          color_id: 7,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
