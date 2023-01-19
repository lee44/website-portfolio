import React from 'react'
import SubTitle from '../title/subTitle'
import { events } from './data'

const Timeline = () => {
  return (
    <>
      <SubTitle subtitle={'About Me/Goals'} />

      <div className='flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50'>
        {events.map((value, index) => {
          if (index % 2 === 0) {
            return (
              <div key={index} className='flex flex-row-reverse md:contents'>
                <div className='bg-primary-bg col-start-1 col-end-5 p-5 rounded-xl ml-auto shadow-md'>
                  <h5 className='font-semibold text-right my-0 text-primary'>{value.period}</h5>
                  <h4 className='font-semibold text-right'>{value.title}</h4>
                  <p className='leading-tight text-right my-0'>{value.description}</p>
                </div>
                <div className='col-start-5 col-end-6 md:mx-auto relative mr-10'>
                  <div className='h-full w-6 flex items-center justify-center'>
                    <div className='h-full w-1 bg-primary pointer-events-none'></div>
                  </div>
                  <div className='w-7 h-7 absolute top-1/2 -left-0.5 -mt-3 rounded-full bg-primary-bg shadow border-4 border-primary'></div>
                </div>
              </div>
            )
          } else {
            return (
              <div key={index} className='flex md:contents'>
                <div className='col-start-5 col-end-6 mr-10 md:mx-auto relative'>
                  <div className='h-full w-6 flex items-center justify-center'>
                    <div className='h-full w-1 bg-primary pointer-events-none'></div>
                  </div>
                  <div className='w-7 h-7 absolute top-1/2 -left-0.5 -mt-3 rounded-full bg-primary-bg shadow border-4 border-primary'></div>
                </div>
                <div className='bg-primary-bg col-start-6 col-end-10 p-5 rounded-xl mr-auto shadow-md'>
                  <h5 className='font-semibold text-left my-0 text-primary'>{value.period}</h5>
                  <h4 className='font-semibold text-left'>{value.title}</h4>
                  <p className='leading-tight text-left my-0'>{value.description}</p>
                </div>
              </div>
            )
          }
        })}
      </div>
    </>
  )
}

export default Timeline
