import React from 'react'
import { Link } from 'react-router-dom'



export default function Navbar(props) {
  return (
    <>
      <div className="Navbar">
        <nav>
          <div >
          <img src={props.img} />
          <h1>Travello</h1>
          </div>
          <li>Home</li>
          <li><Link to="/Weather" className='Nav-link'>Weather</Link></li>
          <li><Link to="/Charts" className='Nav-link'>Charts</Link></li>
          <li>About us</li>
          
          </nav>
      </div>

    </>
  )
}
