import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/headshot.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header> {/* General Container Class (".container") + BIM Naming Convention ("header__container") */}
      <div className="container header__container">
        <h4 className='text-light'>Hi, I'm</h4>
        <h1>Louie Joshua Labata</h1>
        <h4 className='text-light'>I'm an EECS student at  
          <span>
            <a href="https://www.linkedin.com/school/uc-berkeley/" target='_blank'> UC Berkeley. </a>
          </span>
          My interests include Software Engineering, Web Development, Robotics, and Mechatronics
        </h4>
        <h4>Check out my work below!</h4>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me'></img>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header