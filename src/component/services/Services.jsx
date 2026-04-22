import React from 'react'
import './services.css'
import FontAwesome from 'react-fontawesome';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>

        {/* Frontend Development */}
        <article className='service'>
          <div className='service__head'>
            <h3>Frontend Development</h3>
          </div>

          <ul className='service__list'>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Responsive web apps built with React</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Component-based UI architecture</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Integration with REST APIs and backend services</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Mobile-first, cross-browser compatible interfaces</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Performance optimization and lazy loading</p></li>
          </ul>
        </article>

        {/* Backend Development */}
        <article className='service'>
          <div className='service__head'>
            <h3>Backend Development</h3>
          </div>

          <ul className='service__list'>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>RESTful API design and development with .NET Core</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Database modeling and optimization with SQL Server</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Authentication & authorization (JWT, Bearer tokens)</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Clean architecture and maintainable codebase structure</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Third-party API and service integrations</p></li>
          </ul>
        </article>

        {/* Full Stack Web Applications */}
        <article className='service'>
          <div className='service__head'>
            <h3>Full Stack Web Applications</h3>
          </div>

          <ul className='service__list'>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>End-to-end web application development</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>React frontend + .NET Core backend solutions</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Deployment and hosting setup (Vercel, Azure)</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Code review, refactoring, and technical debt cleanup</p></li>
            <li><FontAwesome className='service__list-icon' name="check" size="1x" /> <p>Ongoing maintenance and feature development</p></li>
          </ul>
        </article>


      </div>
    </section>
  )
}

export default Services