import React from 'react'
import Card from '../../templates/card'
import SocialBar from '../social/socialBar'

const Social = () => {
  return (
    <>
      <Card classes={'flex flex-col max-w-lg md:justify-self-start'} animation={'fade-right'}>
        <h3 className='text-primary my-0'>Say Hello Here</h3>
        <hr />
        <SocialBar direction={'vertical'} showLinks={true} />
      </Card>
    </>
  )
}

export default Social
