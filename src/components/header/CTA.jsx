import React from 'react'
import resume from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={resume} target='_blank' className='btn'>View Resume</a>  {/* This is using a links instead of React Routes (?) */}
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA