import React, { useState } from 'react'
import Menu from './menu'

const Nav = ({ menu, toggleMenu, scrollToHome, scrollToAbout, scrollToSkills, scrollToPortfolio, scrollToContact }) => {
  return (
    <>
      <nav className='md:container h-14 top-0 px-8 flex justify-between items-center text-white'>
        <h2 className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text'>JL</h2>
        <ol className='hidden md:flex'>
          <li className='p-6 cursor-pointer' onClick={scrollToHome}>
            <h5>Home</h5>
          </li>
          <li className='p-6 cursor-pointer' onClick={scrollToAbout}>
            <h5>About</h5>
          </li>
          <li className='p-6 cursor-pointer' onClick={scrollToSkills}>
            <h5>Skills</h5>
          </li>
          <li className='p-6 cursor-pointer' onClick={scrollToPortfolio}>
            <h5>Portfolio</h5>
          </li>
          <li className='p-6 cursor-pointer' onClick={scrollToContact}>
            <h5>Contact</h5>
          </li>
          <li className='p-6 cursor-pointer'>
            <h5>Resume</h5>
          </li>
        </ol>
        <div className='md:hidden space-y-2 cursor-pointer' onClick={toggleMenu}>
          <span className='block w-4 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500'></span>
          <span className='block w-8 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500'></span>
          <span className='block w-4 h-1 ml-auto bg-gradient-to-r from-violet-500 to-fuchsia-500'></span>
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
