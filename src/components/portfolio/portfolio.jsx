/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './portfolio.css'
import AdviceGenerator from '../../assets/AdviceGenerator.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

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
    image: IMG2,
    title: "Advice Generator",
    alt: "Advice Generator demo",
    desc: "Um pequeno projeto que fiz em Javascript para aprender a lidar com APIs.",
    github: "https://github.com/xCUELHO/Advice-generator",
    demo: "https://advicegenerator.vercel.app"
  },
  {
    id:3,
    image: IMG3,
    title: "Advice Generator",
    alt: "Advice Generator demo",
    desc: "Um pequeno projeto que fiz em Javascript para aprender a lidar com APIs.",
    github: "https://github.com/xCUELHO/Advice-generator",
    demo: "https://advicegenerator.vercel.app"
  },
  {
    id:4,
    image: IMG4,
    title: "Advice Generator",
    alt: "Advice Generator demo",
    desc: "Um pequeno projeto que fiz em Javascript para aprender a lidar com APIs.",
    github: "https://github.com/xCUELHO/Advice-generator",
    demo: "https://advicegenerator.vercel.app"
  },
  {
    id:5,
    image: IMG5,
    title: "Advice Generator",
    alt: "Advice Generator demo",
    desc: "Um pequeno projeto que fiz em Javascript para aprender a lidar com APIs.",
    github: "https://github.com/xCUELHO/Advice-generator",
    demo: "https://advicegenerator.vercel.app"
  },
  {
    id:6,
    image: IMG6,
    title: "Advice Generator",
    alt: "Advice Generator demo",
    desc: "Um pequeno projeto que fiz em Javascript para aprender a lidar com APIs.",
    github: "https://github.com/xCUELHO/Advice-generator",
    demo: "https://advicegenerator.vercel.app"
  },
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