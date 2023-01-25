import React, { useState } from 'react'

const Nav = ({ mobileMenu, menuItems, toggleMenu, scrollToHome }) => {
  return (
    <>
      <nav className='md:container h-14 top-0 px-8 flex justify-between items-center text-white'>
        <h2 className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text cursor-pointer' onClick={scrollToHome}>
          JL
        </h2>
        <ol className='hidden md:flex h-full'>
          {Object.values(menuItems).map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ol>
        <div className='md:hidden space-y-2 cursor-pointer' onClick={toggleMenu}>
          <span className='block w-4 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500'></span>
          <span className='block w-8 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500'></span>
          <span className='block w-4 h-1 ml-auto bg-gradient-to-r from-violet-500 to-fuchsia-500'></span>
        </div>
        {mobileMenu}
      </nav>
    </>
  )
}

export default Nav
