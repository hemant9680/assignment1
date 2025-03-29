import React from 'react'
import { useNavigate } from 'react-router-dom'
import './landing.css'
const Landing = () => {
    const navigate = useNavigate()
  return (
    <div className='lanContainer'>
        <div className="lanBox">
            <h2 className="lanTitle">Welcome to PopX</h2>
            <p className="lanDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum nihil commodi aut quas quae ipsam impedit similique ut officiis dolores est iure vero reiciendis unde, earum deserunt aspernatur nesciunt. Maxime.</p>
        </div>
        <button onClick={()=> navigate('/register')} className='lanBtn'>Create Account</button>
        <button onClick={()=> navigate('/login')} className='lanBtn'>Already Registered?  Login</button>
    </div>
  )
}

export default Landing