const 
  Video = require('../models/Video.js')
;

module.exports = {

  index: (req, res) => {
    Video.find({}, (err, videos) => {
      if(err) return res.json({success: false, code: err.code})
      res.json({success: true, videos})
    })
  },

  create: (req, res) => {
    Video.create(req.body, (err, video) => {
      if (err) return res.json({success: false, code: err.code})
      res.json({success: true, message: "Video successfully added.", video})
    })
  }

}