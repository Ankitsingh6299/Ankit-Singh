import React from 'react'
import './about.css';
import SocialContact  from '../../common/social-contact';
function About() {

    return( <div className='about'>
        <div className='about-top'>
            <div className='about-info'>
            Hello there,<br/> I'm a <span className='info-name'>Developer,<span>  </span>problem solver and Data Science Enthusiast</span>
            <span>  </span>and I love playing with the web and data. 
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
