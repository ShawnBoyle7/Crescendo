const express = require('express');
const asyncHandler = require('express-async-handler');
const { Playlist, Song, Artist } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const playlists = await Playlist.findAll();

  return res.json(playlists)
}));

module.exports = router;