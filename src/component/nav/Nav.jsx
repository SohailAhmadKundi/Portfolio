import React from 'react'
import FontAwesome from 'react-fontawesome';
import './nav.css';
import { useState } from 'react';


const Nav = () => {
  const [ActiveNave, setActiveNave] = useState('#')
  return (
    <nav>
      <a href='/' onClick={() => setActiveNave('home')} className={ActiveNave === 'home' ? 'active' : ''}><FontAwesome name="home" size="2x" /></a>
      <a href='#about' onClick={() => setActiveNave('#about')} className={ActiveNave === 'about' ? 'active' : ''}><FontAwesome name="user" size="2x" /></a>
      <a href='#experience' onClick={() => setActiveNave('#experience')} className={ActiveNave === 'experience' ? 'active' : ''}><FontAwesome name="book" size="2x" /></a>
      <a href='#services' onClick={() => setActiveNave('#services')} className={ActiveNave === 'services' ? 'active' : ''}><FontAwesome name="taxi" size="2x" /></a>
      <a href='#contact' onClick={() => setActiveNave('#contact')} className={ActiveNave === 'contact' ? 'active' : ''}><FontAwesome name="phone" size="2x" /></a>
    </nav>
  )
}
export default Nav
