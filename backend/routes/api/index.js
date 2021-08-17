const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const sessionRouter = require('./session');
const usersRouter = require('./users');
const artistsRouter = require('./artists');
const genresRouter = require('./genres');
const albumsRouter = require('./albums');
const playlistsRouter = require('./playlists');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/artists', artistsRouter);
router.use('/genres', genresRouter);
router.use('/albums', albumsRouter);
router.use('/playlists', playlistsRouter);

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});

router.get('/set-token-cookie', asyncHandler(async (req, res) => {
    const user = await User.findOne({
        where: {
            username: 'Demo-lition'
        }
    })
    setTokenCookie(res, user);
    return res.json({ user });
}));

router.get('/restore-user', restoreUser, (req, res) => {
    return res.json(req.user);
});

router.get('/require-auth', requireAuth, (req, res) => {
    return res.json(req.user);
})

module.exports = router;