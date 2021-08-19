'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Artists', 
    [
      { name: "Shane Ivers", genreId: 1, artistImgUrl: "https://i.imgur.com/KPY4ORA.png", createdAt: new Date(), updatedAt: new Date() },
      { name: "Benjamin Tissot", genreId: 2, artistImgUrl: "https://i.imgur.com/KPY4ORA.png", createdAt: new Date(), updatedAt: new Date() },
      { name: "Mr. Ryan", genreId: 3, artistImgUrl: "https://i.imgur.com/KPY4ORA.png", createdAt: new Date(), updatedAt: new Date() },
      { name: "Alexander Nakarada", genreId: 4, artistImgUrl: "https://i.imgur.com/KPY4ORA.png", createdAt: new Date(), updatedAt: new Date() },
      { name: "Jay Someday", genreId: 5, artistImgUrl: "https://i.imgur.com/KPY4ORA.png", createdAt: new Date(), updatedAt: new Date() }
    ])  
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Artists', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};