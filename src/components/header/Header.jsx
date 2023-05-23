import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header> {/* General Container Class (".container") + BIM Naming Convention ("header__container") */}
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h2>Louie Labata</h2>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
      </div>
    </header>
  )
}

export default Header