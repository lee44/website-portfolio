import React from 'react'

const Message = () => {
  return (
    <>
      <div className='p-5 bg-primary-bg rounded-md'>
        <h3 className='text-primary mt-0'>Send Me A Message</h3>
        <hr />
        <form className='w-full'>
          <input className='w-full p-2 bg-white rounded-md' placeholder='Name' type='text' />
          <input className='w-full p-2 my-3 bg-white rounded-md' placeholder='Email' type='email' />
          <textarea className='w-full p-2 bg-white rounded-md' placeholder='Message' cols={5} rows={5} />
        </form>
      </div>
    </>
  )
}

export default Message
