import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

function services() {
  return (
    <section id="services">
      <h5>O Que Ofereço</h5>
      <h2>Serviços</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Desenvolvimento Web</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Desenvolvimento de Jogos</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default services;