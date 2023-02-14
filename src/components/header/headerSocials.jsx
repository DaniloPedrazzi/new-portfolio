import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaDribbbleSquare} from 'react-icons/fa'

function headerSocials() {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/danilo-justino-pedrazzi/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/DaniloPedrazzi" target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
  )
}

export default headerSocials