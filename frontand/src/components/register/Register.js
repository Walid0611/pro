import React  from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom'
import {postauthUser} from '../../api/authapi'
import { useState } from 'react'

const Register = () => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");



  // partie navigation login 
  const navigate = useNavigate()
const login = async(value)=> {
  try{
  await postauthUser (value)
    navigate ('/login')
  } catch (error) {
    console.log('login', error)
}
} 



  return (



<div >

  <div className="bold-line" />
  <div className="container">
    <div className="window">
      <div className="overlay" />
      <div className="content">
        <div className="welcome">Hello There!</div>
        <div className="subtitle">
          We're almost done. Before using our services you need to create an
          account.
        </div>
        <div className="input-fields">
          <input
            type="text"
            placeholder="name"
            className="input-line full-width"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="input-line full-width"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-line full-width"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="spacing">
          or continue with <span className="highlight">Facebook</span>
        </div>
        <div>
        
          <button onClick={() => login({ name, email, password })}>login</button>
          <button onClick={() => login({ name, email, password })}>Register</button>
        </div>
      </div>
    </div>
  </div>
</div>




  )
}

export default Register

 