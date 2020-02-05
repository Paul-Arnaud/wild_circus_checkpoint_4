import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "../../img/slider-circus1.jpg";
import slider2 from "../../img/slider-circus2.jpg";
import slider3 from "../../img/slider-circus3.jpg";
import "./Home.css";
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <Carousel
        showThumbs={false}
        autoPlay
        stopOnHover
        infiniteLoop
        showStatus={false}
      >
        <div id="div-slider1"><p>&nbsp;</p></div>
        <div id="div-slider2"><p>&nbsp;</p></div>
        <div id="div-slider3"><p>&nbsp;</p></div>
      </Carousel>
      <div className="content">
        <h1>Bienvenue au Wild Circus!</h1>
        <h2>Qu'est-ce que le Wild Circus?</h2>
        <p>
          Wild Circus est un tout nouveau type de cirque où les numéros de nos artistes sont sublimés par la technologie. <br/>
      
          Chaques année nous parcourons le monde à la recherche de nouveaux artistes de talent et d'incroyables numéros.
          <br/>
          Le premier Wild Circus a été ouvert en 2014 dans la petite ville française de <i>La Loupe</i> et a très vite rencontré un tel succès que nous somme maintenant implanté dans toute la France et depuis dans plusieurs pays d'Europe.
        </p>

        <h2>Nos spectacles</h2>
        <p>
        Nous sommes certains qu'en utilisant des nouvelles technologies tels que des hologrammes dans nos spectacles nous pouvons les rendre encore meilleurs.
          <br/><br/>
        <b>Parmi nos spectacles les plus populaires vous retrouverez notamment :</b> <br/>
        - <i>Les animaux virtuels</i> : spectacle d'hologrammes mettant en scène des animaux exotiques<br/>
        - <i>Jonglage sauvage</i> : Un numéro de jonglage haut en couleur <br/>
          <br />
        </p>
        <NavLink to="/spectacles">
          <button className="btn-primary">voir nos spectacles</button>
        </NavLink>
      </div>
    </div>
  );
}
