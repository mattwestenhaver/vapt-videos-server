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

videosRouter.route('/view/:id')
  .patch(videosController.addView)
;

module.exports = videosRouter