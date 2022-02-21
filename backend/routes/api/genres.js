const express = require('express');
const asyncHandler = require('express-async-handler');
const { Genre } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const genres = await Genre.findAll();

  return res.json(genres);
}));

module.exports = router;
