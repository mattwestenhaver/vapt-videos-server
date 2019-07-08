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

  best: (req, res) => {
    Video.find({ bestOf: true }, (err, videos) => {
      if(err) return res.json({success: false, code: err.code})
      res.json({success: true, videos})
    })
  },

  create: (req, res) => {
    Video.create(req.body, (err, video) => {
      if (err) return res.json({success: false, code: err.code})
      res.json({success: true, message: "Video successfully added.", video})
    })
  },

  update: (req, res) => {
    Video.findById(req.params.id, (err, video) => {
      if(err) res.json({ success: false, code: err.code })
      Object.assign(video, req.body)
      video.save((err2, updatedVideo) => {
        if(err2) res.json({ success: false, code: err2.code })
        res.json({ success: true, message: "Video updated", updatedVideo })
      })
    })
  },

  addView: (req, res) => {
    Video.findById(req.params.id, (err, video) => {
      if(err) res.json({ success: false, code: err.code })
      video.viewCount = video.viewCount + 1
      video.save((err2, updatedVideo) => {
        if(err2) res.json({ success: false, code: err2.code })
        res.json({ success: true, message: "View count updated", updatedVideo })
      })
    })
  }

  // search: (req, res) => {
  //   Video.find({title: /req.body.title/i }, (err, videos) => {
  //     if(err) return res.json({success: false, code: err.code})
  //     res.json({success: true, videos})
  //   })
  // }

}