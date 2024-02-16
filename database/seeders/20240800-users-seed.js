module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        first_name: "Estéfano",
        last_name: "Quiriconi",
        email: "estefanoquiriconi@gmail.com",
        avatar: "1705327241394.jpg",
        password:
          "$2a$10$1t.uCqcLX0xBPWsioSP6b.hwOz.2RNjaS9.fRTD0sNZ7OeNq0gTba",
        role_id: 2, //administrador
      },
      {
        id: 2,
        first_name: "Cosme",
        last_name: "Fulanito",
        email: "editorensimio@gmail.com",
        avatar: "1708041547528.png",
        password:
          "$2a$10$eNxI4KVTMngXptKr6AxwJuVcq.EAqqAI/R9ZrUXSQoBCfN6uVHrBu",
        role_id: 2, //administrador
      },
      {
        id: 3,
        first_name: "Luis",
        last_name: "Pérez",
        email: "luis.perez@gmail.com",
        avatar: "default-avatar-image.png",
        password:
          "$2a$10$1t.uCqcLX0xBPWsioSP6b.hwOz.2RNjaS9.fRTD0sNZ7OeNq0gTba",
        role_id: 2, //cliente
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
