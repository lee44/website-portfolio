import React from 'react'

const MenuItem = ({ title, scrollTo }) => {
  return (
    <div className='h-full mx-3 flex items-center cursor-pointer group transition-all duration-300 ease-in-out' onClick={scrollTo}>
      <h5
        className='hidden md:block px-2 pb-2 mt-2 bg-left-bottom transition-all duration-500 ease-out bg-[length:0%_3px] 
                   bg-no-repeat group-hover:bg-[length:100%_3px] bg-gradient-to-r from-violet-500 to-fuchsia-500'
      >
        {title}
      </h5>
      <h2 className='block md:hidden w-full'>{title}</h2>
    </div>
  )
}

export default MenuItem
