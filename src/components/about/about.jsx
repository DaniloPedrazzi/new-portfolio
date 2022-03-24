/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import meabout from '../../assets/me-about.png'
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
              <small>2 Anos</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clientes</h5>
              <small>15+ Clientes pelo Mundo</small> 
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projetos</h5>
              <small>20+ Projetos Completos</small>
            </article>
          </div>

          <p>Além de muito amor por JavaScript, tenho 17 anos e estou no 3° ano de Desenvolvimento de Sistemas na Etec, gosto mais de frontend por mais que conheça algumas tecnologias backend, role para baixo e conheça mais sobre meu trabalho!</p> 

          <a href="#contact" className='btn btn-primary'>Contato</a>
        </div>
      </div>
    </section>
  )
}

export default about