import React from "react";
import "./Hero.css";
import jeev_circle from "../../assets/jeev_circle.png";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className="hero">
      <img src={jeev_circle} alt="" />
      <h1><span>I'm Jeevanya Kannan,</span> Frontend Developer</h1>
      <p>
        I am a frontend devaloper, I've done three full stack development internships and six projects.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
