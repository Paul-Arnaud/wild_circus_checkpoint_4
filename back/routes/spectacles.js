const express = require("express")
const connection = require('../conf')
const router = express.Router()

router.get('/', (req, res) => {
  res.send("je suis sur la route /reservation ").status(200)
})

router.route('/all')
  .get(function (req, res, next) {
    connection.query(`SELECT spectacles.*, localisation_circus.*, image.url as img_url, image.alt_text as img_alt FROM spectacles JOIN localisation_circus on localisation_circus.id = spectacles.circus_id JOIN image ON spectacles.spectacle_id = image.spectacle_id AND image.is_cover = 1`, (err, results) => {
      if (err) {
           console.log(err)
        res.status(500).send('Erreur lors de la récupération des spectacles');
      } else {
        res.json(results);
      }
    });
  });
  
router.route('/:id')
.get(function (req, res, next) {
  connection.query(`SELECT *, localisation_circus.* FROM spectacles JOIN localisation_circus on localisation_circus.id = spectacles.circus_id where spectacles.spectacle_id = ?`, req.params.id,(err, results) => {
    if (err) {
        // console.log(err)
      res.status(500).send(`Erreur lors de la récupération du spectacle ${req.params.id}`);
    } else {
      res.json(results);
    }
  });
});
  

  module.exports = router