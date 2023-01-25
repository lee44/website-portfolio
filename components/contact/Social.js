import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import Card from '../ui/card'
import SocialBar from '../social/socialBar'

const Social = () => {
  return (
    <>
      <Card classes={'flex flex-col max-w-lg md:justify-self-start'} animation={'fade-left'}>
        <h3 className='text-primary my-0'>Say Hello Here</h3>
        <hr />
        <SocialBar direction={'vertical'} showLinks={true} />
      </Card>
    </>
  )
}

export default Social
