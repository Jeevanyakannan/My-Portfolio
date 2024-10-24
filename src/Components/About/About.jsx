import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import jevanya1 from '../../assets/jeevanya1.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>Aboutme</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={jevanya1} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a eight months of exprienced (as a Intern) frontend development with over a decade of professional expertices in the field. Throughout my career, I had the privilege of colllaborating with prestigious organizations.</p>
            <p>My passion for frontend development is not only reflected in my extensive experinece but also in the enthusiasm and dedication I bring to each project.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>JavaScripts</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>7+</h1>
          <p>MONTHS OF INTERN EXPERIENCES</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About
