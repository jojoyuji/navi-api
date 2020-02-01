const mongoose = require('mongoose')
const config = require('./config')

const mongoUrl = config.dbString ?
  config.dbString :
  `mongodb://localhost:27017/navi_dev`

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

const db = mongoose.connection;

db.on('error', function(error) {
  console.log('connection error: ');
  console.log(error);
});

db.once('open', function() {
  console.log('MongoDB connected');
});
