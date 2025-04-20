import React from 'react'
import '../Styles/Auth.css'
import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const Auth = () => {
  return (
    <div className='auth'>
        <div className='auth-container'>
            <div className='auth-container-header'>
                <h1>Welcome to Our App</h1>
                <div className="login-signup-links">
                    <Link className='auth-link auth-link-left' to={"login"}>login</Link>
                    <Link className='auth-link auth-link-right' to={"signup"}>signup</Link>
                </div>
            </div>
                <Outlet/>
        </div>
      
    </div>
  )
}

export default Auth
