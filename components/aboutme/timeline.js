import React from 'react'
import Card from '../ui/card'
import SubTitle from '../title/subTitle'
import { events } from './data'
import Dot from './dot'

const Timeline = () => {
  return (
    <>
      <div className='flex flex-col md:grid grid-cols-9 mx-auto p-2'>
        {events.map((value, index) => {
          if (index % 2 === 0) {
            return (
              <div key={index} className='flex flex-row-reverse md:contents'>
                <Card classes={'col-start-1 col-end-5 ml-auto sm:my-4 shadow-md'}>
                  <h5 className='font-semibold text-right my-0 text-primary'>{value.period}</h5>
                  <h4 className='font-semibold text-right'>{value.title}</h4>
                  <p className='leading-tight text-right my-0'>{value.description}</p>
                </Card>
                <Dot />
              </div>
            )
          } else {
            return (
              <div key={index} className='flex md:contents'>
                <Dot />
                <Card classes={'col-start-6 col-end-10 mr-auto shadow-md'}>
                  <h5 className='font-semibold text-left my-0 text-primary'>{value.period}</h5>
                  <h4 className='font-semibold text-left'>{value.title}</h4>
                  <p className='leading-tight text-left my-0'>{value.description}</p>
                </Card>
              </div>
            )
          }
        })}
      </div>
    </>
  )
}

export default Timeline
