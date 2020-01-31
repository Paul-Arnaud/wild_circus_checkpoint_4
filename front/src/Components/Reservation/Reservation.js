import React, { useState } from "react";
import axios from "axios";
import "./Reservation.css";

export default function Reservation(props) {
  const [newResa, setNewResa] = useState({spectacle_id: props.datas.id, nb_places: 1})


  const validateNewResa = (e) => {
    setNewResa({ ...newResa, [e.target.name]: e.target.value })
  }

  const makeResa = (e) => {
    e.preventDefault();
    axios // envoi ds la bdd
      .post(`/reservations/new`, newResa)
      .then(res => {
        if (res.err) {
          alert(res.err);
        } else {
          alert(`La réservation pour ${newResa.prenom} ${newResa.nom} a été enregistrée avec succès!`);
          props.handlePopup(e);
        }
      });
  };

  return (
    <div className="reservation">
      <h1>Réservation</h1>
      <form className="form_resa">
        <div>
          <label htmlFor="spectacle_id">Spectacle :</label>
          <select name="spectale_id" onChange={validateNewResa}>
            <option value={props.datas.id}>
              {props.datas.titre} {props.datas.dates}
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="nom">Nom :</label>
          <input name="nom" onChange={validateNewResa}/>
        </div>

        <div>
          <label htmlFor="prenom">Prénom :</label>
          <input name="prenom" onChange={validateNewResa}/>
        </div>

        <div>
          <label htmlFor="email">E-mail :</label>
          <input name="email" onChange={validateNewResa}/>
        </div>

        <div>
          <label htmlFor="telephone">Téléphone :</label>
          <input name="telephone" onChange={validateNewResa}/>
        </div>

        <div>
          <label htmlFor="nb_places">Places :</label>
          <select name="nb_places" onChange={validateNewResa}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="btn-resa">
          <button className="btn-secondary" onClick={props.handlePopup}>
            Annuler
          </button>
          <button className="btn-primary" onClick={makeResa}>Réserver</button>
        </div>
      </form>
    </div>
  );
}
