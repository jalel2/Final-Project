import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isEmailValid, isPassValid } from '../Utils/validation.js';
import API from '../Utils/api';

const Login = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async () => {
        if (!isEmailValid(data.email)) {
            alert("Invalid email format");
            return;
        }
        if (!isPassValid(data.password)) {
            alert("Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.");
            return;
        }
        // try {
        //     const res = await API.post('/auth/login', data);
        //     localStorage.setItem('token', res.data.token);
        //     console.log('login success:', res.data.user);
        //   } catch (err) {
        //     console.error('login error:', err.response.data.message);
        //   }
        console.log("Valid data", data);
        // navigate('/main');
    };
    return (
    <div  className='login'>
        <form className='login-form'>
            <input type="email" name='email' placeholder='Email' required className='auth-input' onChange={handleChange}/>
            <input type="password" name='password' placeholder='Password' required className='auth-input' onChange={handleChange}/>
            <button type='submit' className='login-btn' onClick={handleSubmit}>Login</button>
        </form>
    </div>
    )
}

export default Login
