import React, { useState, useEffect } from "react";
import axios from "axios";
import SpectacleDetails from "./SpectacleDetails";
import SpectaclesList from "./SpectaclesList";
import "./Spectacles.css";

export default function Spectacles(props) {
  const [clickDetails, setClickDetails] = useState(false);
  const [spectaclesDatas, setSpectaclesDatas] = useState([]);
  const [spectacleDetails, setSpectacleDetails] = useState([]);

  const fetchSpectacles = () => {
    axios
      .get("/spectacles/all") //liste les commandes
      .then(res => {
        setSpectaclesDatas(res.data);
      });
  };

  const showDetails = i => {
    setSpectacleDetails(spectaclesDatas[i]);
    if (clickDetails === true) {
      transition();
    }
    setClickDetails(!clickDetails);
  };

  const transition = () => {
    const details = document.getElementById('spectacles');
    details.classList.add("open")
    setTimeout(()  => {details.classList.remove("open")}, 1100)
    
 }

  useEffect(() => {
    fetchSpectacles();
    transition();
  }, []);

  return (
    <div className="spectacles" id="spectacles">
      {clickDetails ? (
        <SpectacleDetails
          spectacleDetails={spectacleDetails}
          clickDetails={clickDetails}
          onClick={showDetails}
        />
      ) : (
        <SpectaclesList
          spectaclesDatas={spectaclesDatas}
          onClick={showDetails}
        />
      )}
    </div>
  );
}
