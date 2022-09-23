import React from 'react'
import '../css/Navbar.css'
import Button from './Button'

const Navbar = ({toggle, show}) => {
  return (
    <nav>
      <div className="main-nav">
        <h1>GB IE-Tracker</h1>
        <h1>V.1.0.0</h1>
      </div>
      <div className="sub-nav">
        <h3>Toggle Form</h3>
        <Button text={show ? "close" : "open"} bgcolor={show ? "red" : "green" } color='white' toggle={toggle}/>
      </div>
    </nav>
  )
}

export default Navbar