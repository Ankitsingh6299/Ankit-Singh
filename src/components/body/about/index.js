import React from 'react'
import './about.css';
import Typewriter from 'typewriter-effect';
import SocialContact  from '../../common/social-contact';
function About() {

    return( <div className='about'>
        <div className='about-top'>
            <div className='about-info'>
            Hello there, I'm <strong>Ankit Singh Chouhan</strong> and I'm a <span className='info-name'>
            <Typewriter
            options={{
                autoStart: true,
                loop: true,
              }}
  onInit={(typewriter) => {
    typewriter.typeString('Developer')
      
      .pauseFor(2500)
      .deleteAll()
      .typeString("Problem solver")
      .pauseFor(2500)
      .deleteAll()
      .typeString("Data science enthusiast")
      .pauseFor(2500)
      .deleteAll()
      .start();
  }}
/><span>  </span></span>
            <span>  </span>and I love playing around with web and data. Currently I'm learning and enhancing my React-"ING" skills.And further I want to dive into the ML field.
            </div>
        <div className='about-photo'>
            <img src="/img/code.png" className='picture' alt='Not available' />
        </div>
        
        </div>
        <SocialContact />
        <div className='about-bottom'>
           
        </div>
    </div>
    );
}

export default About
