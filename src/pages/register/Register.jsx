import React from 'react'
import { useNavigate } from 'react-router-dom'
import './register.css'

const Register = ({user}) => {
    const navigate = useNavigate()

    
    const handleSubmit = (e)=>{
        e.preventDefault();
        user(true)
        navigate('/')
    }

  return (
    <div className='regContainer'>
        <h2 className="regTitle">Create your PopX account</h2>
        <form action="" onSubmit={handleSubmit} className="regForm">
        <fieldset>
                <legend>Full Name</legend>
                <input type="text"
                className='regInput' 
                placeholder='Marry Doe'
                required
                />
        </fieldset>
        <fieldset>
                <legend>Phone Number</legend>
                <input type="Number"
                className='regInput' 
                placeholder='+912345178546'
                required
                />
        </fieldset>
        <fieldset>
                <legend>Email address</legend>
                <input type="email"
                className='regInput' 
                placeholder='marrydoe@gmail.com'
                required
                />
        </fieldset>
        <fieldset>
                <legend>Password</legend>
                <input type="password"
                className='regInput' 
                required
                />
        </fieldset>
        <fieldset>
                <legend>Company Name</legend>
                <input type="text"
                className='regInput' 
                required
                />
        </fieldset>
        <div className="radio">

        <label htmlFor="">Are you an Agency?</label><br />
        <input 
            name='choice' 
            type="radio" 
            value='yes'
            id='yes'/>
        <label htmlFor="yes">Yes</label> 
        <input 
            name='choice' 
            type="radio"
            value='no' 
            id='no' />
        <label htmlFor="no">No</label><br />
        </div>

        <button type='submit' className='regBtn'>Create Account</button>
        </form>
    </div>
  )
}

export default Register