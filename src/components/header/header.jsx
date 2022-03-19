/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './headerSocials'
import me from '../../assets/me.png'

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
                <img src={me} alt="Picture of me" />
            </div>

            <a href="#contact" className='scroll_down'>scroll down</a>
        </div>
    </header>
  )
}

export default header