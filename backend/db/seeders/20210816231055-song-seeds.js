'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Songs', 
        [
            { name: "Drive My Car", artistId: 1, albumId: 1, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Drive+My+Car+(Remastered+2009).mp3", createdAt: new Date(), updatedAt: new Date() },
            { name: "Norwegian Wood (This Bird Has Flown)", artistId: 1, albumId: 1, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Norwegian+Wood+(This+Bird+Has+Flown).mp3",    createdAt: new Date(), updatedAt: new Date() },
            { name: "You Won't See Me", artistId: 1, albumId: 1, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/You+Won't+See+Me+(Remastered+2009).mp3", createdAt: new Date(), updatedAt: new Date() },
            { name: "Nowhere Man", artistId: 1, albumId: 1, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Nowhere+Man+(Remastered+2009).mp3", createdAt: new Date(), updatedAt: new Date() },
            { name: "Think For Yourself", artistId: 1, albumId: 1, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Think+For+Yourself+(Remastered+2009).mp3",    createdAt: new Date(), updatedAt: new Date() },
            { name: "The Word", artistId: 1, albumId: 1, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/The+Word+(Remastered+2009).mp3", createdAt: new Date(), updatedAt: new Date() },
            { name: "Michelle", artistId: 1, albumId: 1, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Michelle+(Remastered+2009).mp3", createdAt: new Date(), updatedAt: new Date() },
            { name: "What Goes On", artistId: 1, albumId: 1, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/What+Goes+On+(Remastered+2009).mp3", createdAt: new Date(), updatedAt: new Date() },
            { name: "Girl", artistId: 1, albumId: 1, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Girl+(Remastered+2009).mp3", createdAt: new Date(), updatedAt: new Date() },
            { name: "I'm Looking Through You", artistId: 1, albumId: 1, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/I'm+Looking+Through+You+(Remastered+2009).mp3",    createdAt: new Date(), updatedAt: new Date() },
            { name: "In My Life", artistId: 1, albumId: 1, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/In+My+Life+(Remastered+2009).mp3", createdAt: new Date(), updatedAt: new Date() },
            { name: "Wait", artistId: 1, albumId: 1, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Wait+(Remastered+2009).mp3", createdAt: new Date(), updatedAt: new Date() },
            { name: "If I Needed Someone", artistId: 1, albumId: 1, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/If+I+Needed+Someone+(Remastered+2009).mp3", createdAt: new Date(), updatedAt: new Date() },
            { name: "Run For Your Life", artistId: 1, albumId: 1, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Run+For+Your+Life+(Remastered+2009).mp3", createdAt: new Date(), updatedAt: new Date() },
        ])    
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Songs', null, { truncate: true, cascade: true, restartIdentity: true });
    }
};