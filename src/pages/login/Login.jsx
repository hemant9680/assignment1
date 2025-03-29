import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import './login.css'

const Login = ({user}) => {
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
        user(true)
        navigate('/')
    }
  return (
    <div className='logContainer'>
        <h2 className="logTitle">Signing to your PopX account</h2>
        <p className="logDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore nostrum animi est qui mollitia nulla, sed, accusantium distinctio amet, dolorum harum maxime voluptates eveniet consectetur doloremque delectus? Quisquam, doloribus corporis.</p>
        <form className='logForm' onSubmit={handleSubmit} >
            <fieldset>
                <legend>Email Address</legend>
                <input type="email"
                className='logInput' 
                placeholder='Enter email address'
                />
            </fieldset>
            <fieldset>
                <legend>Password</legend>
                <input type="password"
                className='logInput' 
                placeholder='Enter password'
                />
            </fieldset>
            <button className='logBtn' type='submit' >Login</button>
        </form>
    </div>
  )
}

export default Login