import React from 'react'
import Card from '../../templates/card'

const Message = () => {
  return (
    <>
      <Card classes={'flex flex-col max-w-lg xl:justify-self-end min-w-0'} animation={'fade-left'}>
        <h3 className='text-primary my-0'>Send Me A Message</h3>
        <hr />
        <form className='w-full' action='/' method='POST' data-netlify='true'>
          <input className='w-full p-2 bg-white rounded-md' placeholder='Name' type='text' />
          <input className='w-full p-2 my-3 bg-white rounded-md' placeholder='Email' type='email' />
          <textarea className='w-full p-2 bg-white rounded-md' placeholder='Message' cols={5} rows={5} />
        </form>
      </Card>
    </>
  )
}

export default Message
