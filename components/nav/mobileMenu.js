import React from 'react'

const MobileMenu = ({ menu, toggleMenu, scrollToHome, scrollToAbout, scrollToSkills, scrollToPortfolio, scrollToContact }) => {
  const menuItems = [
    {
      name: 'Home',
      scrollFn: scrollToHome(),
    },
    {
      name: 'About',
      scrollFn: scrollToAbout(),
    },
    {
      name: 'Skills',
      scrollFn: scrollToSkills(),
    },
    {
      name: 'Portfolio',
      scrollFn: scrollToPortfolio(),
    },
    {
      name: 'Contact',
      scrollFn: scrollToContact(),
    },
    {
      name: 'Resume',
      scrollFn: () => {
        window.open('/resume.pdf', '_blank')
      },
    },
  ]

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
        {menuItems.map((item, index) => (
          <li
            key={index}
            className='cursor-pointer'
            onClick={() => {
              toggleMenu()
              item.scrollFn
            }}
          >
            <h1>{item.name}</h1>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default MobileMenu
