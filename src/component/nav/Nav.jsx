import React, { useState } from 'react'
import FontAwesome from 'react-fontawesome'
import './nav.css'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>

      <a
        href='#'
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <FontAwesome name="home" size="2x" />
      </a>

      <a
        href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <FontAwesome name="user" size="2x" />
      </a>

      <a
        href='#experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <FontAwesome name="book" size="2x" />
      </a>

      <a
        href='#services'
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <FontAwesome name="taxi" size="2x" />
      </a>

      <a
        href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <FontAwesome name="phone" size="2x" />
      </a>

    </nav>
  )
}

export default Nav