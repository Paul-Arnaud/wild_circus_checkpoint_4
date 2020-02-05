import React from 'react'
import { NavLink } from 'react-router-dom'
import circus from '../../img/circus.png'
import ticket from '../../img/ticket.png'
import frame from '../../img/frame.png'
import place from '../../img/place.png'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
           <NavLink to ='/'>
                <p class="tooltip">Accueill</p>
                <img src={circus} alt="accueil"/>
           </NavLink>
           <NavLink to ='/spectacles'>
                <p class="tooltip">Spectacles</p>
                <img src={ticket} alt="spectacles"/>
           </NavLink>
           <NavLink to ='/lieu'>
               <p class="tooltip">Plan</p>
                <img src={place} alt="circus"/>
           </NavLink>
           <NavLink to ='/gallerie'>
               <p class="tooltip">Gallerie</p>
                <img src={frame} alt="gallerie"/>
           </NavLink>
        </div>
    )
}
