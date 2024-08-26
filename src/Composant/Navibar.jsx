import React from 'react';
import './Css/navbar.css'


function Navibar() {
  return (
    <div  className='navbarPrincipal'>
           
        {/* Ne pas oublier le logo */}
            <a href="/"><img className='logo' src="LogoSD.svg" alt="Logo streamdiscover" /></a>
            <div className='navbarSecond'>
                <a href="">Films</a>
                <a href="">Series</a>
                <a href="">Favoris</a>
            </div>
            <div>
            <input type="search" name="" id="" />
            <input type="submit" value="" />
            </div>
    </div>
  )
}

export default Navibar