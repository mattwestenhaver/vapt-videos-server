const
  express = require('express'),
  videosRouter = new express.Router(),
  videosController = require('../controllers/videos.js')
;

videosRouter.route('/')
  .get(videosController.index)
  .post(videosController.create)
;

videosRouter.route('/:id')
  .patch(videosController.update)
;

module.exports = videosRouter