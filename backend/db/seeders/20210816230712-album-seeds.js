module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Albums',
    [
      {
        name: 'Rubber Soul', artistId: 1, imgUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/rubber+soul+art.jpg', releaseDate: 1965, songCount: 14, albumDuration: '35 min 32 sec', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Speak Now', artistId: 2, imgUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/speak+now+art.jpg', releaseDate: 2010, songCount: 14, albumDuration: '1 hr 7min', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'To Pimp A Butterfly', imgUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/to+pimp+a+butterfly+art.jpg', artistId: 3, releaseDate: 2015, songCount: 16, albumDuration: '1 hr 18min', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Microcosm', artistId: 4, imgUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/microcosm+art.png', releaseDate: 2010, songCount: 15, albumDuration: '54 min, 4 sec', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Mesmerize', artistId: 5, imgUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/mesmerize+art.jpg', releaseDate: 2005, songCount: 11, albumDuration: '36 min 11 sec', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'American Idiot', artistId: 6, imgUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/american+idiot+art.jpg', releaseDate: 2004, songCount: 9, albumDuration: '57 min 23 sec', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'A New World Record', artistId: 7, imgUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/a+new+world+record.jpg', releaseDate: 1976, songCount: 9, albumDuration: '36 min 30 sec', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Animals', artistId: 8, imgUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/animals+art.jpg', releaseDate: 1977, songCount: 5, albumDuration: '41 min 41 sec', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Hybrid Theory', artistId: 9, imgUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/album-art/album+art/hybrid+theory+art.jpg', releaseDate: 2000, songCount: 12, albumDuration: '37 min 52 sec', createdAt: new Date(), updatedAt: new Date(),
      },
    ],
  ),
  down: (queryInterface) => queryInterface.bulkDelete('Albums', null, { truncate: true, cascade: true, restartIdentity: true }),
};
