import React from 'react'

export default function SpectaclesList(props) {
    return (
        <>
        <h1>Nos Spectacles</h1>
        {props.spectaclesDatas &&
            props.spectaclesDatas.map((datas, i) => {
              const date = new Date(datas.dates)
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
                    <b>Date : {date.toLocaleDateString()}</b>
                    <b style={datas.nb_places < 20 ?{color:'red'}: null}>Places restantes : {datas.nb_places}</b>
                    </div>
                    <p className="info_spectacle_description">
                      {datas.description.substring(0,200)}[…]
                    </p>
                  </div>
                  <button className="btn-primary" onClick={()=> props.onClick(i)}>lire la suite</button>
                </div>
              )
            })}
        </>
    )  
}
