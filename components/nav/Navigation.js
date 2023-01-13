import React from 'react'

export default function Nav() {
  return (
    <>
      <nav className='container h20 top-0 flex justify-between text-white'>
        <span>Logo</span>
        <ol className='flex'>
          <li className='p-6'>Home</li>
          <li className='p-6'>About</li>
          <li className='p-6'>Skills</li>
          <li className='p-6'>Portfolio</li>
          <li className='p-6'>Contact</li>
          <li className='p-6'>Resume</li>
        </ol>
      </nav>
    </>
  )
}
