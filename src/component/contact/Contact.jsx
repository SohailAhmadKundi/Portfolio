import React, { useRef } from 'react'
import './contact.css'
import FontAwesome from 'react-fontawesome';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_8bl99tk',
      'template_4qd9bw7',
      form.current,
      'OS59y3BO3drYU_LwW'
    )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact</h2>

      <div className='container contact__container'>

        <div className='contact__options'>

          <article className='contact__option'>
            <FontAwesome className='contact__option-icon' name="envelope" size="2x" />
            <h4>Email</h4>
            <h5>sohailkundi036@gmail.com</h5>
            <a
              href="mailto:sohailkundi036@gmail.com"
              target='_blank'
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className='contact__option'>
            <FontAwesome className='contact__option-icon' name="facebook" size="2x" />
            <h4>Messenger</h4>
            <h5>sohailkundi036@gmail.com</h5>
            <a
              href="https://m.me/profile.php?id=100010094476961"
              target='_blank'
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className='contact__option'>
            <FontAwesome className='contact__option-icon' name="whatsapp" size="2x" />
            <h4>WhatsApp</h4>
            <h5>+923469885714</h5>
            <a
              href="https://api.whatsapp.com/send?phone=923469885714"
              target='_blank'
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter Your Full Name' required />
          <input type="email" name='email' placeholder='Enter Email' required />
          <textarea name="message" rows="7" placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact