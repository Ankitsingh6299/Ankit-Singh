import React from 'react'
import './contact.css';
import Seperator from '../../common/seperator/index';
import SocialContact from '../../common/social-contact';
function Contact() {
    return (
        <div className='contact'>
        <Seperator />
            <label className='section-title'>Contact</label>
            <div className='contact-container'>
                <div className='contact-left'>
                    <p>Want to get in touch? Let's connect,Open for new ideas and projects,contact me on any platform</p>
                    <SocialContact />
                </div>
                <div className='download'>
                    <a download href={'img/AnkitSinghChouhan_10_07.pdf'}>
                        <i class="fi-rr-cloud-download download-icon" />
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
