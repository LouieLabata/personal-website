import React from 'react'
import './projects.css'
import IMG1 from '../../assets/personal_website.PNG'
import IMG2 from '../../assets/berkeleybias.PNG'
import IMG3 from '../../assets/frc_robot_2022.PNG'

// DO NOT USE IMAGES IN PRODUCTION (??? WHAT DOES THIS MEAN ???)

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Personal Website',
    subtitle: 'A software developer portfolio that details who I am, my projects, and my relevant courses',
    skills: 'React, Javascript, CSS, HTML, Git',
    github: 'https://github.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Berkeley Bias [IN PROGRESS]',
    subtitle: 'Berkeley Bias is a forum website for Berkeley students. Worked in a team while I focused on the frontend',
    skills: 'React, Javascript, CSS, HTML, Git',
    github: 'https://github.com/IEEEBerkeley/berkeley-bias-sp23',
  },
  {
    id: 3,
    image: IMG3,
    title: 'FIRST Robotics Competition 2022',
    subtitle: 'I was the President and Lead Programmer for the club. Robot was capable of autonmously grabbing, aiming, and shooting',
    skills: 'Java, WPI Robotics Library (WPILib)',
    github: 'https://github.com/Project212Robotics/2022_Robot_Comp_GitHub',
  },
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {
          data.map(({id, image, title, subtitle, skills, github}) => {
            return (
              <article key={id} className='projects__item'>
                <div className="projects__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="projects_item-body">
                  <h4 className='text-light'>{subtitle}</h4>
                  <h5>{skills}</h5>
                </div>
                
                <div className="projects__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Projects