const express = require('express');
const asyncHandler = require('express-async-handler');
const { Playlist, Song, Artist, Album } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const playlists = await Playlist.findAll();

  return res.json(playlists)
}));


router.post('/', asyncHandler(async (req, res) => {
  const { name } = req.body
  // const userId = 

}));

module.exports = router;