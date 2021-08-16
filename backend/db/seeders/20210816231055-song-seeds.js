// 'use strict';

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert('Songs', 
//     [
//       { name: "", genreId:  artistId: 1, albumId:  createdAt: new Date(), updatedAt: new Date() },
//       { name: "Trucks", genreId : artistId: 2, albumId: createdAt: new Date(), updatedAt: new Date() },
//       { name: "Mr Ryan's Wild Ride", genreId : artistId: 3, albumId: createdAt: new Date(), updatedAt: new Date() },
//       { name: "MusicToday80 baby", genreId : artistId: 4, albumId: createdAt: new Date(), updatedAt: new Date() },
//       { name: "Jay's Today", genreId : artistId: 5, albumId: createdAt: new Date(), updatedAt: new Date() }
//     ])  
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('Songs', null, { truncate: true, cascade: true, restartIdentity: true });
//   }
// };