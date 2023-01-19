import React, { useState } from 'react'
import Menu from './menu'

const Nav = () => {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <>
      <nav className='md:container h-20 top-0 px-8 flex justify-between items-center text-white'>
        <span>Logo</span>
        <ol className='hidden md:flex'>
          <li className='p-6'>Home</li>
          <li className='p-6'>About</li>
          <li className='p-6'>Skills</li>
          <li className='p-6'>Portfolio</li>
          <li className='p-6'>Contact</li>
          <li className='p-6'>Resume</li>
        </ol>
        <div className='md:hidden space-y-2 cursor-pointer' onClick={toggleMenu}>
          <span className='block w-5 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500'></span>
          <span className='block w-8 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500'></span>
          <span className='block w-8 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500'></span>
        </div>
        <Menu menu={menu} toggleMenu={toggleMenu} />
      </nav>
    </>
  )
}

export default Nav
