import React from 'react'
import './testimonials.css'
import AVTR1 from '..//..//assets/avatar1.jpg'
import AVTR2 from '..//..//assets/avatar2.jpg'
import AVTR3 from '..//..//assets/avatar3.jpg'
import AVTR4 from '..//..//assets/avatar4.jpg'

import { Pagination, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Amir',
    review: 'Absolute game changer! The UI/UX design is sleek, modern, and incredibly intuitive. Our users have been raving about the new interface since the launch. A truly talented professional who delivers excellence every time.'
  },
  {
    avatar: AVTR2,
    name: 'Atiq ur Rehman',
    review: 'The level of expertise is unmatched. Not only did he build a robust backend with .NET Core, but he also optimized our database queries, resulting in lightning-fast load times. Highly recommended for complex projects!'
  },
  {
    avatar: AVTR3,
    name: 'Irfan Malik',
    review: "Phenomenal work ethic and technical skill. He integrated complex APIs seamlessly and ensured the frontend was perfectly responsive across all devices. One of the best developers I've had the pleasure of collaborating with."
  },
  {
    avatar: AVTR4,
    name: 'Shabeer khan',
    review: "He doesn't just write code; he provides solutions. His technical insights helped us refine our product strategy, and the final implementation was flawless. Exceptional quality, fast delivery, and very reliable."
  }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviwe from client</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          }
          )
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
