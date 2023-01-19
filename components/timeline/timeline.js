import React from 'react'
import SubTitle from '../title/subTitle'
import { events } from './data'
import Dot from './dot'

const Timeline = () => {
  return (
    <>
      <SubTitle subtitle={'About Me/Goals'} />

      <div className='flex flex-col md:grid grid-cols-9 mx-auto p-2'>
        {events.map((value, index) => {
          if (index % 2 === 0) {
            return (
              <div key={index} className='flex flex-row-reverse md:contents'>
                <div className='bg-primary-bg col-start-1 col-end-5 p-5 rounded-xl ml-auto sm:my-4 shadow-md'>
                  <h5 className='font-semibold text-right my-0 text-primary'>{value.period}</h5>
                  <h4 className='font-semibold text-right'>{value.title}</h4>
                  <p className='leading-tight text-right my-0'>{value.description}</p>
                </div>
                <Dot />
              </div>
            )
          } else {
            return (
              <div key={index} className='flex md:contents'>
                <Dot />
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
