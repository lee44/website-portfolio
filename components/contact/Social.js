import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import SocialBar from '../social/socialBar'

const Social = () => {
  return (
    <>
      <div className='max-w-lg md:justify-self-start p-5 bg-primary-bg rounded-md flex flex-col'>
        <h3 className='text-primary my-0'>Say Hello Here</h3>
        <hr />
        <SocialBar direction={'vertical'} showLinks={true} />
      </div>
    </>
  )
}

export default Social
