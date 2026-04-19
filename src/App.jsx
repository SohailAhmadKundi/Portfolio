import React from 'react'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Experienc from './component/experience/Experience'
import Services from './component/services/Services'
import Portfolio from './component/portfolio/Portfolio'
import Testimonials from './component/testimonials/Testimonials'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'

const App = () => {
  return (

    <>

      <Header />
      <Nav />
      <About />
      <Experienc />
      <Services />
      {/* <Portfolio/> */}
      <Testimonials />
      <Contact />
      <Footer />
    </>

  )
}

export default App
