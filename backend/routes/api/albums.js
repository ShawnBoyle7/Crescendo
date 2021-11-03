const express = require('express');
const asyncHandler = require('express-async-handler');
const { Album, Artist, Song, User } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const albums = await Album.findAll({
        include: [
            Artist,
            User,
            {
                model: Song, include: [Artist, Album]
            }
        ]
    });

    return res.json(albums)
}));

module.exports = router;