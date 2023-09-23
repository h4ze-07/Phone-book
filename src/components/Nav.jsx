import React from 'react'

const Nav = ({setContact, setForm}) => {


  return (
    <nav>
      <ul className='nav'>
        <li onClick={setContact}>Contacts</li>
        <li onClick={setForm}>Form</li>
      </ul>
    </nav>
  )
}

export default Nav