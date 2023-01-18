import React from 'react'
import SubTitle from '../title/SubTitle'
import Message from './Message'
import Social from './Social'

const Contact = () => {
  return (
    <>
      <SubTitle subtitle={'Contact'} />
      <div className='grid md:grid-cols-[max-w-lg,max-w-lg] md:auto-rows-fr gap-5 justify-center'>
        <Message />
        <Social />
      </div>
    </>
  )
}

export default Contact
