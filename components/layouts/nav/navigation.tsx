import React, { useEffect, useState } from 'react'

type menuItemsType = {
  Home: JSX.Element
  AboutMe: JSX.Element
  Skills: JSX.Element
  Portfolio: JSX.Element
  Resume: JSX.Element
}

const Nav = ({ menuItems, scrollToHome }: { menuItems: menuItemsType, scrollToHome: () => void }) => {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  useEffect(() => {
    if (menu) {
      document.body.classList.add('hideScrollbar')
    } else {
      document.body.classList.remove('hideScrollbar')
    }
  }, [menu])

  return (
    <>
      <nav className='container top-0 flex items-center justify-between text-white h-14'>
        <h2 className='text-transparent cursor-pointer bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text' onClick={scrollToHome}>
          JL
        </h2>

        {/* Desktop Menu */}
        <ol className='hidden h-full md:flex'>
          {Object.values(menuItems).map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ol>

        {/* Mobile Menu */}
        <div className='space-y-2 cursor-pointer md:hidden' onClick={toggleMenu}>
          <span className='block w-4 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500'></span>
          <span className='block w-8 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500'></span>
          <span className='block w-4 h-1 ml-auto bg-gradient-to-r from-violet-500 to-fuchsia-500'></span>
        </div>
        <div
          className={`${menu ? 'flex' : 'hidden'} flex-col justify-center w-screen h-screen top-0 left-0 px-8 bg-primary-bg z-[99] fixed`}
        >
          <button type='button' className='flex items-center justify-end p-2 text-white rounded-md' onClick={toggleMenu}>
            <svg
              className='w-12 h-12'
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
