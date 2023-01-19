import React from 'react'

const Dot = () => {
  return (
    <div className='col-start-5 col-end-6 mr-10 md:mx-auto relative'>
      <div className='h-full w-6 flex items-center justify-center'>
        <div className='h-full w-1 bg-primary pointer-events-none'></div>
      </div>
      <div className='w-7 h-7 absolute top-1/2 -left-0.5 -mt-3 rounded-full bg-primary-bg shadow border-4 border-primary'></div>
    </div>
  )
}

export default Dot