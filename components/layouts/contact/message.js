import React from 'react'
import Card from '../../templates/card'

const Message = () => {
  return (
    <>
      <Card classes={'flex flex-col max-w-lg xl:justify-self-end min-w-0'} animation={'fade-left'}>
        <h3 className='text-primary my-0'>Send Me A Message</h3>
        <hr />
        <form className='w-full' action='/' method='POST' data-netlify='true'>
          <input className='w-full p-2 bg-white rounded-md text-black' placeholder='Name' type='text' />
          <input className='w-full p-2 my-3 bg-white rounded-md text-black' placeholder='Email' type='email' />
          <textarea className='w-full p-2 bg-white rounded-md text-black' placeholder='Message' cols={5} rows={5} />
          <input
            className='py-3 w-full rounded-md text-center font-bold text-lg flex-auto bg-button hover:bg-button-hover'
            type='Submit'
            value='Submit'
          />
        </form>
      </Card>
    </>
  )
}

export default Message
