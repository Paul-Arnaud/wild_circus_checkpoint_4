import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "../../img/slider-circus1.jpg";
import slider2 from "../../img/slider-circus2.jpg";
import slider3 from "../../img/slider-circus3.jpg";
import "./Home.css";

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
        <h2>Qu'est ce que le Wild Circus?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
          aspernatur? Harum unde a laborum provident, dicta ipsam magnam
          recusandae voluptatem. Impedit suscipit ad ipsa, omnis illum magnam ab
          eligendi sapiente! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eum, aspernatur? Harum unde a laborum provident, dicta ipsam
          magnam recusandae voluptatem. Impedit suscipit ad ipsa, omnis illum
          magnam ab eligendi sapiente!
        </p>

        <h2>Nos spectacles</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
          aspernatur? Harum unde a laborum provident, dicta ipsam magnam
          recusandae voluptatem. Impedit suscipit ad ipsa, omnis illum magnam ab
          eligendi sapiente!
          <br />
          <br />
        </p>
        <a href="/spectacles">
          <button className="btn-primary">voir nos spectacles</button>
        </a>
      </div>
    </div>
  );
}
