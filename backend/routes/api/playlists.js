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

router.put('/:id', asyncHandler(async (req, res) => {
  const playlist = await Playlist.findByPk(+req.params.id)
  const updatedPlaylist = await playlist.update(req.body)
  return res.json(updatedPlaylist)
}));

router.delete('/:id', asyncHandler(async (req, res) => {
  const playlist = await Playlist.findByPk(req.params.id);
  playlist.destroy()
  return res.json({ message: "Playlist Destroyed" })
}));

module.exports = router;