import React from 'react'
import SubTitle from '../../templates/subTitle'
import Message from './message'
import Social from './social'

const Contact = () => {
  return (
    <>
      <SubTitle subtitle={'Contact'} />
      <div className='grid md:grid-cols-2 md:auto-rows-fr lg:gap-10 md:gap-5 gap-7 justify-center'>
        <Message />
        <Social />
      </div>
    </>
  )
}

export default Contact
