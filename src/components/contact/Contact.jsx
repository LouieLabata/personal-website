import React from 'react'
import './contact.css'
import {SiGmail} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v3vt4ye', 'template_g6p9wjx', form.current, 'BmZQKM_EzKiTMhjS4')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option"> 
            <SiGmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>louiejoshualabata@gmail.com</h5>
            <a href="mailto:louiejoshualabata@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option"> 
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Louie Joshua Labata</h5>
            <a href="https://www.linkedin.com/in/louie-labata/" target='_blank'>Send a Message</a>
          </article>
          {/* <article className="contact__option"> 
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>regator</h5>
            <a href="https://m.me/ernest.achiever" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option"> 
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=+1234567890" target='_blank'>Send a Message</a>
          </article> */}
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact