const 
  mongoose = require('mongoose'),

  videoSchema = new mongoose.Schema({
    url: {type: String, required: true},
    title: {type: String, required: true},
    thumbnail: {type: String, required: false}
  })
;

const Video = mongoose.model('Video', videoSchema)
module.exports = Video