const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();
const port = 4000;
const url = 'mongodb+srv://dadjokes:59LRKzNb1E3oL3y8@cluster0.qqiws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(express.json());
app.use(cors());
app.use('/v1/joke', routes);

mongoose.connect(url)
.then(() => {
  app.listen(process.env.PORT || port, () => {
    console.log(`Your app is running at http://localhost:${port}`);
  });
})
.catch((error) => {
  console.log('Something went wrong.');
});