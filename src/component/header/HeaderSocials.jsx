import React from 'react'
import { FaLinkedin, FaGithub, FaFacebookF } from 'react-icons/fa6'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/sohail-ahmad-kundi'><FaLinkedin /></a>
      <a href='https://github.com/sohailahmad123456789'><FaGithub /></a>
      <a href='https://www.facebook.com/sohailahmad123456789'><FaFacebookF /></a>
    </div>
  )
}
export default HeaderSocials
