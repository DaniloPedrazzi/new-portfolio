/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './portfolio.css'
import AdviceGenerator from '../../assets/AdviceGenerator.png'
import ToDo from '../../assets/ToDo.png'

const data = [
  {
    id:1,
    image: AdviceGenerator,
    title: "Advice Generator",
    alt: "Advice Generator demo",
    desc: "Um pequeno projeto que fiz em Javascript para aprender a lidar com APIs.",
    github: "https://github.com/xCUELHO/Advice-generator",
    demo: "https://advicegenerator.vercel.app"
  },
  {
    id:2,
    image: ToDo,
    title: "To-Do List",
    alt: "To-do list demo",
    desc: "Qual melhor opção para aprender uma linguagem do que um clássico to-do? \n Feito em React <3",
    github: "https://github.com/xCUELHO/to-do_react",
    demo: "https://to-do-react-silk.vercel.app"
  },
  {
    id:3,
    image: "",
    title: "2048",
    alt: "No image",
    desc: "Parte da saga de jogos simples em Javascript",
    github: "https://github.com/xCUELHO/2048",
    demo: ""
  }
]

function portfolio() {
  return (
    <section id="portfolio">
      <h5>Trabalhos Recentes</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, alt, desc, github, demo}) => {
            return(
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                    <img src={image} alt={alt} />
                </div>
                <h3>{title}</h3>
                <small className="text-light">{desc}</small>
                <div className="portfolio_item-cta">
                    <a className='btn' target="_blank" href={github}>Github</a>
                    <a className='btn btn-primary' target="_blank" href={demo}>Teste!</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio