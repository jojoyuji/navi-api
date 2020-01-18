const mongoose = require('mongoose')

const mongoUrl =
`mongodb://localhost:27017/yukimikas`

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
})

const db = mongoose.connection;

db.on('error', function(error) {
  console.log('connection error: ');
  console.log(error);
});

db.once('open', function() {
  console.log('MongoDB connected');
});
