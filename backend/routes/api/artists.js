const express = require('express');
const asyncHandler = require('express-async-handler');
const { Artist, Genre, Album } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const artists = await Artist.findAll({
    include: [
      Genre,
      Album
    ]
  });

  return res.json(artists)
}));

module.exports = router;