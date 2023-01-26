import React, { useEffect, useState } from 'react'

const Nav = ({ menuItems, scrollToHome }) => {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [menu])

  return (
    <>
      <nav className='container h-14 top-0 flex justify-between items-center text-white'>
        <h2 className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text cursor-pointer' onClick={scrollToHome}>
          JL
        </h2>

        {/* Desktop Menu */}
        <ol className='hidden md:flex h-full'>
          {Object.values(menuItems).map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ol>

        {/* Mobile Menu */}
        <div className='md:hidden space-y-2 cursor-pointer' onClick={toggleMenu}>
          <span className='block w-4 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500'></span>
          <span className='block w-8 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500'></span>
          <span className='block w-4 h-1 ml-auto bg-gradient-to-r from-violet-500 to-fuchsia-500'></span>
        </div>
        <div
          className={`${menu ? 'flex' : 'hidden'} flex-col justify-center w-screen h-screen top-0 left-0 px-8 bg-primary-bg z-[99] fixed`}
        >
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
            {Object.values(menuItems).map((value, index) => {
              return (
                <li key={index} onClick={toggleMenu}>
                  {value}
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}

export default Nav
