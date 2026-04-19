import React from "react";
import './about.css';
import ME from '../../assets/me-about.jpg';
import FontAwesome from 'react-fontawesome';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">

            <article className="about__card">
              <FontAwesome name="star" size="2x" />
              <h5>Experience</h5>
              <small>4+ year Experience in .Net Core</small>
            </article>

            <article className="about__card">
              <FontAwesome name="user" size="2x" />
              <h5>Clients</h5>
              <small>30+ worldwide</small>
            </article>

            <article className="about__card">
              <FontAwesome name="folder" size="2x" />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>

          </div>

          <p>
            My approach to development is rooted in the belief that code should be written for humans first and machines second.
            I specialize in transforming fragmented data into streamlined enterprise applications,
            ensuring every layer—from the database schema to the API endpoint—is optimized for longevity and clarity.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About;