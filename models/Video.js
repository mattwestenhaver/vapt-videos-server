const 
  mongoose = require('mongoose'),

  videoSchema = new mongoose.Schema({
    url: {type: String, required: true, unique: true},
    title: {type: String, required: true},
    client: {type: String, default: "VirtualAPT"},
    thumbnail: {type: String, required: false},
    industry: {type: String, default: null},
    viewCount: {type: Number, default: 0},
    bestOf: {type: Boolean, required: true, default: false},
    uploadDate: {type: String, default: new Date()}
  })
;

const Video = mongoose.model('Video', videoSchema)
module.exports = Video