'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Albums', 
        [
            { name: "Rubber Soul", artistId: 1, imgUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/rubber+soul+art.jpg", createdAt: new Date(), updatedAt: new Date() },
            { name: "Speak Now", artistId: 2, imgUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/speak+now+art.jpg", createdAt: new Date(), updatedAt: new Date() },
            { name: "To Pimp A Butterfly", imgUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/to+pimp+a+butterfly+art.jpg", artistId: 3, createdAt: new Date(), updatedAt: new Date() },
            { name: "Microcosm", artistId: 4, imgUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/microcosm+art.png", createdAt: new Date(), updatedAt: new Date() },
            { name: "Mesmerize", artistId: 5, imgUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/mesmerize+art.jpg", createdAt: new Date(), updatedAt: new Date() },
            { name: "American Idiot", artistId: 5, imgUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/american+idiot+art.jpg", createdAt: new Date(), updatedAt: new Date() },
            { name: "Willy And The Poor Boys", artistId: 5, imgUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/willy+and+the+poor+boys+art.jpg", createdAt: new Date(), updatedAt: new Date() },
            { name: "Animals", artistId: 5, imgUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/animals+art.jpg", createdAt: new Date(), updatedAt: new Date() },
            { name: "Hybrid Theory", artistId: 5, imgUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/hybrid+theory+art.jpg", createdAt: new Date(), updatedAt: new Date() }
        ])
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Albums', null, { truncate: true, cascade: true, restartIdentity: true });
    }
};