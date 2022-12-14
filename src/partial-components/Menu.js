import React from 'react'

import { NavLink } from 'react-router-dom'
import Hamburger from '../ui-components/hamburger/Hamburger'

const Menu = () => {
  return (
    <ul style={{userSelect: 'none'}}>
      <li className='link'>
        <NavLink className='text_link' tabIndex='2' activeclassname='active' to='/'>Home</NavLink>
      </li>
      <li className='link'>
        <NavLink className='text_link' tabIndex='3' activeclassname='active' to='/events'>Events</NavLink>
      </li>
      <li className='link'>
        <a className='text_link' tabIndex='4' href='https://github.com/httpJunkie/react-from-scratch'>
          Source Code
        </a>
      </li>
      <li className='menu'>
        <Hamburger />
      </li>
    </ul>
  )
}

export default Menu