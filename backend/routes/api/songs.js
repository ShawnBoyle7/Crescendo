const express = require('express');
const asyncHandler = require('express-async-handler');
const { Song, Genre, Artist, Album, User } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const songs = await Song.findAll({
        include: [
        Artist,
        Album,
        User
        ]
    });

    return res.json(songs)
}));

module.exports = router;