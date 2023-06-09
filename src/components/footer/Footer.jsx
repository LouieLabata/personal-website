import React from 'react'
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>LOUIE JOSHUA LABATA</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        {/* <li><a href="#about">About</a></li> */}
        <li><a href="#projects">Projects</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#courses">Courses</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        {/* <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><AiOutlineInstagram /></a> */}
        <a href="https://linkedin.com"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Louie Joshua Labata. ALL rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer