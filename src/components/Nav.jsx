import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {


  return (
    <nav>
      <div className='nav'>
        <NavLink to='/'>Contacts</NavLink>
        <NavLink to='/form'>Form</NavLink>
      </div>
    </nav>
  )
}

export default Nav