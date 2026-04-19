import React from 'react'
import './footer.css'
import { FaFacebookF, FaLinkedin, FaTiktok } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>EMERGIN MINDS</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        {/* <li><a href="#portfolio">Portfolio</a></li> */}
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className='footer__socials'>
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://www.linkedin.com/in/sohail-ahmad-kundi"><FaLinkedin /></a>
        <a href="https://www.tiktok.com/@sohail.sir14?_r=1&_t=ZS-95fL1RO4Rn8"><FaTiktok /></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Emerging Minds: All Rights are reserved</small>
      </div>
    </footer>
  )
}

export default Footer
