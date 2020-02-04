const express = require("express")
const connection = require('../conf')
const router = express.Router()
const { check, validationResult } = require('express-validator');

router.get('/', (req, res) => {
  res.send("je suis sur la route /reservation ").status(200)
})

router.route('/all')
  .get(function (req, res, next) {
    connection.query(`SELECT * FROM reservation`, (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des reservations');
      } else {
        res.json(results);
      }
    });
  });


const userValidationMiddlewares = [
    // email must be valid
    check('email').isEmail(),
  ];

router.post('/new', userValidationMiddlewares, (req, res, next) => {
    const dataToSend = req.body;
    const nb_places = req.body.nb_places
    console.log('nb_places',nb_places)
   return connection.query(`INSERT INTO reservation SET ?`, dataToSend, (err, results) => {
    if (err) {
        console.log(err)
      res.status(500).send('Erreur lors de la création d\'une réservation');
    } else {
        return connection.query(`UPDATE spectacles SET nb_places = nb_places - ${nb_places} WHERE spectacle_id = ?`, req.body.spectacle_id, (err2, results2) => {
            if (err2) {
                console.log(err2)
              res.status(500).send('Erreur lors de la diminution du nombre de places');
            } else {
                res.json({message : `la réservation pour ${req.body.prenom} ${req.body.nom} à bien été enregistrée` });
            }
         });
       }
    });
});

  module.exports = router