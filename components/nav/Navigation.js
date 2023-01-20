import React, { useState } from 'react'
import Menu from './menu'
import MenuItem from './menuItem'

const Nav = ({ menu, toggleMenu, scrollToHome, scrollToAbout, scrollToSkills, scrollToPortfolio, scrollToContact }) => {
  return (
    <>
      <nav className='md:container h-14 top-0 px-8 flex justify-between items-center text-white'>
        <h2 className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text'>JL</h2>
        <ol className='hidden md:flex h-full'>
          <MenuItem title={'Home'} scrollTo={scrollToHome} />
          <MenuItem title={'About'} scrollTo={scrollToAbout} />
          <MenuItem title={'Skills'} scrollTo={scrollToSkills} />
          <MenuItem title={'Portfolio'} scrollTo={scrollToPortfolio} />
          <MenuItem title={'Contact'} scrollTo={scrollToContact} />
          <MenuItem title={'Resume'} scrollTo={scrollToHome} />
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
