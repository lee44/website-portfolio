import React, { useState } from 'react'
import Menu from './menu'

const Nav = ({ menu, toggleMenu, scrollToHome, scrollToAbout, scrollToSkills, scrollToPortfolio, scrollToContact }) => {
  return (
    <>
      <nav className='md:container h-20 top-0 px-8 flex justify-between items-center text-white'>
        <h1 className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text'>JL</h1>
        <ol className='hidden md:flex'>
          <li className='p-6 cursor-pointer' onClick={scrollToHome}>
            <h4>Home</h4>
          </li>
          <li className='p-6 cursor-pointer' onClick={scrollToAbout}>
            <h4>About</h4>
          </li>
          <li className='p-6 cursor-pointer' onClick={scrollToSkills}>
            <h4>Skills</h4>
          </li>
          <li className='p-6 cursor-pointer' onClick={scrollToPortfolio}>
            <h4>Portfolio</h4>
          </li>
          <li className='p-6 cursor-pointer' onClick={scrollToContact}>
            <h4>Contact</h4>
          </li>
          <li className='p-6 cursor-pointer'>
            <h4>Resume</h4>
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
