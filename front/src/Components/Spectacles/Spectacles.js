import React, { useState, useEffect } from "react";
import axios from "axios";
import SpectacleDetails from "./SpectacleDetails";
import SpectaclesList from "./SpectaclesList";
import "./Spectacles.css";

export default function Spectacles() {
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

  const showDetails = (i) => {
    setSpectacleDetails(spectaclesDatas[i]);
    setClickDetails(!clickDetails);
  }

  useEffect(() => {
    fetchSpectacles();
  }, []);


  return (
    <div className="spectacles">
        {clickDetails ? 
         <SpectacleDetails spectacleDetails={spectacleDetails} clickDetails={clickDetails}/>
            :
         <SpectaclesList spectaclesDatas={spectaclesDatas} onClick={showDetails}/>
    }
    </div>
  );
}
