import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Gallery.css'

export default function Gallery() {
    const [images, setImages] = useState([])

    useEffect(() => {
        fetchImages();
    }, [])

    const fetchImages = () => {
        axios
        .get(`/images/all/`) //
        .then(res => {
          setImages(res.data);
        });
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

    return (
       <> 
       <h1>Gallerie</h1>
        <div className='Gallery'>
           
                {images.map( (image, i) => {
                    return(
                        <>
                        {(i%6==0 || i%7==0) && i != 0 ? <img className="large-img" src={image.url} alt={image.alt} onClick={() => {showImage(i)}}/> : <img src={image.url} alt={image.alt} onClick={() => {showImage(i)}}/>}
                        <div id={`over_img${i}`} className="over_img" onClick={() => {showImage(i)}}></div>
                        <div id={`popup_img${i}`} className="popup_img"> <img className="image_fullscreen" src={image.url} alt={image.alt}/> </div>
                        </>
                    )}
                )}
            </div>
            </>
    )
}
