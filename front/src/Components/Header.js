// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        
         <div className="container">
            <div className="logo">
                <h1>Mental Health</h1>
            </div>
            <nav>
                <ul>
                    <li><Link  className="active">Home</Link></li>
                    <li><Link to={"/auth/signup"}>Sign Up</Link></li>
                    <li><Link to={"/auth/login"}>Log in</Link></li>
                </ul>
            </nav>
            </div>
      
    </header>
  );
}

export default Header;
