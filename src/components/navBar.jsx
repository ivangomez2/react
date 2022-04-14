import React from 'react'
import "./navBar.css"

function NavBar() {
  return (
   <nav className='navBar'>
       <ul className='navList'>
           <li>Home</li>
           <li>About me</li>
           <li>exit</li>
       </ul>
   </nav>
  )
}

export default NavBar