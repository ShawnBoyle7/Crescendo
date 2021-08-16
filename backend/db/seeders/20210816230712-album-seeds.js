'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', 
    [
      { name: "Bangers Only", artistId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: "Trucks", artistId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: "Mr Ryan's Wild Ride", artistId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: "MusicToday80 baby", artistId: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: "Jay's Today", artistId: 5, createdAt: new Date(), updatedAt: new Date() }
    ])  
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};