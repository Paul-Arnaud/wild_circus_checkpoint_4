import React, { useState, useEffect } from "react"
import axios from 'axios'
import Reservation from "../Reservation/Reservation";

export default function SpectacleDetails(props) {

    const [images, setImages] = useState([])

    useEffect(() => {
        fetchImages();
        transition();
    }, [])


    const transition = () => {
       const details = document.getElementById('details');
       details.classList.add("open")
    //    setTimeout(()  => {details.style.filter = 'opacity(1)'}, 2000)
    }

    const fetchImages = () => {
        axios
        .get(`/images/spectacle/${props.spectacleDetails.spectacle_id}`) //liste les commandes
        .then(res => {
          setImages(res.data);
        });
    }

    const handlePopup = (e) => {
        e.preventDefault();
        const over = document.getElementById('over');
        const popup = document.getElementById('popup_resa');

        // console.log('popup',popup)
        if(popup.style.display === 'none' || popup.style.display === ''){
            popup.style.display = "block";
            over.style.display = 'block';
        }
        else if (popup.style.display === "block"){
            popup.style.display = "none";
            over.style.display = "none";
        }
        over.classList.add("open")
        setTimeout(()  => {over.classList.remove("open")}, 1100)
        popup.classList.add("open")
        setTimeout(()  => {popup.classList.remove("open")}, 1100)
    }

    const showImage = (id) => {
        // e.preventDefault();
        const over = document.getElementById(`over_img${id}`);
        const popup = document.getElementById(`popup_img${id}`);

        // console.log('popup',popup)
        if(popup.style.display === 'none' || popup.style.display === ''){
            popup.style.display = "block";
            over.style.display = 'block';
        }
        else if (popup.style.display === "block"){
            popup.style.display = "none";
            over.style.display = "none";
        }
        over.classList.add("open")
        setTimeout(()  => {over.classList.remove("open")}, 1100)
        popup.classList.add("open")
        setTimeout(()  => {popup.classList.remove("open")}, 1100)
    }
    const date = new Date(props.spectacleDetails.dates)
    return (
        <div className='details' id="details">
            <h1>{props.spectacleDetails.titre}</h1>
            <div className="cover-image">
             <img  src={props.spectacleDetails.img_url} alt={props.spectacleDetails.img_url} />
            </div>
            <div className="spectacle_description">
                <p className="return_link"  onClick={props.onClick}>{`Retour à la liste des spectacles`}</p>
                <b>A propos de <i>{props.spectacleDetails.titre}</i> :</b>
                <p>
                    {props.spectacleDetails.description}
                </p>
                <button className="btn-primary" onClick={handlePopup}>Je réserve ma place</button>
                <b>Lieu : {props.spectacleDetails.nom}</b>
                <b>Prix : {props.spectacleDetails.prix} €</b>
                <b>Addresse : {props.spectacleDetails.rue}, {props.spectacleDetails.ville}, {props.spectacleDetails.pays}</b>
                <b>Date : {date.toLocaleDateString()}</b>
                <b style={props.spectacleDetails.nb_places < 20 ?{color:'red'}: null}>Places restantes : {props.spectacleDetails.nb_places}</b>
            </div>
            <div className="spectacles_images">
                {images.map( (image, i) => {
                    return(
                        <>
                        <img src={image.url} alt={image.alt} onClick={() => {showImage(i)}}/>
                        <div id={`over_img${i}`} className="over_img" onClick={() => {showImage(i)}}></div>
                        <div id={`popup_img${i}`} className="popup_img"> <img className="image_fullscreen" src={image.url} alt={image.alt}/> </div>
                        </>
                    )}
                )}
            </div>
            <p className="return_link"  onClick={props.onClick}>{`Retour à la liste des spectacles`}</p>
            <div id="over" onClick={handlePopup}></div>
            <div id="popup_resa"> 
                    <Reservation datas={props.spectacleDetails} handlePopup={handlePopup}/>
            </div>

        </div>
    )
}
