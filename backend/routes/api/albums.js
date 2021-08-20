const express = require('express');
const asyncHandler = require('express-async-handler');
const { Album, Artist, Song } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const albums = await Album.findAll({
    include: [
      Artist,
      Song
    ]
  });

  return res.json(albums)
}));

module.exports = router;