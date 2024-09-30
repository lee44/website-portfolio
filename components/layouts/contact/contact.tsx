import React from 'react'
import SubTitle from '../../templates/subTitle'
import Message from './message'
import Social from './social'

const Contact = () => {
  return (
    <>
      <SubTitle subtitle={'Contact'} />
      <div className='grid lg:grid-cols-2 auto-rows-fr lg:gap-10 gap-5 justify-center'>
        <Message />
        <Social />
      </div>
    </>
  )
}

export default Contact
