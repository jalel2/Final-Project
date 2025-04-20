import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isEmailValid, isPassValid } from '../Utils/validation.js';
import API from '../Utils/api.js'


const Signup = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        lastName: "",
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
        console.log("Valid data", data);
        try {
            const res = await API.post('/auth/signup', data);
            if(res.status !== 200) {
                console.log("Error in signup:", res.data.message);
            }
            if(res.status === 200) {
                console.log("Signup successful:");
                localStorage.setItem('token', res.data.token);
                console.log('signup success:', res.data.user);
                navigate('/dashboard'); // Navigate to a dashboard or another page after successful signup
            }
            

          } catch (err) {
            console.error('signup error:', err.response.data.message);
          }
    }
    return (
    <div className='signup'>
        <form className='signup-form'>
            <input type="text" placeholder='First Name' required className='auth-input' onChange={handleChange} name='name'/>
            <input type="text" placeholder='Last Name' required className='auth-input' onChange={handleChange} name='lastName'/>
            <input type="email" placeholder='Email' required className='auth-input' onChange={handleChange} name='email'/>
            <input type="password" placeholder='Password' required className='auth-input' onChange={handleChange} name='password'/>
            <button type='submit' className='login-btn' onClick={handleSubmit}>Signup</button>
        </form>
    </div>
    )
}

export default Signup
