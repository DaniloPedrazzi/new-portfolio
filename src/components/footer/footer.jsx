import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaDribbbleSquare} from 'react-icons/fa'

function footer() {
  return (
    <footer>
      <a href="#home" className="footer_logo">Danilo</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre Mim</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/danilo-justino-pedrazzi/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/DaniloPedrazzi" target="_blank" rel="noreferrer"><BsGithub /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Danilo Justino. Todos os direitos reservados.</small>
      </div>
    </footer>
  )
}

export default footer