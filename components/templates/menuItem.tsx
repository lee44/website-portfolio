import React from 'react'

const MenuItem = ({ title, scrollTo }: { title: string, scrollTo: () => void }) => {
  return (
    <div className='flex items-center h-full mx-3 transition-all duration-300 ease-in-out cursor-pointer group' onClick={scrollTo}>
      <h5
        className='hidden md:block px-2 pb-2 mt-2 bg-left-bottom transition-all duration-500 ease-out bg-[length:0%_3px] 
                   bg-no-repeat group-hover:bg-[length:100%_3px] bg-gradient-to-r from-violet-500 to-fuchsia-500'
      >
        {title}
      </h5>
      <h2 className='block w-full md:hidden'>{title}</h2>
    </div>
  )
}

export default MenuItem
