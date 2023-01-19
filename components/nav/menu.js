import React from 'react'

const Menu = ({ menu, toggleMenu }) => {
  return (
    <div className={`${menu ? 'flex' : 'hidden'} flex-col justify-center w-screen h-screen top-0 left-0 px-8 bg-primary-bg z-[99] fixed`}>
      <button type='button' className='text-white rounded-md p-2 flex items-center justify-end' onClick={toggleMenu}>
        <svg className='h-12 w-12' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
          <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12' />
        </svg>
      </button>
      <ol className='flex flex-col'>
        <li className=''>
          <h1>Home</h1>
        </li>
        <li className=''>
          <h1>About</h1>
        </li>
        <li className=''>
          <h1>Skills</h1>
        </li>
        <li className=''>
          <h1>Portfolio</h1>
        </li>
        <li className=''>
          <h1>Contact</h1>
        </li>
        <li className=''>
          <h1>Resume</h1>
        </li>
      </ol>
    </div>
  )
}

export default Menu
