const express = require('express');
const asyncHandler = require('express-async-handler');
const { Artist, Genre } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const artists = await Artist.findAll({
    include: Genre
  });

  return res.json(artists)
}));

module.exports = router;