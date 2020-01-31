const express = require("express")
const connection = require('../conf')
const router = express.Router()

router.get('/', (req, res) => {
  res.send("je suis sur la route /images ").status(200)
})

// To have all users
router.route('/all')
  .get(function (req, res, next) {
    connection.query(`SELECT * FROM image`, (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des images');
      } else {
        res.json(results);
      }
    });
  });

  router.route('/spectacle/:id')
  .get(function (req, res, next) {
    connection.query(`SELECT * FROM image Where spectacle_id = ${req.params.id}`, (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des images');
      } else {
        res.json(results);
      }
    });
  });

  module.exports = router