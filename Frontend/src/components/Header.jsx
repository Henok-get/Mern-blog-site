import { Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <Navbar className='border-b-2'>
    <Link to='/'>
    <span>Henok</span>
    blog
    </Link>
    
    </Navbar>

  )
}

export default Header
