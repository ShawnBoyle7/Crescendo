const express = require('express');
const asyncHandler = require('express-async-handler');
const { Playlist } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const playlists = await Playlist.findAll();

  return res.json(playlists)
}));

// 3.
router.post('/', asyncHandler(async (req, res) => {
  const newPlaylist = await Playlist.create(req.body);

  return res.json(newPlaylist);
}));

module.exports = router;