import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'

export default function SocialBar() {
  return (
    <ol className='flex justify-center space-x-4'>
      <li className=''>
        <a href='https://www.facebook.com/jlee7772' className=''>
          <FaFacebookSquare size={42} className='fill-primary hover:fill-primary-hover' />
        </a>
      </li>
      <li className=''>
        <a href='https://twitter.com/Lee77723' className=''>
          <FaTwitterSquare size={42} className='fill-primary hover:fill-primary-hover' />
        </a>
      </li>
      <li className=''>
        <a href='https://www.linkedin.com/in/josh-lee-406658100/' className=''>
          <FaLinkedin size={42} className='fill-primary hover:fill-primary-hover' />
        </a>
      </li>
      <li className=''>
        <a href='https://github.com/lee44' className=''>
          <FaGithubSquare size={42} className='fill-primary hover:fill-primary-hover' />
        </a>
      </li>
    </ol>
  )
}
