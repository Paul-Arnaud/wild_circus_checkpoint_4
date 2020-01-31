import React, { useState, useEffect } from "react";
import MapGL, { NavigationControl, Marker, Popup } from "react-map-gl";
import axios from "axios";
import wild from "../../img/wild.png";
import "./Locations.css";

export default function Map() {
  const [circus, setCircus] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [thePopup, setThePopup] = useState([]);

  useEffect(() => {
    axios.get("/localisation/all").then(res => {
      setCircus(res.data);
    });
  }, []);

  const TOKEN =
    "pk.eyJ1IjoicHNhbG1vZGlzIiwiYSI6ImNrNjB1YTNkdTBhejkzZ255MHp0ajE5aXAifQ.2bC4w8tkvRgmTsMxZ--N-Q";

  const [state, setState] = useState({
    viewport: {
      latitude: 48.849093,
      longitude: 2.352857,
      zoom: 15,
      bearing: 0,
      pitch: 0,
      width: "100%",
      height: "100%"
    }
  });

  const navStyle = {
    position: "absolute",
    top: "35%",
    left: 0,
    padding: "0"
  };

  const { viewport } = state;
  return (
    <>
      <select>
        {circus &&
          circus.map(lieu => (
            <option
              value={lieu.id}
              onClick={() => {
                setState({
                  viewport: {
                    latitude: lieu.latitude,
                    longitude: lieu.longitude,
                    zoom: 15,
                    bearing: 0,
                    pitch: 0,
                    width: "100%",
                    height: "100%"
                  }
                });
              }}
            >
              {lieu.ville}
            </option>
          ))}
      </select>
      <div className="map">
        <MapGL
          {...viewport}
          mapStyle="mapbox://styles/psalmodis/ck620ride0lmh1ioe40us21u9"
          mapboxApiAccessToken={TOKEN}
          onViewportChange={viewport => setState({ viewport })   
        }
        >
          {circus &&
            circus.map((lieu, i) => (
              <Marker
                key={lieu.id}
                longitude={lieu.longitude}
                latitude={lieu.latitude}
                offsetLeft={0}
                offsetTop={0}
                captureDoubleClick={false}
              >
                <div
                  className="marker-text"
                  onClick={() => {
                    setShowPopup(true);
                    setThePopup(lieu);
                  }}
                >
                  <img src={wild} style={{ width: "30px" }} />
                  {lieu.nom}
                </div>
              </Marker>
            ))}

          {showPopup === true && (
            <Popup
              latitude={thePopup.longitude}
              longitude={thePopup.latitude}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setShowPopup(false)}
              anchor="top"
            >
              <div>
                {thePopup.nom}
                <br />
                {thePopup.rue}, {thePopup.ville}, {thePopup.pays}
              </div>
            </Popup>
          )}
          <div className="nav" style={navStyle}>
            <NavigationControl />
          </div>
        </MapGL>
      </div>
    </>
  );
}
