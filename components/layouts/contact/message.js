import React from 'react'
import Card from '../../templates/card'

const Message = () => {
  return (
    <>
      <Card classes={'flex flex-col max-w-lg xl:justify-self-end min-w-0'} animation={'fade-left'}>
        <h3 className='my-0 text-primary'>Send Me A Message</h3>
        <hr />
        <form name='contact' className='w-full' method='POST' data-netlify='true' onChange={(e) => console.log(e.target.value)}>
          <input type='hidden' name='form-name' value='contact' />
          <input className='w-full p-2 text-black bg-white rounded-md' placeholder='Name' name='name' type='text' required />
          <input className='w-full p-2 my-3 text-black bg-white rounded-md' placeholder='Email' name='email' type='email' required />
          <textarea className='w-full p-2 text-black bg-white rounded-md' placeholder='Message' name='message' cols={5} rows={5} />
          <input className='flex-auto w-full py-3 text-lg font-bold text-center rounded-md bg-button hover:bg-button-hover' type='Submit' value='Submit' />
        </form>
      </Card>
    </>
  )
}

export default Message
