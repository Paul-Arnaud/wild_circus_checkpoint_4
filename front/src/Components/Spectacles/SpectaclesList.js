import React from 'react'

export default function SpectaclesList(props) {
    return (
        <>
        <h1>Nos Spectacles</h1>
        {props.spectaclesDatas &&
            props.spectaclesDatas.map((datas, i) => {
              return (
                  
                <div className="spectacle-card" key={i}>
                  <div>
                    <b>{datas.titre}</b>
                    <div className="img-div">
                       <img src={datas.img_url} alt={datas.img_alt}/>
                    </div>
                    <div className="info_spectacle">
                    <b>Lieu : {datas.nom}</b>
                    <b>Prix : {datas.prix} €</b>
                    <b>Addresse : {datas.rue}, {datas.ville}, {datas.pays}</b>
                    <b>Date : {datas.dates}</b>
                    </div>
                    <p>
                      {datas.description.substring(0,400)}[…]
                    </p>
                      <button className="btn-primary" onClick={()=> props.onClick(i)}>lire la suite</button>
                  </div>
                 
                </div>
              )
            })}
        </>
    )  
}
