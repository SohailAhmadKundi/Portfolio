import React from 'react'
import './services.css'
import FontAwesome from 'react-fontawesome';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>

        {/* UI/UX Design */}
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>User Interface (UI) Design for web and mobile.</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>User Experience (UX) Research and Analysis.</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Wireframing and High-Fidelity Prototyping.</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Mobile-First and Responsive Design approach.</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Interactive Design and Animations.</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Visual Branding and Design Systems.</p></li>
          </ul>
        </article>

        {/* Web Development */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Custom Web Application Development with React.</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Robust Backend Solutions using .NET Core.</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>RESTful API Development and Integration.</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Database Design and SQL Server Optimization.</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Performance Tuning and Scalability Solutions.</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Secure Authentication and Authorization logic.</p></li>
          </ul>
        </article>

        {/* Content Creation */}
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Technical Documentation for developers.</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Project Case Studies and Analysis.</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>API Design Specifications and Documentation.</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Technical Blogging on Web Technologies.</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Content Strategy for Digital Products.</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Clean README files for projects.</p></li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services