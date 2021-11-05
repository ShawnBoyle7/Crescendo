const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Artist, Album, Playlist, Song, Song_User_Join } = require('../../db/models');

const router = express.Router();

const validateUserEdit = [
    check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
    handleValidationErrors,
];

const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
];

router.get('/', asyncHandler(async (req, res) => {
    const users = await User.findAll({
        include: [
        Artist,
        Album,
        Playlist,
        Song
        ]
    })
    
    return res.json(users)
}));

// Sign up
router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
        const { email, password, username } = req.body;
        const user = await User.signup({ email, username, password });

        await setTokenCookie(res, user);

        return res.json({
        user,
        });
    }),
);

router.put('/:id', validateUserEdit, asyncHandler(async (req, res) => {
    const userId = +req.params.id
    const user = await User.findByPk(userId, {
        include: [
        Artist,
        Album,
        Playlist,
        ]
    });

    const {username} = req.body

    const updatedUser = await user.update({
        username
    })
    res.json(updatedUser)

}));

router.post('/like-song', asyncHandler(async (req, res) => {
    await Song_User_Join.create(req.body)
    const users = await User.findAll({
        include: [ Song ]
    });
    return res.json(users)
    // const likedSong = Song_User_Join.create(req.body)
    // return res.json(likedSong)
}));

router.delete('/:songId/:userId', asyncHandler(async (req, res) => {
    const songId = +req.params.songId;
    const userId = +req.params.userId;
    const songLike = await Song_User_Join.findOne({
        where: {
            songId,
            userId
        }
    });
    await songLike.destroy();

    const users = await User.findAll({
        include: [ Song ]
    });
    return res.json(users)
}))

module.exports = router;