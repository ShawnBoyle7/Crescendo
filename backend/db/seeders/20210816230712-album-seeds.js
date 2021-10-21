'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Albums', 
        [
            { name: "Rubber Soul", artistId: 1, imgUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/rubber+soul+art.jpg", createdAt: new Date(), updatedAt: new Date() },
            { name: "Speak Now", artistId: 2, imgUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/speak+now+art.jpg", createdAt: new Date(), updatedAt: new Date() },
            { name: "Kendrick Lamar", imgUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/to+pimp+a+butterfly+art.jpg", artistId: 3, createdAt: new Date(), updatedAt: new Date() },
            { name: "FLOW", artistId: 4, imgUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/microcosm+art.png", createdAt: new Date(), updatedAt: new Date() },
            { name: "System of a Down", artistId: 5, imgUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/mesmerize+art.jpg", createdAt: new Date(), updatedAt: new Date() },
            { name: "Green Day", artistId: 5, imgUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/american+idiot+art.jpg", createdAt: new Date(), updatedAt: new Date() },
            { name: "Creedence Clearwater Revival", artistId: 5, imgUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/willy+and+the+poor+boys+art.jpg", createdAt: new Date(), updatedAt: new Date() },
            { name: "Pink Floyd", artistId: 5, imgUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/animals+art.jpg", createdAt: new Date(), updatedAt: new Date() },
            { name: "Linkin Park", artistId: 5, imgUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/hybrid+theory+art.jpg", createdAt: new Date(), updatedAt: new Date() }
        ])
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Albums', null, { truncate: true, cascade: true, restartIdentity: true });
    }
};