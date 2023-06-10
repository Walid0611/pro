import React from 'react'
import './Navbar.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Navbar = (auth,logout)=> {
  return (
    <div className='navMenu'>
    <a>{auth.name}</a>
    
     <div>
      <Button  variant="outline-Home"><Link to='Home'>Home</Link> </Button>{' '}
      <Button variant="outline-profile"><Link to='profile'>profile</Link></Button>{' '}
      <Button variant="outline-Voir Cars"><Link to='Voir Cars'>Voir Cars</Link></Button>{' '}
      <Button variant="outline-Ajout Car"><Link to='Ajout Car'>Ajout Car</Link></Button>{' '}
      <Button variant="outline-contact us"><Link to='contact us'>contact us</Link></Button>{' '}
      
      
      
    </div> 




    </div>
  )
}

export default Navbar