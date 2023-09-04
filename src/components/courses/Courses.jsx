import React from 'react'
import './courses.css'

// DO NOT USE IMAGES IN PRODUCTION (??? WHAT DOES THIS MEAN ???)

const data = [
  {
    id: 1,
    title: 'Structure and Interpretation of Computer Programs',
    name: 'CS 61A',
    skills: 'Python, Scheme, SQL',
    semester: 'Fall 2022',
    projects: [
      ['Scheme Interpreter', "https://inst.eecs.berkeley.edu/~cs61a/fa22/proj/scheme_stubbed/"],
      ['Ants Vs. SomeBees', "https://inst.eecs.berkeley.edu/~cs61a/fa22/proj/ants/"],
      ['CS 61A Autocorrected Typing Software (CATS)', "https://inst.eecs.berkeley.edu/~cs61a/fa22/proj/cats/"],
      ['The Game of Hog', "https://inst.eecs.berkeley.edu/~cs61a/fa22/proj/hog/"]
    ],
    website: 'https://inst.eecs.berkeley.edu/~cs61a/fa22/',
  },
  {
    id: 2,
    title: 'Data Structures',
    name: 'CS 61BL',
    skills: 'Java, Data Structures, Algorithms',
    semester: 'Summer 2023',
    projects: [
      ['2048', "https://cs61bl.org/su23/projects/game2048/"],
      ['Deques', "https://cs61bl.org/su23/projects/deques/"],
      ['Gitlet', "https://cs61bl.org/su23/projects/gitlet/"],
      ['CS61BYoW', "https://cs61bl.org/su23/projects/byow/"]
    ],
    website: 'https://cs61bl.org/su23/',
  },
]


const Courses = () => {
  return (
    <section id='courses'>
      <h5>My Relevant</h5>
      <h2>Courses</h2>

      <div className="container courses__container">
        {
          data.map(({id, title, name, skills, semester, projects, website}) => {

            if (projects.length !== 0) {
              projects = projects.map(projectInfo => {
                  let [name, url] = projectInfo;
                  let project = name;
                  if (url) {
                      project = (
                          <a href={url} key={name} className="highlight">
                              {name}
                          </a>
                      );
                  }
                  return project;
              });
              projects = projects.reduce((acc, curr) => [acc, ', ', curr]);
              projects = (
                  <div className="course-projects">
                      Projects: {projects}
                  </div>
              );
          }

            return (
              <article key={id} className='courses__item'>
                <h3>{title}</h3>
                <h5>{name}</h5>
                <div className="courses_item-body">
                  <h4>Skills: {skills}</h4>
                  {projects}
                  {/* <h4>Projects:&nbsp;
                    <a href="https://inst.eecs.berkeley.edu/~cs61a/fa22/proj/scheme_stubbed/" target='_blank'>Scheme Interpreter</a>,&nbsp; 
                    <a href="https://inst.eecs.berkeley.edu/~cs61a/fa22/proj/ants/" target='_blank'>Ants Vs. SomeBees</a>,&nbsp; 
                    <a href="https://inst.eecs.berkeley.edu/~cs61a/fa22/proj/cats/" target='_blank'>CS 61A Autocorrected Typing Software (CATS)</a>,&nbsp; 
                    <a href="https://inst.eecs.berkeley.edu/~cs61a/fa22/proj/hog/" target='_blank'>The Game of Hog</a>
                  </h4> */}
                </div>
                
                <h5>{semester}</h5>
                <div className="courses__item-cta">
                  <a href={website} className='btn' target='_blank'>Course Website</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Courses