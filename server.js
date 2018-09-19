const
  dotenv = require('dotenv').load(),
  express = require('express'),
  logger = require('morgan'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  app = express(),
  MONGODB_URI = process.env.MONGODB_URI || 'mongodb://34.192.215.40/virtualapt',
  PORT = process.env.PORT || 3001,
  videosRoutes = require('./routes/videos.js')
;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
  console.log(err || `🤟🏼  Connected to Mongo @ ${MONGODB_URI}`)
});

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({message: 'Welcome to the API root'})
});

app.use('/videos', videosRoutes)

app.listen(PORT, (err) => {
  console.log(err || `🍻 Server running on ${PORT}`)
});