import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const [click, setClick]=useState(false);
    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);
    return(
        <>
            <nav className="navbar">
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        MrG's Portfolio
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                                Portfolio
                            </Link>
                        </li>
                        <li>    
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li>    
                            <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                                Resume
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}

            
