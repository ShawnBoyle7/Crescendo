const express = require('express');
const asyncHandler = require('express-async-handler');
const { Artist } = require('../../db/models');
const router = express.Router();

router.get('/artists', asyncHandler(async (req, res) => {
  const artists = await Artist.findAll({
        
  });
}));