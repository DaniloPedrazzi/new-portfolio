/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import meabout from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function about() {
  return (
    <section id='about'>
      <h5>Saiba Mais</h5>
      <h2>Sobre Mim</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={meabout} alt="Picture of me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experiência</h5>
              <small>3+ Anos</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clientes</h5>
              <small>20+ Clientes pelo Mundo</small> 
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projetos</h5>
              <small>25+ Projetos Completos</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus consequuntur consequatur iste odio, eius, eligendi beatae fugiat vitae adipisci in laborum voluptatum dolor eos quod maxime. Rerum, sunt harum.</p> 

          <a href="#contact" className='btn btn-primary'>Contato</a>
        </div>
      </div>
    </section>
  )
}

export default about