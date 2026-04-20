import React, { useState, useEffect } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'services', 'contact']
      const scrollPosition = window.scrollY + 200 // Offset for better detection

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const height = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveNav(`#${section}`)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav>
      <a
        href='#home'
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href='#services'
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Nav