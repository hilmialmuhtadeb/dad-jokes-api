const Joke = require("../models/Joke");

const getJoke = (req, res, next) => {
  Joke.count((error, count) => {
    if (error) {
      res.status(400).json({
        status: res.statusCode,
        message: 'Gagal mendapatkan joke.'
      });
    }

    const randNumber = Math.floor(Math.random() * count);

    Joke.findOne()
      .skip(randNumber)
      .then((joke) => {
        res.status(200).json({
          status: res.statusCode,
          message: 'Berhasil mendapatkan joke.',
          joke,
        });
      })
  })
}

const createJoke = async (req, res, next) => {
  const body = req.body;

  const j = new Joke({
    joke: body.joke,
  });

  j.save()
    .then((result) => {
      res.status(201).json({
        status: res.statusCode,
        message: 'Berhasil menambahkan joke.',
        joke: result,
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: res.statusCode,
        message: 'Gagal menambahkan joke.',
      })
    });
}

module.exports = {
  getJoke,
  createJoke,
}