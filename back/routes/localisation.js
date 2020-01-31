const express = require("express")
const connection = require('../conf')
const router = express.Router()

router.get('/', (req, res) => {
  res.send("je suis sur la route /localisation").status(200)
})

// To have all users
router.route('/all')
  .get(function (req, res, next) {
    connection.query(`SELECT * FROM localisation_circus`, (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des wild circus');
      } else {
        res.json(results);
      }
    });
  });

  router.route('/:id')
  .get(function (req, res, next) {
    connection.query(`SELECT * FROM localisation_circus WHERE id = ${req.params.id}`,  (err, results) => {
      if (err) {
          console.log(err)
        res.status(500).send('Erreur lors de la récupération des wild circus');
      } else {
        res.json(results);
      }
    });
  });

  module.exports = router