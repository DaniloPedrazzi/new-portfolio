import React from 'react'
import './testimonials.css'
import client1 from '../../assets/avatar1.jpg';
import client2 from '../../assets/avatar2.jpg';
import client3 from '../../assets/avatar3.jpg';
import client4 from '../../assets/avatar4.jpg';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: client1,
    name: 'Robert C.',
    review: 'Muito bom, trabalho excelente e entregou na data'
  },
  {
    avatar: client2,
    name: 'Robert C.',
    review: 'Muito bom, trabalho excelente e entregou na data'
  },
  {
    avatar: client3,
    name: 'Robert C.',
    review: 'Muito bom, trabalho excelente e entregou na data'
  },
  {
    avatar: client4,
    name: 'Robert C.',
    review: 'Muito bom, trabalho excelente e entregou na data'
  }
]

function testimonials() {
  return (
    <section id="testimonials">
      <h5>Os Clientes Dizem</h5>
      <h2>Depoimentos</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt="Avatar client 1" />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials