import React from "react";
import './about.css';
import ME from '../../assets/me-about.jpg';
import FontAwesome from 'react-fontawesome';

const About = () => {
  return (
    <section className="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <p>
        I'm a Full Stack Developer with 3+ years of experience,
        specializing in building modern, responsive frontends with React while also delivering solid backend solutions using .NET Core and ASP.NET Web API.
        I care deeply about writing clean, maintainable code — the kind that's easy to understand six months later.
        Whether it's a pixel-perfect UI or a well-structured REST API, I focus on building things that work reliably and scale gracefully.
      </p>

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