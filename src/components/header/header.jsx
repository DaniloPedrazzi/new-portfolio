import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './headerSocials'
import profile from '../../assets/template perfil.png'

function header() {
  return (
    <header>
        <div className="container header_container">
            <h5>Olá, sou</h5>
            <h1>Danilo</h1>
            <h5 className="text-light">FrontEnd Developer</h5>
            <CTA />
            <HeaderSocials />

            <div className="me">
                <img src={profile} alt="Profile picture" />
            </div>

            <a href="#contact" className='scroll_down'>scroll down</a>
        </div>
    </header>
  )
}

export default header