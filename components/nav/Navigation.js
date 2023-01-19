import React, { useState } from 'react'
import Menu from './menu'

const Nav = ({ menu,toggleMenu, scrollToHome, scrollToAbout, scrollToSkills, scrollToPortfolio, scrollToContact }) => {
  return (
    <>
      <nav className='md:container h-20 top-0 px-8 flex justify-between items-center text-white'>
        <span>Logo</span>
        <ol className='hidden md:flex'>
          <li className='p-6 cursor-pointer' onClick={scrollToHome}>
            Home
          </li>
          <li className='p-6 cursor-pointer' onClick={scrollToAbout}>
            About
          </li>
          <li className='p-6 cursor-pointer' onClick={scrollToSkills}>
            Skills
          </li>
          <li className='p-6 cursor-pointer' onClick={scrollToPortfolio}>
            Portfolio
          </li>
          <li className='p-6 cursor-pointer' onClick={scrollToContact}>
            Contact
          </li>
          <li className='p-6 cursor-pointer'>Resume</li>
        </ol>
        <div className='md:hidden space-y-2 cursor-pointer' onClick={toggleMenu}>
          <span className='block w-5 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500'></span>
          <span className='block w-8 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500'></span>
          <span className='block w-8 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500'></span>
        </div>
        <Menu
          menu={menu}
          toggleMenu={toggleMenu}
          scrollToHome={scrollToHome}
          scrollToAbout={scrollToAbout}
          scrollToSkills={scrollToSkills}
          scrollToPortfolio={scrollToPortfolio}
          scrollToContact={scrollToContact}
        />
      </nav>
    </>
  )
}

export default Nav
