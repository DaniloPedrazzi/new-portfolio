/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RiDiscordLine} from 'react-icons/ri'
import emailjs from 'emailjs-com'
import { useRef } from 'react'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0qy4epx', 'template_2zpg7ed', form.current, 'J6j2CxF87H-F7IJef')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
  };
  
  return (
    <section id='contact'>
      <h5>Fale Comigo</h5>
      <h2>Contato</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5 className='text-light'>danilo.justino1@gmail.com</h5>
            <a target="_blank" href="mailto:danilo.justino1@gmail.com">Mande uma mensagem</a>
          </article>
          <article className="contact_option">
            <RiDiscordLine className='contact_option-icon' />
            <h4>Discord</h4>
            <h5 className='text-light'>xCUELHO#4961</h5>
            <a target="_blank" href="https://discord.com/channels/@me">Mande uma mensagem</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5 className='text-light'>+55 (11)963122167</h5>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=+5511963122167">Mande uma mensagem</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Seu Nome" required/>
          <input type="email" name="email" placeholder="Email" required/>
          <textarea name="message" rows="7" placeholder="Mensagem" required></textarea>
          <button type="submit" className='btn btn-primary'>Enviar Mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact