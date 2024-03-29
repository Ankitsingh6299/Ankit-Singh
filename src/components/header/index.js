import React, {useState} from 'react'
import './header.css';
import Web from "./web/index.js";
import Mobile from "./mobile/index.js";
function Header() {
    const[isOpen, setIsOpen]= useState(false);
    return (
        <div className='header'>
        
            <div className='menu'>
                <div className='web-menu'>
                    <Web />
                </div>
                <div className='mobile-menu'>
                    <div onClick={() => setIsOpen(!isOpen)}>
                    <i class="fi fi-rr-apps menu-icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
        </div>
    )
}

export default Header
