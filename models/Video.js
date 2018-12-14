const 
  mongoose = require('mongoose'),

  videoSchema = new mongoose.Schema({
    url: {type: String, required: true, unique: true},
    title: {type: String, required: true},
    thumbnail: {type: String, required: false},
    viewCount: {type: Number, default: 0},
    uploadDate: {type: String, default: new Date()}
  })
;

const Video = mongoose.model('Video', videoSchema)
module.exports = Video