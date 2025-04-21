import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isEmailValid, isPassValid } from '../Utils/validation.js';
import API from '../Utils/api.js'


const Signup = () => {
    const navigate = useNavigate();
    const [mydata, setData] = useState({
        name: "",
        lastName: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setData({
            ...mydata,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isEmailValid(mydata.email)) {
            alert("Invalid email format");
            return;
        }
        if (!isPassValid(mydata.password)) {
            alert("Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.");
            return;
        }
        console.log("Valid data", mydata);
        try {
            const res = await API.post('/auth/signup', mydata);
            if(res.status !== 201) {
                console.log("Error in signup:", res.data.message);
            }
            if(res.status === 201) {
                console.log("Signup successful:");
                localStorage.setItem('token', res.data.token);
                console.log('signup success:', res.data.user);
                navigate('/test'); // Navigate to a dashboard or another page after successful signup
            }
            

          } catch (err) {
            console.log('signup error:', err.response?.data?.message || err.message);
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
