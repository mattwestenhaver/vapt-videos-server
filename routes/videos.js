const
  express = require('express'),
  videosRouter = new express.Router(),
  videosController = require('../controllers/videos.js')
;

videosRouter.route('/')
  .get(videosController.index)
  .post(videosController.create)
;

module.exports = videosRouter