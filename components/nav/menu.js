import React from 'react'

const Menu = ({ menu, toggleMenu, scrollToHome, scrollToAbout, scrollToSkills, scrollToPortfolio, scrollToContact }) => {
  console.log('Menu Rendered')
  return (
    <div className={`${menu ? 'flex' : 'hidden'} flex-col justify-center w-screen h-screen top-0 left-0 px-8 bg-primary-bg z-[99] fixed`}>
      <button type='button' className='text-white rounded-md p-2 flex items-center justify-end' onClick={toggleMenu}>
        <svg
          className='h-12 w-12'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          aria-hidden='true'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
        </svg>
      </button>
      <ol className='flex flex-col'>
        <li
          className='cursor-pointer'
          onClick={() => {
            toggleMenu()
            scrollToHome()
          }}
        >
          <h1>Home</h1>
        </li>
        <li
          className='cursor-pointer'
          onClick={() => {
            toggleMenu()
            scrollToAbout()
          }}
        >
          <h1>About</h1>
        </li>
        <li
          className='cursor-pointer'
          onClick={() => {
            toggleMenu()
            scrollToSkills()
          }}
        >
          <h1>Skills</h1>
        </li>
        <li
          className='cursor-pointer'
          onClick={() => {
            toggleMenu()
            scrollToPortfolio()
          }}
        >
          <h1>Portfolio</h1>
        </li>
        <li
          className='cursor-pointer'
          onClick={() => {
            toggleMenu()
            scrollToContact()
          }}
        >
          <h1>Contact</h1>
        </li>
        <li
          className='cursor-pointer'
          onClick={() => {
            toggleMenu()
          }}
        >
          <h1>Resume</h1>
        </li>
      </ol>
    </div>
  )
}

export default Menu
