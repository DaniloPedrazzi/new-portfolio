/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import CV from '../../assets/cv.pdf'

function CTA() {
  return (
    <div className="cta">
        <a href={CV} target="_blank" className='btn'>Currículo</a>
        <a href="#contact" className='btn btn-primary'>Contato</a>
    </div>
  )
}

export default CTA