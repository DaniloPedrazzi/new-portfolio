import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

function experience() {
  return (
    <section id="experience">
      <h5>Saiba minha</h5>
      <h2>Experiência</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Desenvolvimento Frontend</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Avançado</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Avançado</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Sass</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Desenvolvimento Backend</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Unity</h4>
                <small className="text-light">Avançado</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>C#</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Php</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Iniciante</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Iniciante</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default experience;
