import React from 'react'
import { FaLinkedin, FaGithub, FaFacebookF } from 'react-icons/fa6'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>

      <a
        href='https://www.linkedin.com/in/sohail-ahmad-kundi'
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>

      <a
        href='https://github.com/sohailahmad123456789'
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href='https://www.facebook.com/sohailahmad123456789'
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>

    </div>
  )
}

export default HeaderSocials