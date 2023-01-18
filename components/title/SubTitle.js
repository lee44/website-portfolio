import React from 'react'

const SubTitle = ({ subtitle }) => {
  return (
    <div className='flex flex-col items-center my-8'>
      <h1 className='mb-0'>{subtitle}</h1>
      <hr className='w-16 h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 border-0'></hr>
    </div>
  )
}

export default SubTitle
