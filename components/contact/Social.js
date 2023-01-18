import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import SocialBar from '../social/SocialBar'

const Social = () => {
  return (
    <>
      <div className='p-5 bg-primary-bg rounded-md'>
        <h3 className='text-primary mt-0'>Say Hello Here</h3>
        <hr />
        <SocialBar direction={'vertical'} showLinks={true} />
      </div>
    </>
  )
}

export default Social
